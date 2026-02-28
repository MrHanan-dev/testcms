export type FAQItem = {
    question: string;
    answer: string;
};

export const globalFaqs: Record<string, FAQItem[]> = {
    default: [
        {
            question: "What makes TotalPMP different from other training and consulting firms?",
            answer: "We offer a unique dual focus: 100% first attempt pass rate PMP® certification training and completely independent, expert led project management and cost estimation consultancy."
        },
        {
            question: "Where are your services available?",
            answer: "While we have deep roots in New Zealand, offering on-site support for local construction projects, our certification training and digital estimation services are accessible to professionals globally."
        },
        {
            question: "How do I get started with an estimate or consultancy service?",
            answer: "Simply use our contact or cost estimation forms to share your project details. Our team typically responds within 12 business hours to arrange a friendly, no-obligation discussion."
        },
        {
            question: "Are your trainers and consultants certified?",
            answer: "Yes, all our instructors and consultants hold the credentials they teach (such as PMP® or PMI-CP™) and have extensive, real world industry experience managing complex projects."
        },
        {
            question: "What payment methods do you accept?",
            answer: "We accept all major credit cards and bank transfers. We can also issue invoices for corporate bookings and B2B consultancy services."
        }
    ],
    home: [
        {
            question: "What is the exam success rate for TotalPMP's students?",
            answer: "We are proud to maintain a 100% first attempt pass rate for our PMP® certification training. Our curriculum is tailored based on actual industrial situations and includes comprehensive mock testing."
        },
        {
            question: "Do you offer tailored project management consulting for enterprises?",
            answer: "Yes, TotalPMP specializes in bespoke consultancy for high stakes projects. From masterplanning to sustainability advice, we help organizations navigate complex delivery hurdles."
        },
        {
            question: "What industries do your consultancy services cover?",
            answer: "We have extensive experience in large scale infrastructure, commercial developments, and industrial construction projects across diverse sectors."
        },
        {
            question: "Can you handle remote or international projects?",
            answer: "Yes, we provide digital cost estimation, remote project consulting, and virtual training services to clients globally."
        },
        {
            question: "What is your approach to risk management?",
            answer: "We identify potential project risks early through comprehensive analysis and develop robust mitigation strategies to ensure your project's financial and scheduling success."
        }
    ],
    pmicp: [
        {
            question: "What will I get from a Live and Online course that I won't get from an On-Demand course?",
            answer: "Our Live and Online courses are an online classroom with a live instructor presenting slides, case studies, and facilitating discussion. Benefit from real-time Q&A, hearing classmates' experiences, and networking motivation. You also get mock exams, >30 PM templates, and extra study resources."
        },
        {
            question: "Why do many of your courses span several weeks?",
            answer: "Real learning takes time. We want you to understand, assimilate, and apply the knowledge, not just rote-learn for the exam. This ensures you gain real insight rather than just passing the test."
        },
        {
            question: "Is there any pre-reading and how much will I have to study?",
            answer: "There's no pre-reading, but once the course starts, you'll have exercises to complete between sessions. The course is fast paced, assuming a basic understanding of PM concepts. We recommend studying between sessions and before the exam for optimal success."
        },
        {
            question: "How long is the PMI-CP™ exam and what is its format?",
            answer: "The exam is 120 questions over 3 hours and 50 minutes. The questions are pulled from a bank based on the PMI-CP Exam Content Outline."
        },
        {
            question: "Will I have to renew the PMI-CP™ certification?",
            answer: "Yes, to maintain your PMI-CP™, you must earn 60 professional development units (PDUs) every three years through continuous professional development."
        },
        {
            question: "Where can I sit the exam?",
            answer: "PMI exams are delivered by Pearson Vue. You can take it at home/office with an offsite proctor (online proctored) or at a physical testing center if available locally."
        }
    ],
    'cost-estimation': [
        {
            question: "How accurate are your construction cost estimates?",
            answer: "We pride ourselves on precision. By utilizing detailed Bill of Quantities (BOQ) and current market rate data, our preliminary and detailed estimates provide a highly reliable financial roadmap for your project."
        },
        {
            question: "What is your typical turnaround time for an estimate?",
            answer: "We understand the fast paced nature of construction tendering. Our initial estimates for standard projects are typically delivered within 48 to 72 hours of receiving complete documentation."
        },
        {
            question: "Do you provide material and labor schedules as well?",
            answer: "Absolutely. We provide comprehensive material and labor scheduling services to help contractors secure the right resources and complete their construction projects on time and within budget."
        },
        {
            question: "Can you help me fully tender a project?",
            answer: "Yes, we offer comprehensive tendering services. We transform your design concepts into detailed bid documents, facilitate subcontractor interviews, and negotiate to ensure you get the best value."
        },
        {
            question: "Do you offer value engineering services?",
            answer: "Yes, we analyze project designs and specifications to identify opportunities for cost savings without compromising on quality, safety, or functionality."
        }
    ],
    consulting: [
        {
            question: "What does your project management consulting process involve?",
            answer: "We begin by deeply understanding your project vision, constraints, and goals. We then apply years of hands on expertise to deliver high-fidelity commercial advice, streamline operations, and mitigate risks."
        },
        {
            question: "Do you assist with distressed or delayed projects?",
            answer: "Yes. Our expert consultants excel at stepping into complex, delayed, or distressed projects to realign schedules, manage stakeholder expectations, and implement robust recovery strategies."
        },
        {
            question: "What is your approach to contract administration?",
            answer: "We ensure all contracts between project owners, contractors, and subcontractors are properly managed, transparent, and fully executed to avoid disputes and protect your commercial interests."
        },
        {
            question: "How do you ensure projects stay on schedule?",
            answer: "We utilize advanced scheduling software and rigorous progress monitoring algorithms to identify and address delays proactively before they impact the critical path."
        },
        {
            question: "Can you act as the client's representative?",
            answer: "Absolutely. We can operate as your dedicated representative, overseeing the entire project lifecycle to ensure your interests are protected and quality standards are met."
        }
    ],
    pmp: [
        {
            question: "How long does it take to prepare for the PMP exam?",
            answer: "On average, candidates spend 2–3 months of preparation depending on prior experience and study schedule. Our comprehensive mentorship program ensures you stay on track."
        },
        {
            question: "Can I do PMP without prior project experience?",
            answer: "No, PMP requires verified project management experience along with 35 hours of training. We provide full application and audit support to help you document your experience correctly."
        },
        {
            question: "Is PMP recognised globally?",
            answer: "Yes, PMP is recognised in over 200 countries and industries, making it highly valued worldwide, from Auckland to London."
        },
        {
            question: "How often is the PMP exam updated?",
            answer: "PMI updates the exam every 3–4 years to reflect current practices, including TotalPMP and hybrid methodologies. Our training is fully aligned with the latest PMBOK® Guide – Seventh Edition."
        },
        {
            question: "What is the cost of PMP Certification?",
            answer: "Costs vary by membership: PMI members pay USD 405, non-members pay USD 555 for the exam. This is paid directly to PMI; our course fee covers the comprehensive training and support required to pass."
        }
    ],
    capm: [
        {
            question: "Do I need project management experience for CAPM®?",
            answer: "No, the CAPM® certification is ideal for beginners and requires no prior project experience. You only need a secondary degree and 23 hours of project management education, which we provide."
        },
        {
            question: "How does CAPM® help my career?",
            answer: "CAPM® demonstrates your understanding of fundamental project management principles and terminology, making you an attractive candidate for entry level project coordination and management roles."
        },
        {
            question: "How long is the CAPM® certification valid?",
            answer: "The CAPM® certification is valid for three years. You must earn 15 Professional Development Units (PDUs) during that cycle to maintain your active status."
        },
        {
            question: "Is the exam offered online?",
            answer: "Yes, you can take the CAPM® exam online from the comfort of your home or office through Pearson VUE's secure online proctoring system."
        },
        {
            question: "What topics are covered in the CAPM® exam?",
            answer: "The exam covers project management fundamentals, predictive methodologies, TotalPMP frameworks, and business analysis principles as outlined by PMI."
        }
    ],
    training: [
        {
            question: "Are your training courses held online or in-person?",
            answer: "We offer maximum flexibility with highly interactive live virtual workshops, enabling professionals from anywhere in the world to participate and collaborate in real-time."
        },
        {
            question: "Who are the instructors for your certification courses?",
            answer: "Our courses are led by seasoned, PMI-certified professionals who bring decades of real world, high stakes industrial project management experience directly into the virtual classroom."
        },
        {
            question: "Do I earn PDUs or Contact Hours upon completion?",
            answer: "Yes, completing our certification bootcamps fulfills the strict PMI® requirement for project management education contact hours needed to sit for the PMP® or CAPM® exams."
        },
        {
            question: "Do you offer customized corporate training?",
            answer: "Yes, we provide tailored training sessions for organizations, adapting the curriculum to address your team's specific industry, methodology, and challenges."
        },
        {
            question: "What materials are provided during the course?",
            answer: "Students receive comprehensive study guides, access to mock exams, presentation slides, and a suite of practical project management templates for real world use."
        }
    ]
};
