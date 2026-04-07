import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Become a Partner | TheAgileNest',
    description: 'Join the TheAgileNest partner network and deliver premium, globally recognized project management training.',
};

export default function PartnerLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
