import Header from '@/components/Header';
import Hero from '@/components/Hero';

import BentoGrid from '@/components/BentoGrid';
import CertificationLogos from '@/components/CertificationLogos';
import AboutUsSummary from '@/components/AboutUsSummary';
import FAQ from '@/components/FAQ';
import Footer from '@/components/Footer';

export default function Home() {
    return (
        <>
            <Header variant="transparent" />
            <main>
                <Hero />

                <BentoGrid />
                <CertificationLogos />
                <AboutUsSummary />
            </main>
            <FAQ />
            <Footer />
        </>
    );
}
