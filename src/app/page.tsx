import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Partners from '@/components/Partners';
import BentoGrid from '@/components/BentoGrid';
import Stats from '@/components/Stats';
import Testimonials from '@/components/Testimonials';
import Insights from '@/components/Insights';
import CTA from '@/components/CTA';
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
                <Stats />
                <Testimonials />
                <Insights />
                <CTA />
            </main>
            <Footer />
            <MobileNav />
        </>
    );
}
