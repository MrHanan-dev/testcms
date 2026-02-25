import sharp from 'sharp';
import fs from 'fs/promises';
import path from 'path';

const PUBLIC_DIR = path.resolve('public');
const CERT_DIR = path.join(PUBLIC_DIR, 'certifications');
const IMAGES_DIR = path.join(PUBLIC_DIR, 'images');

const BACKGROUND_COLOR = '#0B1D35';
const TARGET_WIDTH = 1920;
const TARGET_HEIGHT = 1080;

async function processImage(inputPath, outputPath, isCollage = false) {
    try {
        const logoBuffer = await sharp(path.join(PUBLIC_DIR, 'logo.png'))
            .resize({ width: 300 })
            .toBuffer();

        if (isCollage) {
            // Create collage of certifications
            const cert1 = await sharp(path.join(CERT_DIR, 'pmp.webp')).resize({ height: 400, fit: 'contain' }).toBuffer();
            const cert2 = await sharp(path.join(CERT_DIR, 'capm.webp')).resize({ height: 400, fit: 'contain' }).toBuffer();
            const cert3 = await sharp(path.join(CERT_DIR, 'pmi-cp.webp')).resize({ height: 400, fit: 'contain' }).toBuffer();

            await sharp({
                create: {
                    width: TARGET_WIDTH,
                    height: TARGET_HEIGHT,
                    channels: 4,
                    background: BACKGROUND_COLOR,
                }
            })
                .composite([
                    { input: cert1, gravity: 'center', left: TARGET_WIDTH / 2 - 600 - 200, top: (TARGET_HEIGHT - 400) / 2 },
                    { input: cert2, gravity: 'center', left: TARGET_WIDTH / 2 - 200, top: (TARGET_HEIGHT - 400) / 2 },
                    { input: cert3, gravity: 'center', left: TARGET_WIDTH / 2 + 200 + 200, top: (TARGET_HEIGHT - 400) / 2 },
                    // Watermark
                    { input: logoBuffer, gravity: 'southeast', left: TARGET_WIDTH - 320, top: TARGET_HEIGHT - 100, blend: 'over' }
                ])
                .png()
                .toFile(outputPath);
            console.log(`✅ Collage created at: ${outputPath}`);
            return;
        }

        // Process single image
        const imageInfo = await sharp(inputPath).metadata();

        await sharp({
            create: {
                width: TARGET_WIDTH,
                height: TARGET_HEIGHT,
                channels: 4,
                background: BACKGROUND_COLOR,
            }
        })
            .composite([
                {
                    input: await sharp(inputPath)
                        .resize({
                            width: TARGET_WIDTH,
                            height: TARGET_HEIGHT,
                            fit: 'contain',
                            background: { r: 0, g: 0, b: 0, alpha: 0 }
                        })
                        .toBuffer(),
                    gravity: 'center'
                },
                {
                    input: await sharp(logoBuffer).ensureAlpha(0.28).toBuffer(),
                    gravity: 'southeast',
                    blend: 'over'
                }
            ])
            .png()
            .toFile(outputPath);

        console.log(`✅ Processed image saved to: ${outputPath}`);
    } catch (error) {
        console.error(`❌ Failed processing ${inputPath}:`, error);
    }
}

async function main() {
    console.log('Generating Hero Images...');

    // Create processed hero slides
    await processImage(
        path.join(IMAGES_DIR, 'Totalqsconsultant.jpeg'),
        path.join(PUBLIC_DIR, 'hero-totalqs-consultant.png')
    );

    await processImage(
        path.join(IMAGES_DIR, 'pmbok_evolution.jpeg'),
        path.join(PUBLIC_DIR, 'hero-pmbok-evolution.png')
    );

    // Create combined certifications collage
    await processImage(null, path.join(PUBLIC_DIR, 'hero-certifications-collage.png'), true);

    console.log('Done!');
}

main();
