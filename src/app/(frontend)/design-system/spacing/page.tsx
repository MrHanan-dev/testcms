export const metadata = {
    title: 'Spacing | TheAgileNest Design System',
};

const SpacingSpecimen = ({ token, pixels, rems }: { token: string, pixels: string, rems: string }) => (
    <div className="flex items-center gap-6 py-4 border-b border-gray-100 hover:bg-white rounded-xl px-4 -mx-4 transition-colors">
        <div className="w-24 shrink-0">
            <div className="font-mono font-bold text-accent-500">{token}</div>
        </div>
        <div className="w-32 shrink-0 text-gray-500 text-sm font-mono hidden sm:block">
            {pixels} / {rems}
        </div>
        <div className="flex-1 overflow-hidden">
            <div className="bg-primary-100 border border-primary-200 h-6 rounded flex items-center justify-center text-[10px] text-primary-600" style={{ width: pixels }}>
                {parseInt(pixels) >= 24 ? pixels : ''}
            </div>
        </div>
    </div>
);

export default function DesignSystemSpacing() {
    return (
        <div className="space-y-12">
            <header className="mb-12">
                <span className="label-tag block mb-2">Foundations</span>
                <h1 className="h1 text-gray-900">spacing.</h1>
                <p className="text-xl text-gray-600 mt-4 max-w-3xl leading-relaxed">
                    The TheAgileNest spatial system is built on a 4px base unit. Consistent spacing creates a predictable rhythm that users perceive as organized and professional.
                </p>
            </header>

            <section>
                <h2 className="h2 text-primary-600 mb-8 pb-4 border-b border-gray-200">Spacing Scale</h2>

                <div className="bg-white rounded-3xl p-6 md:p-10 shadow-sm border border-gray-200">
                    <div className="hidden sm:flex text-xs font-bold uppercase tracking-wider text-gray-400 mb-4 px-4 border-b border-gray-100 pb-2">
                        <div className="w-24">Token</div>
                        <div className="w-32">Pixels / Rems</div>
                        <div>Visual Representation</div>
                    </div>

                    <SpacingSpecimen token="1" pixels="4px" rems="0.25rem" />
                    <SpacingSpecimen token="2" pixels="8px" rems="0.5rem" />
                    <SpacingSpecimen token="3" pixels="12px" rems="0.75rem" />
                    <SpacingSpecimen token="4" pixels="16px" rems="1rem" />
                    <SpacingSpecimen token="5" pixels="20px" rems="1.25rem" />
                    <SpacingSpecimen token="6" pixels="24px" rems="1.5rem" />
                    <SpacingSpecimen token="8" pixels="32px" rems="2rem" />
                    <SpacingSpecimen token="10" pixels="40px" rems="2.5rem" />
                    <SpacingSpecimen token="12" pixels="48px" rems="3rem" />
                    <SpacingSpecimen token="16" pixels="64px" rems="4rem" />
                    <SpacingSpecimen token="20" pixels="80px" rems="5rem" />
                    <SpacingSpecimen token="24" pixels="96px" rems="6rem" />
                    <SpacingSpecimen token="32" pixels="128px" rems="8rem" />
                </div>
            </section>

            <section className="pt-12">
                <h2 className="h2 text-primary-600 mb-8 pb-4 border-b border-gray-200">Layout Systems</h2>

                <div className="grid lg:grid-cols-2 gap-8">
                    <div className="bg-white rounded-3xl p-8 border border-gray-200 shadow-sm space-y-6">
                        <h3 className="h3 text-gray-900">Containers</h3>
                        <p className="text-gray-600 text-sm">Main boundaries for constraining content horizontally.</p>

                        <div className="space-y-4">
                            <div>
                                <div className="text-sm font-bold text-gray-900 mb-1">Standard Container (<code className="text-accent-500 bg-gray-50 px-1 rounded font-normal">.container-custom</code>)</div>
                                <div className="text-xs text-gray-500 mb-2">Max width: 1280px, Auto-centered, Dynamic horizontal padding.</div>
                                <div className="w-full bg-gray-100 border border-gray-200 h-24 rounded-lg flex flex-col relative px-[10%]">
                                    <div className="flex-1 bg-white border-l border-r border-dashed border-primary-300 flex items-center justify-center text-primary-500 text-xs text-center p-2">
                                        Content Area<br />(Max 1280px)
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white rounded-3xl p-8 border border-gray-200 shadow-sm space-y-6">
                        <h3 className="h3 text-gray-900">Vertical Rhythm</h3>
                        <p className="text-gray-600 text-sm">Consistent vertical spacing between major sections.</p>

                        <div className="space-y-4">
                            <div>
                                <div className="text-sm font-bold text-gray-900 mb-1">Standard Section (<code className="text-accent-500 bg-gray-50 px-1 rounded font-normal">.section</code>)</div>
                                <div className="text-xs text-gray-500 mb-2">Top and bottom padding: 64px (Mobile/Tablet), 96px (Desktop)</div>
                                <div className="w-full border border-gray-200 rounded-lg overflow-hidden text-center text-xs">
                                    <div className="bg-primary-50 text-primary-500 py-3 font-mono border-b border-primary-100">py-16 / py-24</div>
                                    <div className="bg-white py-6 text-gray-400">Content Block</div>
                                    <div className="bg-primary-50 text-primary-500 py-3 font-mono border-t border-primary-100">py-16 / py-24</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
