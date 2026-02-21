import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Partners from '@/components/Partners';
import BentoGrid from '@/components/BentoGrid';
import CertificationLogos from '@/components/CertificationLogos';
import AboutUsSummary from '@/components/AboutUsSummary';
import Footer from '@/components/Footer';
import MobileNav from '@/components/MobileNav';

export default function Home() {
    return (
        <>
            <Header />
            <main className="pb-20 lg:pb-0">
                <Hero />
                <Partners />
                <BentoGrid />
                <CertificationLogos />
                <AboutUsSummary />
            </main>
            <Footer />
            <MobileNav />
        </>
    );
}
