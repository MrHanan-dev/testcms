import Header from '@/components/Header';
import Hero from '@/components/Hero';
import FeatureStrip from '@/components/FeatureStrip';
import TrustBar from '@/components/TrustBar';
import BentoGrid from '@/components/BentoGrid';
import CertificationLogos from '@/components/CertificationLogos';
import AboutUsSummary from '@/components/AboutUsSummary';
import ResultsStats from '@/components/ResultsStats';
import Testimonials from '@/components/Testimonials';
import FAQ from '@/components/FAQ';
import FinalCTA from '@/components/FinalCTA';
import Footer from '@/components/Footer';

export default function Home() {
    return (
        <>
            <Header variant="transparent" />
            <main>
                <Hero />
                <FeatureStrip />
                {/* <TrustBar /> */}
                <BentoGrid />
                <CertificationLogos />
                <AboutUsSummary />
                <ResultsStats />
                <Testimonials />
                <FAQ />
                <FinalCTA />
            </main>
            <Footer />
        </>
    );
}
