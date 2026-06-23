import { Metadata } from 'next';
import { getGlobal } from '@/lib/payload';
import { generateSeoMetadata } from '@/lib/generateSeoMetadata';

export async function generateMetadata(): Promise<Metadata> {
    const c = await getGlobal('partnerPage');
    return generateSeoMetadata({
        data: c,
        fallbackTitle: 'Become a Partner | TheAgileNest',
        fallbackDescription: 'Join the TheAgileNest partner network and deliver premium, globally recognized project management training.',
        path: '/partner',
    });
}

export default function PartnerLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
