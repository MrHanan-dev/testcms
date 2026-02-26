import type { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
    title: 'Colors | TotalPMP Design System',
};

const ColorRow = ({ title, desc, colors }: { title: string, desc: string, colors: any[] }) => (
    <section className="mb-16">
        <div className="mb-6 border-b border-gray-200 pb-4">
            <h2 className="h2 text-primary mb-2">{title}</h2>
            <p className="text-gray-600 text-lg max-w-2xl">{desc}</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {colors.map((c, i) => (
                <div key={i} className="flex flex-col">
                    <div
                        className={`h-32 rounded-2xl mb-4 shadow-sm border ${c.border || 'border-transparent'}`}
                        style={{ backgroundColor: c.hex }}
                    ></div>
                    <div className="space-y-1">
                        <h3 className="font-bold text-gray-900">{c.name}</h3>
                        <div className="text-sm font-mono text-gray-500 uppercase">{c.hex}</div>
                        {c.token && <div className="text-xs text-primary bg-primary/10 px-2 py-1 rounded inline-block mt-1 font-mono">bg-{c.token}</div>}
                    </div>
                </div>
            ))}
        </div>
    </section>
);

export default function DesignSystemColors() {
    return (
        <div className="space-y-8">
            <header className="mb-12">
                <span className="label-tag block mb-2">Foundations</span>
                <h1 className="h1 text-gray-900">colors.</h1>
                <p className="text-xl text-gray-600 mt-4 max-w-3xl leading-relaxed">
                    The TotalPMP color palette provides a foundation for trust, accessibility, and modern aesthetics.
                </p>
            </header>

            <ColorRow
                title="Primary Palette"
                desc="Our core brand colors. Extensive use of deep navy establishing corporate reliability."
                colors={[
                    { name: 'Primary (Brand)', hex: '#0B3C5D', token: 'primary' },
                    { name: 'Primary Dark', hex: '#072A40', token: 'primary-700' },
                    { name: 'Accent (Gold)', hex: '#D4AF37', token: 'accent' },
                ]}
            />

            <ColorRow
                title="Neutrals"
                desc="Supporting colors for text, backgrounds, and structural elements."
                colors={[
                    { name: 'Text / Darkest Gray', hex: '#1a1a2e', token: 'gray-900' },
                    { name: 'Muted Text / Slate', hex: '#4a5568', token: 'gray-600' },
                    { name: 'Border Gray', hex: '#E2E8F0', token: 'border', border: 'border-gray-200' },
                    { name: 'Light Background', hex: '#f7f9fc', token: 'gray-100', border: 'border-gray-200' },
                    { name: 'White Surface', hex: '#ffffff', token: 'white', border: 'border-gray-200' },
                ]}
            />

            <section className="mb-16">
                <div className="mb-6 border-b border-gray-200 pb-4">
                    <h2 className="h2 text-primary mb-2">Gradients & Overlays</h2>
                    <p className="text-gray-600 text-lg max-w-2xl">Complex color treatments used in Hero sections.</p>
                </div>
                <div className="grid md:grid-cols-2 gap-8">
                    <div className="bg-gradient-to-br from-primary to-primary-700 h-48 rounded-3xl shadow-md p-6 flex items-end">
                        <span className="text-white font-bold tracking-wider font-mono text-sm bg-black/20 px-3 py-1 rounded">bg-gradient-to-br from-primary to-primary-700</span>
                    </div>
                    <div className="relative h-48 rounded-3xl overflow-hidden shadow-md">
                        <Image
                            src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80"
                            alt="Office"
                            fill
                            className="absolute inset-0 w-full h-full object-cover grayscale"
                        />
                        <div className="absolute inset-0 bg-primary/60 mix-blend-multiply"></div>
                        <div className="absolute inset-0 p-6 flex items-end">
                            <span className="text-white font-bold tracking-wider font-mono text-sm bg-black/30 px-3 py-1 rounded">Primary overlay pattern (opacity 60%)</span>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
