export const metadata = {
    title: 'Tokens | Millpond Design System',
};

export default function DesignSystemTokens() {
    const cssVars = `:root {
  --color-primary-600: #1a5aa8;
  --color-primary-500: #1e6fc7;
  --color-primary-400: #3ca3e8;
  --color-primary-100: #d6eaf8;
  --color-accent-500: #e8186c;
  --color-accent-400: #f03a88;
  
  --color-gray-900: #1a1a2e;
  --color-gray-600: #4a5568;
  --color-gray-100: #f7f9fc;
  
  --color-success: #22c55e;
  --color-error: #ef4444;
  --color-warning: #f59e0b;
  --color-info: #3ca3e8;

  --font-display: 'Nunito Sans', sans-serif;
  --font-sans: 'Open Sans', sans-serif;
}`;

    const tailwindSnippet = `colors: {
  primary: {
    600: '#1a5aa8',
    500: '#1e6fc7',
    400: '#3ca3e8',
    100: '#d6eaf8',
    DEFAULT: '#1a5aa8',
  },
  accent: {
    500: '#e8186c',
    400: '#f03a88',
    DEFAULT: '#e8186c',
  },
  gray: {
    900: '#1a1a2e',
    600: '#4a5568',
    100: '#f7f9fc',
  }
},
boxShadow: {
  'sm': '0 1px 3px rgba(0,0,0,0.08)',
  'md': '0 4px 16px rgba(0,0,0,0.10)',
  'lg': '0 8px 32px rgba(0,0,0,0.14)',
  'xl': '0 16px 48px rgba(30,111,199,0.18)',
}`;

    return (
        <div className="space-y-12">
            <header className="mb-12">
                <span className="label-tag block mb-2">Developer Resources</span>
                <h1 className="h1 text-gray-900">tokens.</h1>
                <p className="text-xl text-gray-600 mt-4 max-w-3xl leading-relaxed">
                    Copy and paste these raw tokens into your configuration files to implement the Millpond design system in any project.
                </p>
            </header>

            <section className="grid lg:grid-cols-2 gap-8">
                <div>
                    <h2 className="h3 text-primary-600 mb-4">CSS Variables</h2>
                    <div className="bg-gray-900 rounded-2xl overflow-hidden shadow-md">
                        <div className="flex items-center px-4 py-3 bg-gray-800 border-b border-gray-700">
                            <span className="text-xs font-mono text-gray-400">variables.css</span>
                        </div>
                        <pre className="p-6 text-sm font-mono text-green-400 overflow-x-auto">
                            {cssVars}
                        </pre>
                    </div>
                </div>

                <div>
                    <h2 className="h3 text-primary-600 mb-4">Tailwind Config</h2>
                    <div className="bg-gray-900 rounded-2xl overflow-hidden shadow-md">
                        <div className="flex items-center px-4 py-3 bg-gray-800 border-b border-gray-700">
                            <span className="text-xs font-mono text-gray-400">tailwind.config.ts</span>
                        </div>
                        <pre className="p-6 text-sm font-mono text-blue-400 overflow-x-auto">
                            {tailwindSnippet}
                        </pre>
                    </div>
                </div>
            </section>
        </div>
    );
}
