/**
 * Original homepage content — single source for seed-home and component fallbacks.
 */
export const HOME_HERO_SLIDES = [
  { file: "TheAgileNest_hero_main_1771222013046.png", variant: "image", tag: "Project Management", headline: "Strategic Planning.\nPrecision Delivery. Total Control.", description: "From inception to completion, we provide the leadership and expertise required to navigate high-stakes projects and achieve outstanding business outcomes.", alt: "Expert Project Management Consulting" },
  { file: "TheAgileNest_pmp_training_1771222055265.png", variant: "image", tag: "Professional Training", headline: "Hands On Training.\nReal Results. Certified Success.", description: "Gain practical, hands-on experience with TheAgileNest’s expert-led project management courses. Our proven methods ensure you not only pass your exams but also excel in real-world projects.", alt: "Professional training session backdrop from TheAgileNest" },
  { file: "Totalqsconsultant.jpeg", variant: "infographic", tag: "Trusted Partner", headline: "Simple. Transparent.\nStress-Free Estimation.", description: "Helping builders, developers, and renovators complete their projects on time and within budget with expert cost management.", alt: "TheAgileNest Consultant Overview" },
  { file: "pmbok_evolution.jpeg", variant: "infographic", tag: "Quantity Surveying", headline: "Bid More. Win More.\nBuild Better with TheAgileNest Estimation services", description: "Your reliable partner in Quantity Surveying, Cost Management, and successful project delivery.\n\nAt TheAgileNest Estimation services, we make construction estimating and cost management simple, transparent, and stress-free. We act as your trusted partner in New Zealand's construction industry, helping builders, developers, and renovators complete their projects on time and within budget.", alt: "TheAgileNest Estimation services. Bid More. Win More." },
  { file: null, variant: "collage", tag: "Certifications", headline: "Globally Recognized\nCredentials.", description: "Elevate your career with industry leading certifications. We provide comprehensive preparation for PMP®, CAPM®, and PMI-CP® exams.", alt: "Globally Recognized Certifications: PMP, CAPM, PMI-CP" },
] as const;

export const HOME_CERTS = [
  { name: "PMP", title: "Project Management Professional", href: "/pmp", dir: "certifications", file: "pmp.webp" },
  { name: "CAPM", title: "Certified Associate in Project Management", href: "/capm", dir: "certifications", file: "capm.webp" },
  { name: "PMI-CP", title: "PMI Construction Professional", href: "/pmicp", dir: "certifications", file: "pmi-cp.webp" },
] as const;

export const HOME_TESTIMONIALS = [
  { quote: "TheAgileNest's PMP training was a game-changer. Their practical approach made complex concepts easy to grasp and apply immediately.", author: "Sarah Johnson", role: "Senior Project Manager", company: "Infrastructure Global" },
  { quote: "Working with their consultants on our PMO recovery saved us months of delays. Their expertise in cost estimation is unparalleled.", author: "Mark Thompson", role: "Operations Director", company: "BuildRight NZ" },
  { quote: "The most professional training experience I've had in 15 years. They don't just teach the book; they teach the reality of the industry.", author: "David Chen", role: "Construction Lead", company: "Urban Developers" },
] as const;

export const HOME_GOOGLE_REVIEWS = [
  { name: "Engineer Syed", date: "a month ago", rating: 5, text: "AgileNest delivers outstanding project management and construction cost estimation services. Their expertise helped ensure accurate budgeting and smooth project execution. The team is highly professional, responsive, and committed to delivering results. Highly recommended for construction and infrastructure projects." },
  { name: "Rabin Biswakarma", date: "2 years ago", rating: 5, text: "they have professional consultant to make your dream come true" },
  { name: "Michelle Ann Javier", date: "a month ago", rating: 5, text: "" },
  { name: "Adesh Aditya", date: "a month ago", rating: 5, text: "" },
  { name: "Lourin Keat", date: "a year ago", rating: 5, text: "" },
] as const;

export const HOME_FAQ_ITEMS = [
  { question: "1. What services does The Agile Nest provide?", answer: "We provide project management consultancy, cost advisory, quantity surveying, PMO support, project controls, and professional training solutions designed to improve delivery performance and build capability." },
  { question: "2. Do you provide PMP® training?", answer: "Yes. We deliver practical PMP® preparation programs supported by real-world project examples, structured learning, mock exams, and expert guidance to help participants succeed with confidence." },
  { question: "3. We are a corporate organisation and want PMP® training at our site. Is this possible?", answer: "Absolutely. We deliver customised on-site corporate PMP® and project management training programs across New Zealand, Australia, the USA, and the UAE, subject to scheduling and demand. We can tailor delivery to your team's goals and availability." },
  { question: "4. Who do you work with?", answer: "We work with corporates, government agencies, contractors, developers, consultants, and professionals across construction, infrastructure, commercial, energy, and technology sectors." },
  { question: "5. Can you help delayed or underperforming projects?", answer: "Yes. We support organisations with recovery planning, scheduling, governance, reporting, commercial controls, and practical strategies to bring projects back on track." },
  { question: "6. Do you offer online and international services?", answer: "Yes. We provide online training, remote consultancy, and virtual project support for clients in New Zealand and internationally, using secure digital collaboration tools." },
  { question: "7. Why choose The Agile Nest?", answer: "Clients choose us for our real-world experience, strong commercial expertise, practical training approach, and focus on measurable outcomes. We don't just provide advice—we help deliver results." },
] as const;

export const HOME_FAQ_META = {
  faqEyebrow: "FAQ",
  faqTitle: "Answers to Fuel Your",
  faqSubtitle: "Project Journey",
  faqDescription: "Clear answers to common questions about our consultancy and training services.",
  faqContactPrompt: "Have a specific question or corporate requirement?",
  faqContactLinkText: "Contact us today",
  faqContactSuffix: "for a tailored solution.",
} as const;
