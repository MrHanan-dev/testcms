export const metadata = {
    title: 'Colors | Millpond Design System',
};

const ColorRow = ({ title, desc, colors }: { title: string, desc: string, colors: any[] }) => (
    <section className="mb-16">
        <div className="mb-6 border-b border-gray-200 pb-4">
            <h2 className="h2 text-primary-600 mb-2">{title}</h2>
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
                        {c.token && <div className="text-xs text-primary-600 bg-primary-100 px-2 py-1 rounded inline-block mt-1 font-mono">bg-{c.token}</div>}
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
                    The Millpond color palette provides a foundation for trust, accessibility, and modern aesthetics.
                </p>
            </header>

            <ColorRow
                title="Primary Palette"
                desc="Our core brand colors. Extensive use of deep navy and sky blues establishes corporate reliability."
                colors={[
                    { name: 'Deep Navy Blue', hex: '#1a5aa8', token: 'primary-600' },
                    { name: 'Millpond Blue', hex: '#1e6fc7', token: 'primary-500' },
                    { name: 'Sky Blue', hex: '#3ca3e8', token: 'primary-400' },
                    { name: 'Pale Blue', hex: '#d6eaf8', token: 'primary-100' },
                ]}
            />

            <ColorRow
                title="Accent Palette"
                desc="Used sparingly to draw attention to critical interactions (CTAs) and add vibrancy."
                colors={[
                    { name: 'Millpond Magenta', hex: '#e8186c', token: 'accent-500' },
                    { name: 'Hot Pink', hex: '#f03a88', token: 'accent-400' },
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

            <ColorRow
                title="Semantic States"
                desc="Colors to communicate functional meaning to users."
                colors={[
                    { name: 'Success Green', hex: '#22c55e', token: 'success' },
                    { name: 'Error Red', hex: '#ef4444', token: 'error' },
                    { name: 'Warning Amber', hex: '#f59e0b', token: 'warning' },
                    { name: 'Info Blue', hex: '#3ca3e8', token: 'info' },
                ]}
            />

            <section className="mb-16">
                <div className="mb-6 border-b border-gray-200 pb-4">
                    <h2 className="h2 text-primary-600 mb-2">Gradients & Overlays</h2>
                    <p className="text-gray-600 text-lg max-w-2xl">Complex color treatments used in Hero sections.</p>
                </div>
                <div className="grid md:grid-cols-2 gap-8">
                    <div className="bg-hero-gradient h-48 rounded-3xl shadow-md p-6 flex items-end">
                        <span className="text-white font-bold tracking-wider font-mono text-sm bg-black/20 px-3 py-1 rounded">bg-hero-gradient</span>
                    </div>
                    <div className="relative h-48 rounded-3xl overflow-hidden shadow-md">
                        <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80" alt="Office" className="absolute inset-0 w-full h-full object-cover grayscale" />
                        <div className="absolute inset-0 bg-primary-600/60 mix-blend-multiply"></div>
                        <div className="absolute inset-0 p-6 flex items-end">
                            <span className="text-white font-bold tracking-wider font-mono text-sm bg-black/30 px-3 py-1 rounded">Blue overlay pattern (opacity 60%)</span>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
