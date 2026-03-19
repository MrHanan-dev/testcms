export type FAQItem = {
    question: string;
    answer: string;
};

export const globalFaqs: Record<string, FAQItem[]> = {
    default: [
        {
            question: "What makes TotalPMP different from other training and consulting firms?",
            answer: "We offer a unique dual focus: a 100% first-attempt pass rate for PMP® certification training and completely independent, expert-led project management and cost estimation consultancy. Unlike generic training providers, our curriculum is built on decades of high-stakes industrial experience, ensuring our students gain practical, battle-tested insights alongside their credentials. Our consultancy arm provides the same level of granular expertise to organizations navigating complex commercial and operational challenges."
        },
        {
            question: "Where are your services available?",
            answer: "While we have deep roots in New Zealand, providing on-site support and dedicated consultancy for local construction and infrastructure projects, our certification training and digital estimation services are accessible to professionals and organizations globally. We utilize advanced virtual classroom technology to deliver interactive, real-time training across different time zones, and our digital-first approach to cost estimation allows us to support projects regardless of their geographical location."
        },
        {
            question: "How do I get started with an estimate or consultancy service?",
            answer: "Getting started is straightforward. Simply use our dedicated contact or cost estimation forms to share your project's high-level details and requirements. Our team of experts typically reviews your inquiry and responds within 12 business hours to arrange a friendly, no-obligation discovery call. During this initial discussion, we'll explore your specific needs, project constraints, and how TotalPMP can best add strategic value to your operations."
        },
        {
            question: "Are your trainers and consultants certified?",
            answer: "Yes, absolute professional integrity is at our core. All our instructors and senior consultants hold the exact credentials they teach—such as PMP®, CAPM®, or PMI-CP™—and have a minimum of 15 years of real-world industry experience managing complex, multi-million dollar projects. This ensures that the advice and training you receive are not just theoretically sound but are also grounded in the practical realities of modern project leadership."
        },
        {
            question: "What payment methods do you accept?",
            answer: "To ensure a seamless experience for our clients, we accept all major international credit cards and direct bank transfers. For our corporate clients and long-term b2b consultancy engagements, we provide detailed invoicing and can accommodate various procurement systems. We also offer flexible payment plans for our more intensive certification bootcamps to help professionals invest in their future without immediate financial strain."
        }
    ],
    home: [
        {
            question: "What is the exam success rate for TotalPMP's students?",
            answer: "We are incredibly proud to maintain a consistent 100% first-attempt pass rate for our PMP® certification training programs. This success is not accidental; it is the result of a meticulously designed curriculum that is tailored based on actual industrial situations and includes comprehensive mock testing, personalized mentorship, and a deep-dive into the PMBOK® Guide's principles. We don't just teach you to pass; we teach you to excel."
        },
        {
            question: "Do you offer tailored project management consulting for enterprises?",
            answer: "Absolutely. TotalPMP specializes in bespoke consultancy services designed for high-stakes, large-scale projects. From helping you establish a robust Project Management Office (PMO) to providing expert masterplanning and sustainability advice, we help organizations navigate complex delivery hurdles with confidence. We work as an extension of your team, ensuring that every project activity is aligned with your broader strategic objectives."
        },
        {
            question: "What industries do your consultancy services cover?",
            answer: "While our core strength lies in large-scale infrastructure, commercial developments, and industrial construction projects, our methodologies are versatile and have been successfully applied in sectors such as energy, manufacturing, and technology. We bring a cross-disciplinary perspective to every engagement, allowing us to identify unique opportunities for efficiency and risk mitigation that others might overlook."
        },
        {
            question: "Can you handle remote or international projects?",
            answer: "Yes, our operational model is built for the global economy. We provide comprehensive digital cost estimation, remote project management consulting, and virtual training services to clients across several continents. By leveraging secure cloud-based collaboration tools and a global mindset, we ensure that our international clients receive the same level of dedicated support and expertise as our local New Zealand partners."
        },
        {
            question: "What is your approach to risk management?",
            answer: "Risk management is woven into everything we do. We utilize a proactive approach, identifying potential project risks early in the lifecycle through multi-disciplinary analysis and predictive modeling. We then develop robust, actionable mitigation strategies to safeguard your project's financial stability and scheduling success. Our goal is to transform uncertainty into manageable variables, providing you with the clarity needed to make bold project decisions."
        }
    ],
    pmicp: [
        {
            question: "What will I get from a Live and Online course that I won't get from an On-Demand course?",
            answer: "Our Live and Online courses offer an immersive classroom experience that goes far beyond static video lectures. You'll benefit from a live instructor presenting real-time case studies, facilitating interactive group discussions, and providing immediate answers to your complex questions. This format also offers invaluable networking opportunities with other professionals in your field. Additionally, you receive exclusive access to our extensive library of over 30 project management templates, comprehensive mock exams, and personalized study support."
        },
        {
            question: "Why do many of your courses span several weeks?",
            answer: "We believe that real, transformative learning takes time and consistent application. Our extended course durations are designed to allow students to fully understand, assimilate, and apply the complex methodologies they are learning, rather than just rote-learning for an exam. This 'digestive' approach to education ensures that you gain deep, practical insights that you can immediately apply to your professional projects, leading to better long-term career outcomes."
        },
        {
            question: "Is there any pre-reading and how much will I have to study?",
            answer: "While there is no mandatory pre-reading required to start, our courses are fast-paced and assume a basic understanding of project management concepts. Once the course begins, you will be expected to complete targeted exercises and case study reviews between sessions. We recommend allocating a consistent amount of self-study time each week to reinforce the concepts covered in class and prepare for the final certification exam. Our mentors are always available to guide your study efforts."
        },
        {
            question: "How long is the PMI-CP™ exam and what is its format?",
            answer: "The PMI-CP™ certification exam consists of 120 multiple-choice questions administered over a total time limit of 3 hours and 50 minutes. The questions are specifically designed to test your understanding of the latest Construction Professional Exam Content Outline. Our training curriculum is built from the ground up to align with this outline, ensuring that you are familiar with both the technical knowledge and the specific question formats used in the exam."
        },
        {
            question: "Will I have to renew the PMI-CP™ certification?",
            answer: "Yes, to ensure that PMI-CP™ credential holders remain at the forefront of the industry, you must renew your certification every three years. This process involves earning 60 Professional Development Units (PDUs) through a combination of continuous learning, professional activity, and giving back to the project management community. TotalPMP provides various resources and advanced seminars that can help you easily earn these PDUs while continuing to grow your expertise."
        },
        {
            question: "Where can I sit the exam?",
            answer: "PMI exams are globally delivered through Pearson VUE's extensive network of testing centers. You have the flexibility to take the exam at a physical testing center if one is available in your local area, or you can opt for the secure online proctored exam from your home or office. Both options provide a high level of security and integrity, and we provide detailed guidance on how to prepare your technical environment for the online proctoring experience."
        }
    ],
    'cost-estimation': [
        {
            question: "How accurate are your construction cost estimates?",
            answer: "Precision is our hallmark. We don't just provide ballpark figures; we deliver highly detailed Bill of Quantities (BOQ) based on a thorough analysis of your project's drawings and specifications. By layering in current, localized market rate data and accounting for regional supply chain fluctuations, our estimates provide a reliable financial roadmap that helps you secure funding, win bids, and ensure your project remains commercially viable throughout its lifecycle."
        },
        {
            question: "What is your typical turnaround time for an estimate?",
            answer: "We understand that in the world of construction tendering, time is often your most precious resource. Our standard turnaround time for preliminary and detailed estimates on mid-sized projects is typically between 48 and 72 hours from the moment we receive your complete documentation pack. For more complex or large-scale infrastructure projects, we'll provide a clear, accelerated timeline at the outset of the engagement to ensure you never miss a critical bid deadline."
        },
        {
            question: "Do you provide material and labor schedules as well?",
            answer: "Absolutely. A high-quality estimate is only half the battle. We provide comprehensive material and labor schedules that break down exactly what resources are needed and when. This granular level of detail allows contractors to secure long-lead materials in advance, plan their workforce requirements with precision, and ultimately complete their projects on time and within budget, with minimal wasted effort or unnecessary overhead."
        },
        {
            question: "Can you help me fully tender a project?",
            answer: "Yes, we offer an end-to-end tendering support service that takes the stress out of the bidding process. We transform your initial design concepts into professional, detailed bid documents, facilitate rigorous subcontractor interviews and evaluations, and handle the commercial negotiations on your behalf. Our goal is to ensure that your tender is not only competitive but also structurally sound and protected from future commercial risk."
        },
        {
            question: "Do you offer value engineering services?",
            answer: "Yes, value engineering is central to our advisory approach. We rigorously analyze your project's designs, materials, and specifications to identify opportunities for significant cost savings without compromising on the quality, safety, or intended functionality of the final build. We help you make smarter material choices and more efficient design decisions that can often shave thousands of dollars off your project's bottom line."
        }
    ],
    consulting: [
        {
            question: "What does your project management consulting process involve?",
            answer: "Our consulting process is deeply collaborative. We begin by immersing ourselves in your project's vision, constraints, and long-term goals. We then apply our hands-on expertise to deliver high-fidelity commercial advice, streamline your operational processes, and implement robust risk-mitigation frameworks. Whether it's masterplanning for a new development or optimizing an existing project's commercial structure, we focus on delivering measurable value at every stage."
        },
        {
            question: "Do you assist with distressed or delayed projects?",
            answer: "Recovery management is one of our key specialties. Our expert consultants are experienced at stepping into complex, delayed, or commercially distressed projects to identify the root causes of failure and implement rapid recovery strategies. We work to realign project schedules, manage critical stakeholder expectations, and put in place the governance structures needed to get the project back on track and through to a successful completion."
        },
        {
            question: "What is your approach to contract administration?",
            answer: "We view proactive contract administration as a vital safeguard for your project's commercial success. We ensure that all contracts between project owners, contractors, and subcontractors are meticulously managed, transparently executed, and fully compliant with local regulations. This rigorous approach helps to prevent disputes before they arise, protects your commercial interests, and ensures that everyone involved is held accountable to their contractual obligations."
        },
        {
            question: "How do you ensure projects stay on schedule?",
            answer: "We employ a data-driven approach to scheduling. By utilizing advanced project management software and our own proprietary progress-monitoring algorithms, we can identify potential delays and bottlenecks long before they impact the project's critical path. We provide real-time visibility into project health and work with your site teams to implement immediate corrective actions, ensuring that your project landmarks are met consistently and reliably."
        },
        {
            question: "Can you act as the client's representative?",
            answer: "Absolutely. We often operate as a dedicated representative for project owners, developers, and investors who need an independent, expert eye on their projects. In this role, we oversee the entire project lifecycle, from initial feasibility and tendering through to site execution and handover. We act as your 'boots on the ground,' ensuring that your interests are protected, quality standards are strictly adhered to, and that you receive regular, unbiased reports on project progress."
        }
    ],
    pmp: [
        {
            question: "How long does it take to prepare for the PMP exam?",
            answer: "Most of our successful candidates dedicate approximately 8 to 12 weeks of consistent study to their PMP preparation. This timeline varies based on your existing project management experience and how much time you can commit to weekly study. Our intensive bootcamps and structured mentorship program are specifically designed to keep you on a clear, manageable path to success, providing the focus and accountability needed to pass on your first attempt."
        },
        {
            question: "Can I do PMP without prior project experience?",
            answer: "No, the PMP® certification is designed for experienced practitioners. PMI requires verified professional project management experience (typically 36 months if you have a four-year degree, or 60 months if you don't) along with 35 hours of project management education. We provide comprehensive support throughout your application process, helping you document your experience correctly and preparing you for potential PMI audits with confidence."
        },
        {
            question: "Is PMP recognised globally?",
            answer: "Yes, the PMP® is the gold standard of project management certifications and is recognized in over 200 countries across almost every industry imaginable. Whether you are looking to advance your career in Auckland, lead major infrastructure projects in London, or drive tech innovation in Silicon Valley, holding a PMP® credential signals to employers and clients that you possess the advanced leadership skills and methodology expertise needed to deliver superior results."
        },
        {
            question: "How often is the PMP exam updated?",
            answer: "PMI regularly updates the PMP® exam every 3 to 4 years to ensure it accurately reflects current industry practices and global trends in project leadership. The current exam focuses heavily on agile, predictive, and hybrid methodologies. Our training curriculum is always fully aligned with the latest PMI standards and the PMBOK® Guide – Seventh Edition, ensuring that you are learning the most relevant and up-to-date techniques used by high-performing project teams today."
        },
        {
            question: "What is the cost of PMP Certification?",
            answer: "The total cost involves both the training and the examination fee. PMI members typically pay an exam fee of USD 405, while non-members pay USD 555. These fees are paid directly to the Project Management Institute. Our TotalPMP course fee covers the comprehensive, high-engagement training, all study materials, mock exam access, and the intensive mentorship required to ensure you pass successfully, representing a strategic investment in your long-term career."
        }
    ],
    capm: [
        {
            question: "Do I need project management experience for CAPM®?",
            answer: "No, the CAPM® certification is specifically designed for individuals who are relatively new to project management or are looking to start their project leadership journey. It does not require prior professional project experience. The only prerequisites are a secondary degree (such as a high school diploma) and at least 23 hours of formal project management education, which is fully covered by our comprehensive and beginner-friendly CAPM® training program."
        },
        {
            question: "How does CAPM® help my career?",
            answer: "Earning your CAPM® credential is a powerful way to accelerate your career. It demonstrates to potential employers and peers that you have a firm grasp of the fundamental project management principles, terminology, and tools used by professional teams globally. This certification makes you a highly attractive candidate for entry-level roles such as Project Coordinator, Junior Project Manager, or Team Leader, and provides a solid foundation for eventually attaining your PMP®."
        },
        {
            question: "How long is the CAPM® certification valid?",
            answer: "Your CAPM® certification is valid for a period of three years. To maintain your active status, you must earn 15 Professional Development Units (PDUs) during each three-year cycle. This ensures that you are staying current with industry trends and continuously developing your skills. TotalPMP offers various advanced courses and resources that can help you easily fulfill these PDU requirements while you continue to advance in your career."
        },
        {
            question: "Is the exam offered online?",
            answer: "Yes, for your convenience, you can take the CAPM® exam online from the comfort of your home or office. The exam is delivered through Pearson VUE's secure online proctoring system, which ensures the same level of integrity as a physical testing center. We provide all our students with a detailed checklist and technical guide to ensure your computer and environment are properly set up for a smooth and successful online examination experience."
        },
        {
            question: "What topics are covered in the CAPM® exam?",
            answer: "The CAPM® exam covers a broad spectrum of project management fundamentals, with a focus on both predictive (waterfall) and adaptive (agile/hybrid) methodologies. Key topics include project lifecycle management, stakeholder engagement, scope and schedule control, and fundamental business analysis principles. Our curriculum is mapped directly to the PMI-CAPM® Exam Content Outline, ensuring comprehensive coverage of every domain you will be tested on."
        }
    ],
    training: [
        {
            question: "Are your training courses held online or in-person?",
            answer: "We prioritize accessibility and engagement by offering our courses primarily through highly interactive, live virtual workshops. This enables professionals from around the world to participate in real-time collaboration, peer networking, and group exercises without the need for travel. For our corporate clients with larger teams, we can also arrange bespoke on-site training sessions tailored to your organization's specific location and scheduling requirements."
        },
        {
            question: "Who are the instructors for your certification courses?",
            answer: "Our instructors are more than just teachers; they are seasoned industry veterans. Every TotalPMP instructor is PMI-certified and brings decades of real-world, high-stakes project management experience—often from the construction, engineering, or technology sectors—directly into the classroom. This means our students receive practical, battle-tested advice and 'lessons from the field' that you simply won't find in a standard textbook or an automated online course."
        },
        {
            question: "Do I earn PDUs or Contact Hours upon completion?",
            answer: "Yes, absolutely. Completing our certification bootcamps fulfills the strict PMI® requirement for the formal project management education hours (35 hours for PMP®, 23 hours for CAPM®) needed to sit for your certification exam. Upon successful completion of the course, we issue an official certificate of completion that you can use to document your education on your PMI application. We also provide full guidance on how to correctly log these hours in the PMI portal."
        },
        {
            question: "Do you offer customized corporate training?",
            answer: "Yes, we specialize in partnering with organizations to deliver tailored training solutions that meet your team's unique needs. We can adapt our core curriculum to address the specific methodologies, industry challenges, and project types your organization handles. Whether you want to upskill a small project team or implement a common project management language across a global enterprise, we can design a bespoke training program that aligns with your strategic business goals."
        },
        {
            question: "What materials are provided during the course?",
            answer: "We provide our students with a comprehensive suite of study and professional resources. This includes detailed proprietary study guides, access to our advanced mock exam simulator, high-resolution presentation slides, and an exclusive 'Project Leader's Toolkit' containing over 30 practical project management templates. These materials are designed not only to help you pass your exam but to serve as a valuable reference throughout your professional career."
        }
    ]
};
