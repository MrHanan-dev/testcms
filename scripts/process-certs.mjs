import sharp from 'sharp';
import path from 'path';

const PUBLIC_DIR = path.resolve('public');
const CERT_DIR = path.join(PUBLIC_DIR, 'certifications');

const TARGET_WIDTH = 1920;
const TARGET_HEIGHT = 1080;
const BG_COLOR = '#FFFFFF'; // White background to blend jpegs

async function createCertCollage() {
    const outputPath = path.join(PUBLIC_DIR, 'hero-certifications-collage.png');
    console.log('Generating Certifications Collage...');

    try {
        // 1. Read files
        const tripicBuf = await sharp(path.join(CERT_DIR, 'tripic.jpeg')).resize({ height: 700, fit: 'inside' }).toBuffer();
        const pmiBuf = await sharp(path.join(CERT_DIR, 'pmi.jpeg')).resize({ width: 300, fit: 'inside' }).toBuffer();

        // Badges
        const badgeHeight = 300;
        const pmpBuf = await sharp(path.join(CERT_DIR, 'pmp.webp')).resize({ height: badgeHeight, fit: 'inside' }).toBuffer();
        const capmBuf = await sharp(path.join(CERT_DIR, 'capm.webp')).resize({ height: badgeHeight, fit: 'inside' }).toBuffer();
        const pmicpBuf = await sharp(path.join(CERT_DIR, 'pmi-cp.webp')).resize({ height: badgeHeight, fit: 'inside' }).toBuffer();

        // Watermark
        const logoBuf = await sharp(path.join(PUBLIC_DIR, 'logo.png'))
            .resize({ width: 250 })
            .ensureAlpha(0.5)
            .toBuffer();

        // Composite them onto a 1920x1080 canvas
        await sharp({
            create: { width: TARGET_WIDTH, height: TARGET_HEIGHT, channels: 4, background: BG_COLOR }
        })
            .composite([
                // Left side: The big triangle (tripic)
                { input: tripicBuf, left: 150, top: (TARGET_HEIGHT - 700) / 2 },

                // Right side top: PMI Logo
                { input: pmiBuf, left: 1100, top: 200 },

                // Right side bottom: The 3 Badges in a row
                { input: pmpBuf, left: 950, top: 450 },
                { input: capmBuf, left: 1300, top: 450 },
                { input: pmicpBuf, left: 1650, top: 450 },

                // Bottom right watermark
                { input: logoBuf, gravity: 'southeast' }
            ])
            .png()
            .toFile(outputPath);

        console.log(`✅ Success! Collage saved to ${outputPath}`);
    } catch (error) {
        console.error('❌ Error creating collage:', error);
    }
}

createCertCollage();
