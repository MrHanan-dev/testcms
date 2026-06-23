/**
 * Default ("fallback") content for the CAPM certification page.
 * The page renders identically to its original hard-coded form until the client
 * edits the matching fields in the CMS (global slug "capmPage"). Icons, colors,
 * gradients and layout stay in code; only this text/structured content is editable.
 */
export const CAPM_CONTENT = {
  // Hero (rendered via CertificationHero — links/badge/gradient stay in code)
  heroTitle: "CAPM Training",
  heroSubtitle: "Certified Associate in Project Management",
  heroDescription:
    "Launch your project management career with a globally recognised entry-level credential. Validate your understanding of fundamental principles, processes, and best practices.",

  // Details section
  detailsBadge: "Foundations of PM",
  detailsHeading: "Launch Your Project Management Career",
  detailsParagraph:
    "The CAPM® (Certified Associate in Project Management) certification, awarded by PMI, is one of the world’s leading entry-level project management credentials. It is ideal for students, graduates, coordinators, aspiring project managers, and professionals looking to start or grow a career in project management.",
  benefits: [
    { title: "Global Recognition", desc: "Validates your understanding of project management principles, terminology, and processes." },
    { title: "Employer Trust", desc: "Demonstrates that you are serious about professional growth and ready to contribute effectively." },
    { title: "Smart Investment", desc: "Ranked among the most in-demand certifications, providing a clear pathway toward PMP®." },
    { title: "Career Kickstarter", desc: "Ideal for recent graduates or those looking to pivot into project management roles." },
  ],

  // Who Should Apply card
  whoHeading: "Who Should Apply?",
  whoIntro: "Perfect for individuals starting their journey or those wanting to formalize their basic PM knowledge.",
  whoAudience: [
    "Students & Recent Graduates",
    "Junior Project Coordinators",
    "Project Team Members",
    "Career Changers",
    "Entry-Level PMs",
  ],

  // Eligibility Requirements
  eligibilityHeading: "Eligibility Requirements",
  eligibilityIntro:
    "The CAPM has straightforward requirements   no project experience needed. Anyone with a secondary diploma can apply.",
  eduCardTitle: "Education",
  eduCardSubtitle: "Minimum requirement for all applicants",
  eduCardItems: [
    "Secondary diploma (high school diploma, GED, or global equivalent)",
    "No university or college degree required",
  ],
  pmEduCardTitle: "Project Management Education",
  pmEduCardSubtitle: "Must be completed before sitting the exam",
  pmEduCardItems: [
    "23 contact hours of project management education",
    "No work experience required   ideal for students & career changers",
  ],
  // Callout has inline bold; optional richText override, this is the exact fallback text
  eligibilityCalloutLead: "Good news:",
  eligibilityCalloutBody:
    "Our CAPM training course fulfils the 23 contact hours requirement. No experience required   you can apply straight from study or a career change.",

  // Curriculum / Syllabus (percent is visible text, editable; icons/styling by index)
  curriculumHeading: "Curriculum / Syllabus",
  curriculumSubtitle: "Reflects the latest standards in project delivery.",
  curriculum: [
    { title: "PM Fundamentals & Core Concepts", percent: "36%", desc: "Understanding project life cycles, PM roles, and overarching methodologies." },
    { title: "Predictive, Plan-Based Methodologies", percent: "17%", desc: "Deep dive into traditional waterfall project management techniques." },
    { title: "TheAgileNest Frameworks/Methodologies", percent: "20%", desc: "Understanding adaptive approaches, Scrum, Kanban, and TheAgileNest principles." },
    { title: "Business Analysis Frameworks", percent: "27%", desc: "Requirements gathering, stakeholder engagement, and identifying business needs." },
  ],

  // What's Included (navy box)
  includedHeading: "What's Included",
  included: [
    "23 Hours of Live Expert-led Training",
    "Official PMI® Authorized Training Content",
    "Full-length CAPM Mock Exams",
    "PMI Application Assistance",
    "Post-Training Support till Certification",
    "Comprehensive Exam Support & Mentorship",
  ],
  includedButton: "Download Full Syllabus",

  // Exam Format box
  examFormatHeading: "CAPM® Exam Format",
  examFormat: [
    { title: "150 Questions", desc: "Multiple-choice, drag-and-drop, animations, hotspot" },
    { title: "180 Minutes", desc: "Total exam duration (3 hours). One 10-minute break available." },
    { title: "Exam Structure", desc: "Core Concepts (36%), Predictive (17%), TheAgileNest (20%), Business Analysis (27%)" },
  ],

  // Why Train with TheAgileNest
  whyTrainEyebrow: "TheAgileNest Advantage",
  whyTrainHeading: "Why Train with TheAgileNest",
  whyTrainPara1: "We are a Premium Authorised Training Partner (A.T.P.) for the global Project Management Institute (PMI).",
  whyTrainPara2:
    "We have been supporting project managers to attain their PMI® certifications. Our methods, facilitators, and collaborative learning have resulted in ongoing success.",
  whyTrainFeatures: [
    { title: "Experienced Instructor-Led", desc: "Learn from skilled professionals with real-world PM experience." },
    { title: "PMI-Aligned Content", desc: "Training materials fully aligned with the latest PMI framework and PMBOK® Guide." },
    { title: "23 Hours CAPM® Prep", desc: "Satisfies the 23 contact hour requirement for exam eligibility." },
    { title: "Certificate of Completion", desc: "Receive official confirmation of your training hours for your application." },
    { title: "Flexible Class Options", desc: "Choose convenient weekend or weekday sessions (Classroom or Live Online)." },
    { title: "First Attempt Strategies", desc: "Practical tips and exam approaches designed to maximise your success." },
    { title: "High-Quality Mock Exams", desc: "Access realistic practice questions and mock sessions as part of your training." },
    { title: "Free 1-on-1 Coaching", desc: "A complimentary 1-hour session with your instructor for personalised guidance." },
    { title: "Premium Experience", desc: "Full catering provided during our in-person classroom sessions." },
    { title: "Application & Audit Support", desc: "Expert assistance with application submission and documentation." },
  ],

  // Training Options & Investment
  investEyebrow: "Training & Investment",
  investHeading: "Everything you need to succeed",
  investSubtitle: "Flexible delivery modes and comprehensive support materials",
  trainingOptions: [
    { title: "Corporate On-Site", desc: "Customised preparation delivered at your workplace for teams and departments." },
    { title: "Classroom (Face-to-Face)", desc: "Interactive in-person learning with expert guidance and collaborative environments." },
    { title: "Live Online Training", desc: "Live-streamed classes from anywhere with real-time interaction and flexibility." },
  ],
  prepHeading: "Prep Materials Included",
  prepMaterials: [
    "Course workbook & notes",
    "Interactive activities",
    "Formulas & flash cards",
    "Free practice exams",
    "LMS access",
    "Structured study support",
  ],
  examFeeHeading: "CAPM® Exam Fee (PMI)",
  memberFee: "US $225",
  nonMemberFee: "US $300",
  feeNote: "*PMI Membership (Approx. US $139) may reduce exam fees and provide extra resources.",
  courseFeesHeading: "Course Fees & Discounts",
  courseFeesIntro: "Contact us for current fees, upcoming schedules, and corporate packages:",
  contactEmail: "contact@theagilenest.com",
  contactPhone: "+64 273537774",
  discounts: ["Group bookings", "Corporate organisations", "Early bird registrations", "PMI Chapter members"],
  importantNoteLabel: "Important Note:",
  importantNoteBody: "The CAPM® exam fee is only payable after your application has been approved by PMI.",

  // Register side card + testimonial
  registerCardHeading: "Start your PM journey today",
  registerCardPara: "Join our study groups and get access to exclusive CAPM resources.",
  registerCardButton: "Enquire Now",
  testimonialQuote: "Even without experience, I felt fully prepared for the exam. Highly recommend!",
  testimonialAuthor: "Auckland Council Employee",

  // FAQ (same list feeds both JSON-LD and the visible FAQ)
  faqTitle: "CAPM® Exam FAQs",
  faqSubtitle: "Certification Journey",
  faqDescription: "Everything You Need to Know About CAPM® Training, Exam, Fees & Eligibility",
  faqItems: [
    { question: "1. Does this course satisfy the 23 contact hour requirement for the CAPM® exam?", answer: "Yes. The Agile Nest CAPM® course provides the required 23 contact hours of project management education needed for CAPM® exam eligibility. Upon successful completion, you will receive a Certificate of Completion to support your exam application." },
    { question: "2. Do I need project management experience to take this course or the CAPM® exam?", answer: "No. The CAPM® certification is designed for individuals who are new to project management or looking to start a career in the field. Unlike PMP®, CAPM® does not require prior project leadership experience, making it an ideal entry-level certification." },
    { question: "3. Is this course enough to pass the CAPM® exam?", answer: "This course is designed to give you a strong foundation for exam success. It includes PMI-aligned content, structured lessons, practice questions, mock exams, and instructor guidance. Your success will also depend on your study commitment and revision plan." },
    { question: "4. What’s included with the CAPM® course?", answer: "Our CAPM® training includes 23 Contact Hours Certificate, PMI-aligned training content, Expert instructor-led sessions, Practice questions and mock exams, Course workbook and study materials, Real-world project management examples, Exam guidance and support, and Flexible online and classroom options." },
    { question: "5. Who should take the CAPM® course?", answer: "This course is ideal for students, graduates, coordinators, administrators, aspiring project managers, and professionals looking to build a career in project management." },
    { question: "6. Is CAPM® recognised internationally?", answer: "Yes. CAPM® is awarded by PMI and recognised globally by employers across many industries." },
    { question: "7. Can CAPM® help my career growth?", answer: "Yes. CAPM® can improve your employability, strengthen your resume, and help you qualify for project management roles." },
    { question: "8. Can I take this course online?", answer: "Yes. The Agile Nest offers live online, classroom, and corporate training options." },
    { question: "9. What happens after CAPM®?", answer: "Many professionals use CAPM® as a stepping stone toward higher-level certifications, such as PMP®, as they gain experience." },
    { question: "10. How do I get started?", answer: "Contact The Agile Nest to confirm your eligibility, choose a course option, and begin your CAPM® certification journey with confidence." },
  ],
};
