import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Partners from '@/components/Partners';
import BentoGrid from '@/components/BentoGrid';
import Stats from '@/components/Stats';
import Testimonials from '@/components/Testimonials';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';

export default function Home() {
    return (
        <>
            <Header />
            <main>
                <Hero />
                <Partners />
                <BentoGrid />
                <Stats />
                <Testimonials />
                <CTA />
            </main>
            <Footer />
        </>
    );
}
