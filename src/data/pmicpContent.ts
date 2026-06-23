/**
 * Default ("fallback") content for the PMI-CP certification page.
 * Renders identically to the original hard-coded page until the client edits the
 * matching fields in the CMS (global slug "pmicpPage"). Icons/colors/gradients and
 * the card styling/track numbers stay in code; only this text content is editable.
 */
export const PMICP_CONTENT = {
  // Hero (via CertificationHero — links/badge/gradient stay in code)
  heroTitle: "PMI-CP® Certification",
  heroSubtitle: "PMI Construction Professional",
  heroDescription:
    "The only globally recognised certification designed specifically for the construction and built environment sectors. Validate your ability to manage multi-million dollar projects with confidence.",

  // Details section
  detailsBadge: "Construction Excellence",
  detailsHeading: "Why PMI-CP® Is a Game Changer",
  detailsParagraph:
    "The PMI Construction Professional (PMI-CP)® certification is a globally recognised credential for professionals in the construction and built environment sectors. It validates your ability to plan, manage, and deliver complex construction projects using industry-best practices.",
  benefits: [
    { title: "Stand Out from the Crowd", desc: "The only internationally recognized certification with an in-depth curriculum focused on the construction industry." },
    { title: "Enhance Your Organisation", desc: "Achieve greater efficiency, profitability, and sustainability in projects and their delivery." },
    { title: "Global Recognition", desc: "Gain an independent affirmation of your knowledge and mastery of construction concepts." },
    { title: "Created by Professionals", desc: "The PMI-CP® certification represents the skills and knowledge you need to help build a better tomorrow." },
  ],

  // Who Should Apply card
  whoHeading: "Who Should Apply?",
  whoIntro: "Designed for engineers, project managers, and construction leaders looking to advance their careers.",
  whoAudience: [
    "Construction Project Managers & Coordinators",
    "Architects & Engineers in PM Roles",
    "Quantity Surveyors & Planners",
    "Industry Leaders Seeking Global Credentials",
    "Professionals with 3-4 Years Construction Experience",
  ],

  // Eligibility Requirements (two numbered tracks; the "1"/"2" badge stays in code)
  eligibilityHeading: "Eligibility Requirements",
  eligibilityIntro:
    "The PMI-CP requires construction-specific project experience. Choose the pathway matching your education background.",
  tracks: [
    {
      title: "Secondary Diploma Track",
      subtitle: "(High school diploma / GED equivalent)",
      items: [
        "Secondary diploma (high school or equivalent)",
        "35 contact hours of construction PM education",
        "60 months (5 years) of construction project experience",
      ],
    },
    {
      title: "Degree Track",
      subtitle: "(Construction, engineering or related field)",
      items: [
        "Bachelor's or associate degree in construction or related field",
        "35 contact hours of construction PM education",
        "36 months (3 years) of construction project experience",
      ],
    },
  ],
  eligibilityCalloutLead: "Good news:",
  eligibilityCalloutBody:
    "Our PMI-CP training course fulfils the 35 contact hours requirement for both tracks. Construction experience must be documented in your PMI application.",

  // Curriculum / Syllabus
  curriculumHeading: "Curriculum / Syllabus",
  curriculumSubtitle: "Aligned with PMI's construction-specific standards and best practices.",
  curriculum: [
    { title: "Construction Project Fundamentals", percent: "30%", desc: "Core construction project management principles, life cycles, and methodologies specific to the built environment." },
    { title: "Scope, Risk & Contract Management", percent: "35%", desc: "Navigating contracts, mitigating project risk, scope control, and change order management in construction contexts." },
    { title: "Stakeholder & Interface Management", percent: "20%", desc: "Building stronger stakeholder relationships, improving team communication, and managing interfaces across disciplines." },
    { title: "Cost, Quality & Safety", percent: "15%", desc: "Cost control, quality assurance, and safety standards critical for achieving success in modern construction environments." },
  ],

  // What's Included (navy box)
  includedHeading: "What's Included",
  included: [
    "35+ Hours of Live Expert-led Training",
    "Official PMI® Authorized Training Content",
    "PMI-CP Mock Exams & Questions",
    "PMI Application Assistance",
    "Post-Training Support till Certification",
    "Comprehensive Exam Support & Mentorship",
  ],
  includedButton: "Download Full Syllabus",

  // Exam Format box
  examFormatHeading: "PMI-CP® Exam Format",
  examFormat: [
    { title: "170 Questions", desc: "Scenario-based multiple-choice (150 scored, 20 unscored)" },
    { title: "230 Minutes", desc: "Total exam duration (3 hours 50 minutes). Two 10-minute breaks available." },
    { title: "Exam Structure", desc: "4 Domains: Fundamentals, Contract, Stakeholder, Execution" },
  ],

  // Why Train with TheAgileNest
  whyTrainEyebrow: "TheAgileNest Advantage",
  whyTrainHeading: "Why Train with TheAgileNest",
  whyTrainPara1: "We are a Premium Authorised Training Partner (A.T.P.) for the global Project Management Institute (PMI).",
  whyTrainPara2:
    "We specialize in bridging the gap between construction theory and on-site realities. Our methods and expert facilitators have resulted in ongoing success for industry leaders.",
  whyTrainFeatures: [
    { title: "Experienced Instructor-Led", desc: "Learn from construction veterans with decades of multi-sector project experience." },
    { title: "PMI-Aligned Content", desc: "Training materials fully aligned with the latest PMI Construction standards." },
    { title: "35 Hours PMI-CP® Prep", desc: "Satisfies the 35 contact hour requirement for both diploma and degree tracks." },
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
    "Construction PM workbook",
    "Interactive industry activities",
    "Formulas & flash cards",
    "Free practice exams",
    "LMS access",
    "Structured study support",
  ],
  examFeeHeading: "PMI-CP® Exam Fee (PMI)",
  memberFee: "US $405",
  nonMemberFee: "US $655",
  feeNote: "*PMI Membership (Approx. US $139) may reduce exam fees and provide extra resources.",
  courseFeesHeading: "Course Fees & Discounts",
  courseFeesIntro: "Contact us for current fees, upcoming schedules, and corporate packages:",
  contactEmail: "contact@theagilenest.com",
  contactPhone: "+64 273537774",
  discounts: ["Group bookings", "Corporate organisations", "Early bird registrations", "PMI Chapter members"],
  importantNoteLabel: "Important Note:",
  importantNoteBody: "The PMI-CP® exam fee is only payable after your application has been approved by PMI.",

  // Register side card + testimonial
  registerCardPara: "Get certified and lead multi-million dollar construction projects.",
  registerCardButton: "Enquire Now",
  testimonialQuote: "The only certification that truly understands the complexities of the NZ construction site.",
  testimonialAuthor: "Fletcher Construction Lead",

  // FAQ (same list feeds both JSON-LD and the visible FAQ)
  faqTitle: "PMI-CP® Exam FAQs",
  faqSubtitle: "Construction Certification",
  faqDescription: "Everything You Need to Know About the Construction Professional (PMI-CP)® Certification",
  faqItems: [
    { question: "1. What is the PMI-CP® certification?", answer: "The PMI Construction Professional (PMI-CP)® is a globally recognized credential for professionals in the construction and built environment sectors. It validates your ability to manage complex construction projects using industry-best practices." },
    { question: "2. Who should apply for the PMI-CP®?", answer: "This certification is designed for engineers, project managers, coordinators, quantity surveyors, and construction leaders with 3-5 years of industry-specific project experience." },
    { question: "3. Does this course satisfy the 35 contact hour requirement?", answer: "Yes. The Agile Nest PMI-CP® course provides the required 35 contact hours of project management education needed for exam eligibility for both diploma and degree tracks." },
    { question: "4. What’s included with the PMI-CP® course?", answer: "Our training includes 35 Contact Hours Certificate, PMI-aligned construction content, Expert instructor-led sessions, construction-specific mock exams, workbook, and full application support." },
    { question: "5. How much does the PMI-CP® exam cost?", answer: "Typical fees are US $405 for PMI members and US $655 for non-members. PMI membership is approximately US $139/year." },
    { question: "6. Is PMI-CP® recognized in New Zealand?", answer: "Yes, it is highly valued by major contractors and government agencies as it specifically addresses the complexities of the built environment." },
    { question: "7. What are the eligibility tracks?", answer: "Track 1: Secondary diploma + 60 months experience. Track 2: Bachelor's/Associate degree + 36 months experience. Both require 35 contact hours of PM education." },
    { question: "8. Can I take the PMI-CP® exam online?", answer: "Yes, PMI offers both online proctored exams and authorized test center options." },
    { question: "9. How long is the PMI-CP® exam?", answer: "The exam consists of 170 questions to be completed within 230 minutes (3 hours 50 minutes), with two 10-minute breaks." },
    { question: "10. How do I get started?", answer: "Contact The Agile Nest to confirm your track, choose a session, and begin your journey to becoming a certified construction professional." },
  ],
};
