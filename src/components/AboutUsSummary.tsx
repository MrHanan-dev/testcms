import { Target, Globe, BookOpen, Users, Rocket } from 'lucide-react';
import Image from 'next/image';

const differentiators = [
    {
        icon: Target,
        iconColor: "text-red-500",
        title: "Real-World Expertise",
        description: "Learn from certified industry experts with decades of hands-on experience in construction, operations, and leadership. We share what truly works — not just theory."
    },
    {
        icon: Globe,
        iconColor: "text-blue-500",
        title: "Global Knowledge, Local Focus",
        description: "Trained from world-leading universities like KTH (Sweden) and Massey University (New Zealand), we combine international best practices with local industry insight."
    },
    {
        icon: BookOpen,
        iconColor: "text-green-500",
        title: "Practical, Impactful Learning",
        description: "Our training is designed around real projects, real tools, and real challenges — ensuring you can apply your learning immediately."
    },
    {
        icon: Users,
        iconColor: "text-yellow-500",
        title: "Personal Mentorship",
        description: "We guide every learner through their professional growth journey, offering support, mentoring, and career coaching beyond the classroom."
    },
    {
        icon: Rocket,
        iconColor: "text-purple-500",
        title: "Lifelong Learning Culture",
        description: "Agile Nest is more than a training provider — it's a learning community. We inspire continuous growth, innovation, and excellence."
    }
];

export default function AboutUsSummary() {
    return (
        <section className="py-20 md:py-32 bg-gray-50/50">
            <div className="container-custom">
                {/* Header Section */}
                <div className="max-w-4xl mx-auto text-center mb-20">
                    <h2 className="text-3xl md:text-5xl font-bold text-primary mb-6">
                        Where Agile Minds Soar
                    </h2>
                    <p className="text-xl md:text-2xl text-muted font-medium mb-12">
                        Transforming knowledge into project excellence.
                    </p>

                    <div className="bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-gray-100 text-left">
                        <h3 className="text-2xl font-bold text-primary mb-4">Mission:</h3>
                        <p className="text-lg text-muted italic leading-relaxed">
                            "At Agile Nest, we deliver immersive training and consultancy that transforms project management into a strategic advantage for teams and leaders."
                        </p>
                    </div>
                </div>

                {/* Why Choose Us & What Makes Us Different */}
                <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 mb-24">
                    <div>
                        <h3 className="text-2xl md:text-3xl font-bold text-primary mb-6">
                            Why Choose Agile Nest
                        </h3>
                        <p className="text-lg text-muted leading-relaxed mb-12">
                            At Agile Nest, we don't just teach project management — we transform professionals into confident, agile leaders ready to deliver real results.
                        </p>

                        <div className="pt-8 border-t border-gray-200">
                            <p className="text-xl font-medium text-primary italic">
                                Agile Nest — Where knowledge meets experience, and every project takes flight.
                            </p>
                        </div>
                    </div>

                    <div>
                        <h3 className="text-2xl md:text-3xl font-bold text-primary mb-8">
                            What Makes Us Different
                        </h3>
                        <div className="space-y-8">
                            {differentiators.map((item) => (
                                <div key={item.title} className="flex gap-4">
                                    <div className="flex-shrink-0 mt-1">
                                        <item.icon size={24} className={item.iconColor} />
                                    </div>
                                    <div>
                                        <h4 className="text-[17px] font-bold text-primary mb-2">
                                            {item.title}
                                        </h4>
                                        <p className="text-[15px] text-muted leading-relaxed">
                                            {item.description}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Evolution Graphic Section */}
                <div className="bg-gray-50 rounded-3xl p-8 md:p-16 border border-gray-200 shadow-md mt-12">
                    <div className="text-center mb-12">
                        <h3 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-6 font-display">
                            Our Evolution in Project Management
                        </h3>
                        <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                            From PMBOK 3rd to 8th Edition — A 17-Year Journey of Passion and Purpose
                        </p>
                    </div>

                    {/* PMBOK Evolution Graphic */}
                    <div className="w-full max-w-5xl mx-auto rounded-2xl overflow-hidden shadow-2xl relative border border-primary-700 bg-white">
                        <Image
                            src="/images/pmbok_evolution.jpeg"
                            alt="Our Evolution in Project Management"
                            width={1920}
                            height={1080}
                            className="w-full h-auto object-cover"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
