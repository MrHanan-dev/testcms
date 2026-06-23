/**
 * Single source of truth for the PMP page's default content (plain-text parts).
 * Imported by the page (fallbacks) and the seed route so they never drift.
 * Link-laden eligibility paragraphs are kept in the page as exact JSX fallbacks
 * (editable via optional rich-text fields).
 */
export const PMP_CONTENT = {
  // Hero (CertificationHero)
  heroTitle: "PMP Training",
  heroSubtitle: "Become a Certified Project Management Professional",
  heroDescription:
    "Our PMP course provides comprehensive, expert led training to help you master project management principles. Gain practical skills, internationally recognised certification, and the confidence to lead projects successfully.",

  // Description section
  descEyebrow: "Project Excellence",
  descHeading: "PMP® Certification",
  descSubtitle: "Advance Your Career with a Globally Respected Credential",
  descParagraphs: [
    "The PMP® (Project Management Professional) certification is one of the world’s most recognised qualifications for project leaders. It proves your ability to lead projects, manage teams, control scope, schedule, budget, and deliver successful outcomes across industries.",
    "Highly valued by employers in New Zealand and worldwide, the PMP® certification can strengthen your professional profile, unlock senior career opportunities, and increase your earning potential.",
    "At The Agile Nest, we deliver practical, results-focused PMP® training with expert guidance, real-world examples, mock exams, and structured support to help you pass with confidence.",
  ],
  descCallout: "Earn a credential trusted by employers worldwide and take the next step in your project management career.",
  gameChangerHeading: "Why PMP is a Game Changer",
  gameChangerItems: [
    { title: "20% Higher Salary", desc: "(PMI Salary Survey)" },
    { title: "Stronger Growth", desc: "Unlock senior roles globally." },
    { title: "Stand Out", desc: "The gold standard in PM certification." },
    { title: "Enhance Organisation", desc: "Achieve greater efficiency and ROI." },
    { title: "Global Recognition", desc: "Knowledge mastery affirmation." },
    { title: "Professional Built", desc: "Skills to build a better tomorrow." },
  ],
  whoHeading: "Who Should Apply?",
  whoIntro: "Designed for experienced project managers looking to validate their skills and advance their careers.",
  whoAudience: [
    "Project Managers & Directors",
    "Program & Portfolio Managers",
    "Delivery Leads & TheAgileNest Coaches",
    "Industry Leaders Seeking Global Credentials",
    "Professionals with 3+ Years PM Experience",
  ],
  atpTitle: "Official A.T.P.",
  atpSubtitle: "Authorized Training Partner",

  // Eligibility
  eligibilityHeading: "Eligibility Criteria",
  eligibilityIntro: "The PMP requires both project management education and documented experience. Choose the pathway that matches your background.",
  pathwayLabels: ["Secondary School", "Associate Degree", "Bachelor's Degree", "GAC Accredited"],
  pathwayExperience: ["60 months / 5 years", "48 months / 4 years", "36 months / 3 years", "24 months / 2 years"],

  // Curriculum
  curriculumHeading: "Curriculum / Syllabus",
  curriculumSubtitle: "Aligned with the latest PMP® Examination Content Outline (ECO).",
  domainFeatures: [
    { title: "Domain I: People (33%)", desc: "Mastering leadership, conflict management, and empowering high-performing teams." },
    { title: "Domain II: Process (41%)", desc: "Executing methodologies, managing schedule, scope, budget, and risk across the lifecycle." },
    { title: "Domain III: Business Environment (26%)", desc: "Aligning projects with organizational strategy, compliance, and business value delivery." },
    { title: "Agile, Predictive & Hybrid", desc: "Deep dive into Agile (60%) and Predictive (40%) methodologies, alongside Scrum, Kanban, and Lean." },
  ],
  whatWeOfferHeading: "What We Offer",
  whatWeOffer: [
    "35 Hours of Live Expert Led Training",
    "Official PMI® Authorized Training Content",
    "3 Full-length PMP Mock Exams",
    "PMI Application Assistance",
    "Post-Training Support till Certification",
    "Comprehensive Exam Support & Mentorship",
  ],
  syllabusButton: "Download Full Syllabus",

  // Exam format
  examFormatHeading: "PMP® Exam Format",
  examFormat: [
    { title: "180", subtitle: "Questions", desc: "170 Scored + 10 Pretest questions" },
    { title: "240", subtitle: "Minutes", desc: "4 Hours with two 10-min breaks" },
    { title: "Breaks", subtitle: "Included", desc: "Two optional 10-min scheduled breaks" },
    { title: "Target", subtitle: "Scoring", desc: "Results based on proficiency levels" },
  ],
  questionTypesHeading: "PMP® Question Formats",
  questionTypesSubtitle: "Master diverse interactive and situational question types",
  questionTypes: [
    { title: "Multiple Choice", desc: "Single correct answer from four options" },
    { title: "Multiple Response", desc: "Select all applicable answers from a list" },
    { title: "Drag and Drop", desc: "Match related concepts or sequence processes" },
    { title: "Hotspot", desc: "Interact with graphics to identify correct elements" },
    { title: "Scenario Based", desc: "Deep dive case studies and situational sets" },
  ],

  // Why train
  whyTrainEyebrow: "Why Choose Agile Nest",
  whyTrainHeading: "PMP® Training Features",
  whyTrainSubheading: "Why Train with TheAgileNest",
  whyTrainPara1: "We are a Premium Authorised Training Partner (A.T.P.) for the global Project Management Institute (PMI).",
  whyTrainPara2: "We have been supporting project managers to attain their PMI® certifications. The combination of our training methods, facilitators, self-study, and collaboration has resulted in ongoing success.",
  whyTrainFeatures: [
    { title: "Highly Experienced Instructor-Led Training", desc: "Learn from skilled, qualified professionals with real-world project management experience through classroom and live online sessions." },
    { title: "PMI-Aligned Course Content", desc: "Comprehensive training materials fully aligned with the latest PMI framework and PMBOK® Guide principles." },
    { title: "35 Hours PMP® Exam Preparation Training", desc: "Structured training program that provides the required 35 contact hours needed for PMP® exam eligibility." },
    { title: "Certificate of Completion (CoC)", desc: "Receive a completion certificate confirming your training hours, required for PMP® application eligibility." },
    { title: "Flexible Class Options", desc: "Choose convenient weekend or weekday classes, with classroom and live online delivery available." },
    { title: "First Attempt Exam Strategies", desc: "Learn practical tips, proven techniques, and exam approaches designed to maximise your chance of passing first time." },
    { title: "Free High-Quality Mock Exams & Practice Questions", desc: "Access realistic mock questions, exercises, and practice sessions as part of your training." },
    { title: "Free One-to-One Coaching Session", desc: "Receive a complimentary 1-hour individual coaching session with your instructor for personalised guidance." },
    { title: "Premium Classroom Experience", desc: "Morning tea, afternoon tea, and lunch are provided during in-person sessions." },
    { title: "Exam Application & Audit Support", desc: "Get expert assistance with PMP® application submission, documentation, and PMI audit support." },
  ],
  whyTrainCtaHeading: "Start Your PMP® Journey with Confidence",
  whyTrainCtaPara: "Join The Agile Nest and gain the knowledge, support, and preparation needed to achieve PMP® success.",
  whyTrainCtaButton: "Enroll Now",

  // Why PMP right for you
  rightHeadingLead: "Why PMP® is ",
  rightHeadingAccent: "Right for You",
  rightParagraph: "Become PMP® Certified With TheAgileNest. Whether you aim to advance your career, lead projects, or master global best practices, TheAgileNest is your trusted partner.",
  rightItems: [
    { title: "Global Recognition", desc: "Stand out worldwide with a certification recognized in over 200 countries." },
    { title: "Higher Salary", desc: "Earn 25–33% more than non-certified peers on average." },
    { title: "Career Growth", desc: "Access leadership roles and master complex, high-stakes projects." },
    { title: "Skill Validation", desc: "Demonstrates mastery of global project management standards and best practices." },
  ],
  rightCardHeading: "Master PMP with Expert Guidance",
  rightCardPara: "Achieve exam success on your first attempt through engaging training, targeted study plans, and practical exercises led by certified professionals.",
  rightStat1Value: "Proven",
  rightStat1Label: "Exam Success",
  rightStat2Value: "1.4M+",
  rightStat2Label: "Global Leaders",
  rightCardButton: "Start My Certification Journey",

  // Training & investment
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
  examFeeHeading: "PMP® Exam Fee (PMI)",
  memberFee: "US $405",
  nonMemberFee: "US $655",
  feeNote: "*PMI Membership (Approx. US $139) may reduce exam fees and provide extra resources.",
  courseFeesHeading: "Course Fees & Discounts",
  courseFeesIntro: "Contact us for current fees, upcoming schedules, and corporate packages:",
  contactEmail: "contact@theagilenest.com",
  contactPhone: "+64 273537774",
  discounts: ["Group bookings", "Corporate organisations", "Early bird registrations", "PMI Chapter members"],
  importantNote: "The PMP® exam fee is only payable after your application has been approved by PMI.",

  // Registration
  corporateEyebrow: "Corporate Training",
  corporateHeading: "Need a custom batch for your organization?",
  corporatePara: "We offer tailored corporate training sessions for teams of 5 or more, focused on your specific industry challenges.",
  corporateButton: "Enquire Now",
  testimonialQuote: "The best investment I made in my career. The instructors are clearly experts with deep industrial context.",
  testimonialAuthor: "Senior Project Lead",
  testimonialRole: "NZ Transport Agency Alumnus",

  // FAQ
  faqTitle: "PMP® Exam FAQs",
  faqSubtitle: "Certification Journey",
  faqDescription: "Everything You Need to Know About PMP® Training, Exam, Fees & Renewal",
  faqItems: [
    { question: "1. What is the PMP® certification?", answer: "The PMP® (Project Management Professional) certification is a globally recognised credential awarded by PMI for experienced project professionals. It validates your ability to lead projects, manage teams, and deliver successful outcomes across industries." },
    { question: "2. Who should take the PMP® exam?", answer: "The PMP® exam is ideal for project managers, engineers, coordinators, team leaders, consultants, and professionals responsible for managing projects or leading teams." },
    { question: "3. Is PMP® recognised in New Zealand?", answer: "Yes. PMP® is highly respected by employers in New Zealand and internationally across construction, infrastructure, IT, finance, healthcare, engineering, government, and many other sectors." },
    { question: "4. What are the eligibility requirements for the PMP® exam?", answer: "Candidates must meet PMI education and project management experience requirements. In addition, all applicants must complete 35 hours of formal project management training aligned with the PMP Examination Content Outline (ECO)." },
    { question: "5. Does The Agile Nest provide the required 35 contact hours?", answer: "Yes. The Agile Nest PMP® course provides the required 35 contact hours / PDUs and a completion certificate to support your PMP® application." },
    { question: "6. How much does the PMP® exam cost?", answer: "Current PMI fees are typically: PMI Member: US $405; Non-Member: US $655; PMI Membership: Approx. US $139. Exam fees are payable after your application has been approved and you are ready to schedule the exam." },
    { question: "7. Can I take the PMP® exam online?", answer: "Yes. PMI offers the PMP® exam at authorised test centres and through secure online proctored exam options, subject to availability." },
    { question: "8. How difficult is the PMP® exam?", answer: "The PMP® exam is challenging and requires structured preparation. With quality training, a study plan, and regular mock exam practice, candidates can approach the exam confidently." },
    { question: "9. How many questions are in the PMP® exam?", answer: "The PMP® exam currently includes 180 questions (170 scored, 10 unscored pretest) to be completed within 240 minutes." },
    { question: "10. What topics are covered in the PMP® exam?", answer: "The exam covers three key domains: People (33%), Process (41%), and Business Environment (26%). It is approximately 60% Agile/Hybrid and 40% Predictive." },
    { question: "11. How long should I study for PMP®?", answer: "Preparation time depends on your experience and background, but many candidates study for 6 to 12 weeks using a structured learning plan." },
    { question: "12. Do you provide mock exams and practice questions?", answer: "Yes. The Agile Nest includes high-quality mock exams, practice questions, exercises, and study guidance." },
    { question: "13. Can The Agile Nest help with the PMP® application?", answer: "Yes. We provide support with application preparation, documentation guidance, and PMI audit assistance if required." },
    { question: "14. What happens if I fail the PMP® exam?", answer: "If you do not pass, PMI generally allows candidates to retake the exam within their one-year eligibility period, subject to PMI policies and applicable retake fees." },
    { question: "15. How many times can I attempt the PMP® exam?", answer: "Once approved, candidates may generally attempt the exam up to three times within the one-year eligibility period, subject to PMI rules." },
    { question: "16. What happens after I pass the PMP® exam?", answer: "After passing, you earn the PMP® credential, which can improve career opportunities, leadership prospects, and earning potential." },
    { question: "17. How do I maintain my PMP® certification?", answer: "To maintain certification, PMI requires PMP® holders to earn 60 PDUs every three years through continuous professional development." },
    { question: "18. Do I need to retake the exam to renew PMP®?", answer: "No. In most cases, certification is maintained through earning PDUs and renewing with PMI rather than retaking the exam." },
    { question: "19. Can I attend PMP® training online or on-site?", answer: "Yes. The Agile Nest offers live online, classroom, and corporate on-site PMP® training options in New Zealand and internationally." },
    { question: "20. Why choose The Agile Nest for PMP® training? ", answer: "We provide 35 Contact Hours, PMI-aligned training, Expert instructors, Mock exams & study support, Application & audit assistance, Real-world project examples, and Flexible learning options." },
    { question: "21. How do I get started?", answer: "Contact The Agile Nest to confirm your eligibility, choose a training option, and begin your PMP® certification journey with confidence." },
  ],
};
