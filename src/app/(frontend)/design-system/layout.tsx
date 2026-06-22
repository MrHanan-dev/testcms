import Link from 'next/link';
import { ReactNode } from 'react';

const navItems = [
    { label: 'Overview', href: '/design-system' },
    { label: 'Colors', href: '/design-system/colors' },
    { label: 'Typography', href: '/design-system/typography' },
    { label: 'Spacing', href: '/design-system/spacing' },
    { label: 'Components', href: '/design-system/components' },
    { label: 'Tokens', href: '/design-system/tokens' },
];

export default function DesignSystemLayout({ children }: { children: ReactNode }) {
    return (
        <div className="min-h-screen bg-gray-100 flex flex-col md:flex-row font-sans text-gray-900">
            {/* Sidebar Navigation */}
            <aside className="w-full md:w-64 bg-white border-r border-gray-200 md:min-h-screen shadow-sm sticky top-0 z-10 hidden md:block">
                <div className="p-6 border-b border-gray-100">
                    <Link href="/design-system" className="font-display font-bold text-2xl text-primary-600 tracking-tight">
                        TheAgileNest<span className="text-accent-500">.</span>ds
                    </Link>
                    <p className="text-xs text-gray-600 mt-1 uppercase tracking-widest font-semibold">Design System</p>
                </div>
                <nav className="p-4 space-y-1">
                    {navItems.map((item) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            className="block px-4 py-2 text-sm font-medium text-gray-600 hover:bg-gray-50 hover:text-accent-500 rounded-lg transition-colors border border-transparent"
                        >
                            {item.label}
                        </Link>
                    ))}
                </nav>
            </aside>

            {/* Main Content Area */}
            <main className="flex-1 bg-gray-100 md:pl-8 lg:pl-16 p-6 md:p-12 pb-24 max-w-7xl">
                {children}
            </main>
        </div>
    );
}
