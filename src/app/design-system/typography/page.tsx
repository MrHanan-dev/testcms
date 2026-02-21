export const metadata = {
    title: 'Typography | Millpond Design System',
};

const TypeSpecimen = ({
    token,
    size,
    weight,
    lineHeight,
    sample,
    previewClass,
    fontFamily = 'font-sans'
}: {
    token: string, size: string, weight: string, lineHeight: string, sample: string, previewClass: string, fontFamily?: string
}) => (
    <div className="flex flex-col md:flex-row md:items-center py-6 border-b border-gray-100 group hover:bg-white transition-colors rounded-xl px-4 -mx-4">
        <div className="w-full md:w-64 shrink-0 mb-4 md:mb-0">
            <div className="text-sm font-mono text-accent-500 font-bold">{token}</div>
            <div className="text-xs text-gray-500 mt-1 font-mono">
                {size} / {weight} / {lineHeight}
            </div>
            <div className="text-xs text-gray-400 mt-1 uppercase tracking-wider">{fontFamily === 'font-display' ? 'Nunito Sans' : 'Open Sans'}</div>
        </div>
        <div className={`text-gray-900 ${previewClass} truncate max-w-full overflow-hidden`}>
            {sample}
        </div>
    </div>
);

export default function DesignSystemTypography() {
    return (
        <div className="space-y-12">
            <header className="mb-12">
                <span className="label-tag block mb-2">Foundations</span>
                <h1 className="h1 text-gray-900">typography.</h1>
                <p className="text-xl text-gray-600 mt-4 max-w-3xl leading-relaxed">
                    Our typography uses Nunito Sans for strong, approachable headings and Open Sans for highly readable body copy.
                </p>
            </header>

            <section>
                <h2 className="h2 text-primary-600 mb-8 pb-4 border-b border-gray-200">Scale & Tokens</h2>

                <div className="bg-white rounded-3xl p-6 md:p-10 shadow-sm border border-gray-200">
                    <TypeSpecimen
                        token="text-7xl" size="72px" weight="800" lineHeight="1.0" fontFamily="font-display"
                        sample="145+" previewClass="text-7xl font-extrabold text-primary-600 font-display"
                    />
                    <TypeSpecimen
                        token="text-6xl" size="60px" weight="800" lineHeight="1.05" fontFamily="font-display"
                        sample="project management." previewClass="text-6xl font-extrabold font-display"
                    />
                    <TypeSpecimen
                        token="text-5xl" size="48px" weight="700" lineHeight="1.1" fontFamily="font-display"
                        sample="The safe pair of hands." previewClass="text-5xl font-bold font-display"
                    />
                    <TypeSpecimen
                        token="text-4xl" size="36px" weight="700" lineHeight="1.15" fontFamily="font-display"
                        sample="Section Title Example." previewClass="text-4xl font-bold font-display"
                    />
                    <TypeSpecimen
                        token="text-3xl" size="30px" weight="700" lineHeight="1.2" fontFamily="font-display"
                        sample="Card Heading Example" previewClass="text-3xl font-bold font-display"
                    />
                    <TypeSpecimen
                        token="text-2xl" size="24px" weight="700" lineHeight="1.3" fontFamily="font-display"
                        sample="Small Card Heading" previewClass="text-2xl font-bold font-display"
                    />
                    <TypeSpecimen
                        token="text-xl" size="20px" weight="600" lineHeight="1.4" fontFamily="font-sans"
                        sample="Sub-labels and emphasis text." previewClass="text-xl font-semibold font-sans"
                    />
                    <TypeSpecimen
                        token="text-lg" size="18px" weight="400" lineHeight="1.6" fontFamily="font-sans"
                        sample="Lead paragraphs that introduce a section or block." previewClass="text-lg font-normal font-sans text-gray-600"
                    />
                    <TypeSpecimen
                        token="text-base" size="16px" weight="400" lineHeight="1.6" fontFamily="font-sans"
                        sample="Standard body copy. The quick brown fox jumps over the lazy dog." previewClass="text-base font-normal font-sans text-gray-600"
                    />
                    <TypeSpecimen
                        token="text-sm" size="14px" weight="400" lineHeight="1.5" fontFamily="font-sans"
                        sample="Small text for metadata, footer links, or secondary information." previewClass="text-sm font-normal font-sans text-gray-600"
                    />
                    <TypeSpecimen
                        token="text-xs" size="12px" weight="400" lineHeight="1.5" fontFamily="font-sans"
                        sample="Captions and small labels." previewClass="text-xs font-normal font-sans text-gray-500"
                    />
                </div>
            </section>

            <section className="pt-12">
                <h2 className="h2 text-primary-600 mb-8 pb-4 border-b border-gray-200">Special Styles</h2>
                <div className="grid md:grid-cols-2 gap-8">
                    <div className="bg-white rounded-3xl p-8 border border-gray-200 shadow-sm space-y-4">
                        <h3 className="h4 text-gray-900 border-b border-gray-100 pb-2">Eyebrow / Label</h3>
                        <p className="text-gray-500 text-sm mb-6">Used to introduce sections above big headings.</p>
                        <div className="p-6 bg-gray-50 rounded-xl">
                            <span className="label-tag block mb-2">Our Services</span>
                            <h4 className="h2">What we do.</h4>
                        </div>
                        <div className="text-sm font-mono mt-4 text-gray-500 flex flex-col gap-1">
                            <span>Class: <code className="text-accent-500 bg-accent-50 px-1 rounded">.label-tag</code></span>
                            <span>Equivalent: <code className="text-gray-700">text-xl font-normal uppercase tracking-wide text-accent-500</code></span>
                        </div>
                    </div>

                    <div className="bg-white rounded-3xl p-8 border border-gray-200 shadow-sm space-y-4">
                        <h3 className="h4 text-gray-900 border-b border-gray-100 pb-2">Hero Display</h3>
                        <p className="text-gray-500 text-sm mb-6">Massive lowercase headings strictly for the main hero.</p>
                        <div className="p-6 bg-primary-600 rounded-xl">
                            <h1 className="h1 text-white">trusted execution.</h1>
                        </div>
                        <div className="text-sm font-mono mt-4 text-gray-500 flex flex-col gap-1">
                            <span>Class: <code className="text-accent-500 bg-accent-50 px-1 rounded">.h1</code></span>
                            <span>Guidelines: Always lowercase, max width to break beautifully.</span>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
