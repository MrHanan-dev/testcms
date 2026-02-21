import Image from 'next/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import MobileNav from '@/components/MobileNav';

export const metadata = {
    title: "About Us - Agile Nest",
    description: "Learn more about Engr. Syed and the mission behind Agile Nest.",
};

export default function AboutPage() {
    return (
        <>
            <Header />
            <main className="pt-32 pb-24 min-h-screen bg-white">
                <div className="container-custom">

                    <div className="max-w-4xl mx-auto">
                        <h1 className="text-4xl md:text-5xl font-bold text-primary border-b border-gray-200 pb-6 mb-12">
                            About US
                        </h1>

                        <div className="grid md:grid-cols-12 gap-12 items-start">
                            {/* Content */}
                            <div className="md:col-span-7 lg:col-span-8 space-y-6 text-gray-700 leading-relaxed text-lg">
                                <p>
                                    With over 17 years of professional experience in construction and project management, Engr. Syed is a passionate leader, educator, and industry expert. His unwavering dedication to empowering the next generation of project professionals is a source of inspiration and motivation for all who work with him. After earning his Bachelor's in Engineering in 2003, Syed began his career in the construction industry, successfully delivering major infrastructure and commercial projects.
                                </p>

                                <p>
                                    In 2008, he completed his Master's in Engineering. He pursued a Master's in Project Management and Operational Management from KTH Royal Institute of Technology, Sweden, one of Europe's top universities and a Nobel Prize institution. His academic journey, combined with hands-on industry experience, shaped a unique blend of practical and theoretical expertise. He later completed a Master's in Construction Management at Massey University in New Zealand.
                                </p>

                                <p>
                                    He achieved the PMI-CP (Construction Professional), a globally recognised credential from the Project Management Institute (PMI), a prestigious certification focused on construction. As a CEO, consultant, and certified trainer, Syed has mentored hundreds of professionals worldwide in Project Management, Construction Management, and Agile practices. His commitment to continuous learning, which keeps him up to date with the latest industry standards, inspired the creation of Agile Nest.
                                </p>

                                <p>
                                    This institute is to transfer knowledge, practical experience, and global standards to individuals and organisations seeking to manage projects with excellence and confidence.
                                </p>
                            </div>

                            {/* Sidebar / Image */}
                            <div className="md:col-span-5 lg:col-span-4 flex flex-col items-center">
                                <div className="w-full aspect-[4/5] bg-gray-100 rounded-xl overflow-hidden shadow-lg border border-gray-200 mb-6 flex flex-col items-center justify-center text-gray-400 relative">
                                    {/* Placeholder for actual image */}
                                    {/* <Image src="/images/syed.jpg" alt="Engr. Syed Amjad Iqbal" fill className="object-cover" /> */}
                                    <span className="text-sm px-4 text-center">Waiting for image asset...</span>
                                </div>
                                <h3 className="text-xl font-bold text-primary text-center">
                                    Engr. Syed Amjad Iqbal
                                </h3>
                            </div>
                        </div>

                        {/* Why Choose Agile Nest Section */}
                        <div className="mt-20 pt-16 border-t border-gray-200">
                            <h2 className="text-3xl font-bold text-primary mb-6">
                                Why Choose Agile Nest
                            </h2>
                            <p className="text-xl text-gray-700 leading-relaxed max-w-2xl border-l-4 border-blue-500 pl-6 italic bg-gray-50 py-4 rounded-r-lg">
                                At Agile Nest, we don't just teach project management — we transform professionals into confident, agile leaders ready to deliver real results.
                            </p>
                        </div>

                    </div>
                </div>
            </main>
            <Footer />
            <MobileNav />
        </>
    );
}
