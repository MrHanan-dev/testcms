import { Target, Heart, ShieldCheck, Zap } from 'lucide-react';

export const metadata = {
    title: 'Overview | TheAgileNest Design System',
};

export default function DesignSystemOverview() {
    return (
        <div className="space-y-12">
            <header className="border-b border-gray-200 pb-8">
                <span className="label-tag block mb-2">Introduction</span>
                <h1 className="h1 text-gray-900 mb-4">brand overview.</h1>
                <p className="text-xl text-gray-600 max-w-3xl leading-relaxed">
                    The TheAgileNest design system brings our brand personality to life. It translates our "safe pair of hands" energy into a cohesive collection of colors, typography, components, and interactions.
                </p>
            </header>

            <section className="space-y-6">
                <h2 className="h2 text-primary-600">Personality & Voice</h2>
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {[
                        { icon: ShieldCheck, title: 'Trustworthy', desc: '"A safe pair of hands". We deliver on our promises reliably.' },
                        { icon: Target, title: 'Expert', desc: 'Deep domain knowledge communicated directly and simply.' },
                        { icon: Zap, title: 'Modern', desc: 'Forward-looking, clean, and highly functional aesthetics.' },
                        { icon: Heart, title: 'Approachable', desc: 'Professional, but always human, collaborative, and friendly.' }
                    ].map((trait, i) => (
                        <div key={i} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                            <div className="w-12 h-12 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center mb-4">
                                <trait.icon size={24} />
                            </div>
                            <h3 className="h4 text-gray-900 mb-2">{trait.title}</h3>
                            <p className="text-gray-600 text-sm leading-relaxed">{trait.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            <section className="space-y-6">
                <h2 className="h2 text-primary-600">Visual Identity Principles</h2>
                <div className="bg-white rounded-3xl p-8 border border-gray-200 shadow-sm space-y-6 line-height-relaxed text-gray-700">
                    <div>
                        <h3 className="h3 text-gray-900 mb-2">Color Usage</h3>
                        <p>Our palette relies heavily on <strong>Deep Executive Blue</strong> and <strong>Primary Blue</strong> to establish trust, stability, and corporate foundation. To prevent feeling too sterile, we inject punchy, sparse moments of <strong>Bright Cyan (Accent)</strong> to draw attention to critical interactions (CTAs) and add vibrancy.</p>
                    </div>
                    <div>
                        <h3 className="h3 text-gray-900 mb-2">Typography</h3>
                        <p>We combine the strong, approachable, yet authoritative <strong className="font-display">Outfit</strong> for all headings. This balances the corporate trust with our "expert" trait. For dense body copy, we lean on the highly functional <strong>Inter</strong>.</p>
                    </div>
                    <div>
                        <h3 className="h3 text-gray-900 mb-2">Shape & Structure</h3>
                        <p>UI elements utilize softened corners (rounded-lg, rounded-2xl) and pill shapes (rounded-full) for buttons and tags. This removes digital "sharpness" and echoes a modern, fluid approach.</p>
                    </div>
                </div>
            </section>

            <section className="space-y-6">
                <h2 className="h2 text-primary-600">Logo Display</h2>
                <div className="grid md:grid-cols-2 gap-8">
                    <div className="bg-white p-12 rounded-3xl flex items-center justify-center border border-gray-100 shadow-sm">
                        <span className="font-display font-extrabold text-5xl text-primary-600 tracking-tight">
                            TheAgileNest<span className="text-accent-500">.</span>
                        </span>
                    </div>
                    <div className="bg-primary-600 p-12 rounded-3xl flex items-center justify-center shadow-lg">
                        <span className="font-display font-extrabold text-5xl text-white tracking-tight">
                            TheAgileNest<span className="text-accent-500">.</span>
                        </span>
                    </div>
                </div>
            </section>
        </div>
    );
}
