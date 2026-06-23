import { getPayload } from "payload";
import config from "@payload-config";
import { NextResponse } from "next/server";

/**
 * Seed All Collections — Populate all new WordPress-like collections with real data.
 * GET /admin/seed-all
 */

// Testimonials from website
const TESTIMONIALS = [
  {
    name: "Sarah Johnson",
    position: "Senior Project Manager",
    company: "Infrastructure Global",
    location: "Auckland, NZ",
    content: "TheAgileNest's PMP training was a game-changer. Their practical approach made complex concepts easy to grasp and apply immediately.",
    rating: "5",
    service: "pmp",
    status: "published",
    featured: true,
    order: 1,
  },
  {
    name: "Mark Thompson",
    position: "Operations Director",
    company: "BuildRight NZ",
    location: "Wellington, NZ",
    content: "Working with their consultants on our PMO recovery saved us months of delays. Their expertise in cost estimation is unparalleled.",
    rating: "5",
    service: "consulting",
    status: "published",
    featured: true,
    order: 2,
  },
  {
    name: "David Chen",
    position: "Construction Lead",
    company: "Urban Developers",
    location: "Sydney, Australia",
    content: "The most professional training experience I've had in 15 years. They don't just teach the book; they teach the reality of the industry.",
    rating: "5",
    service: "training",
    status: "published",
    featured: true,
    order: 3,
  },
];

// FAQs from website
const FAQS = [
  {
    question: "What services does TheAgileNest provide?",
    answer: "We provide project management consultancy, cost advisory, quantity surveying, PMO support, project controls, and professional training solutions designed to improve delivery performance and build capability.",
    category: "general",
    status: "published",
    order: 1,
    relatedPage: ["home", "about"],
  },
  {
    question: "Do you provide PMP® training?",
    answer: "Yes. We deliver practical PMP® preparation programs supported by real-world project examples, structured learning, mock exams, and expert guidance to help participants succeed with confidence.",
    category: "pmp",
    status: "published",
    order: 2,
    relatedPage: ["pmp", "training"],
  },
  {
    question: "We are a corporate organisation and want PMP® training at our site. Is this possible?",
    answer: "Absolutely. We deliver customised on-site corporate PMP® and project management training programs across New Zealand, Australia, the USA, and the UAE, subject to scheduling and demand. We can tailor delivery to your team's goals and availability.",
    category: "training",
    status: "published",
    order: 3,
    relatedPage: ["training"],
  },
  {
    question: "Who do you work with?",
    answer: "We work with corporates, government agencies, contractors, developers, consultants, and professionals across construction, infrastructure, commercial, energy, and technology sectors.",
    category: "general",
    status: "published",
    order: 4,
    relatedPage: ["about", "consulting"],
  },
  {
    question: "Can you help delayed or underperforming projects?",
    answer: "Yes. We support organisations with recovery planning, scheduling, governance, reporting, commercial controls, and practical strategies to bring projects back on track.",
    category: "consulting",
    status: "published",
    order: 5,
    relatedPage: ["consulting"],
  },
  {
    question: "Do you offer online and international services?",
    answer: "Yes. We provide online training, remote consultancy, and virtual project support for clients in New Zealand and internationally, using secure digital collaboration tools.",
    category: "general",
    status: "published",
    order: 6,
    relatedPage: ["home", "training"],
  },
  {
    question: "Why choose TheAgileNest?",
    answer: "Clients choose us for our real-world experience, strong commercial expertise, practical training approach, and focus on measurable outcomes. We don't just provide advice—we help deliver results.",
    category: "general",
    status: "published",
    order: 7,
    relatedPage: ["home", "about"],
    featured: true,
  },
];

// Team Members
const TEAM_MEMBERS = [
  {
    name: "Engr. Syed Amjad Iqbal",
    position: "CEO & Principal Consultant",
    department: "leadership",
    bio: "With over 17 years of professional experience in construction and project management, Engr. Syed Amjad Iqbal is a passionate leader, educator, and industry expert. His unwavering dedication to empowering the next generation of project professionals is a source of inspiration for all who work with him.",
    qualifications: [
      { title: "PMP" },
      { title: "PMI-CP" },
      { title: "MSc Project Management (KTH Sweden)" },
      { title: "MSc Construction Management (Massey University)" },
    ],
    status: "active",
    featured: true,
    showOnAbout: true,
    order: 1,
  },
];

// Pricing Plans
const PRICING_PLANS = [
  {
    name: "PMP Certification Course",
    subtitle: "Most Popular",
    description: "Comprehensive PMP exam preparation with 35 contact hours, practice exams, and expert mentorship.",
    category: "certification",
    price: 1499,
    currency: "NZD",
    billingPeriod: "one-time",
    priceNote: "+GST",
    features: [
      { text: "35 Contact Hours (PMI Requirement)", included: true, highlight: true },
      { text: "Complete PMBOK 7th Edition Coverage", included: true },
      { text: "500+ Practice Questions", included: true },
      { text: "Full-Length Mock Exams", included: true },
      { text: "1-on-1 Mentorship Sessions", included: true },
      { text: "Exam Application Support", included: true },
      { text: "12 Months Access to Materials", included: true },
      { text: "Certificate of Completion", included: true },
    ],
    buttonText: "Enroll Now",
    buttonUrl: "/contact?course=pmp",
    buttonStyle: "primary",
    status: "active",
    featured: true,
    badge: "Best Value",
    icon: "🎓",
    order: 1,
  },
  {
    name: "CAPM Certification Course",
    subtitle: "Entry Level",
    description: "Perfect for those starting their project management journey. 23 contact hours of expert training.",
    category: "certification",
    price: 999,
    currency: "NZD",
    billingPeriod: "one-time",
    priceNote: "+GST",
    features: [
      { text: "23 Contact Hours (PMI Requirement)", included: true, highlight: true },
      { text: "Complete PMBOK Coverage", included: true },
      { text: "300+ Practice Questions", included: true },
      { text: "Mock Exams Included", included: true },
      { text: "Group Study Sessions", included: true },
      { text: "6 Months Access to Materials", included: true },
      { text: "Certificate of Completion", included: true },
    ],
    buttonText: "Get Started",
    buttonUrl: "/contact?course=capm",
    buttonStyle: "secondary",
    status: "active",
    featured: false,
    icon: "📚",
    order: 2,
  },
  {
    name: "PMI-CP Construction Professional",
    subtitle: "Specialized",
    description: "Advanced certification for construction professionals. Industry-specific project management training.",
    category: "certification",
    price: 1799,
    currency: "NZD",
    billingPeriod: "one-time",
    priceNote: "+GST",
    features: [
      { text: "40 Contact Hours", included: true, highlight: true },
      { text: "Construction-Specific Content", included: true },
      { text: "Real Project Case Studies", included: true },
      { text: "Industry Expert Instructors", included: true },
      { text: "Networking Opportunities", included: true },
      { text: "Career Guidance", included: true },
      { text: "12 Months Access", included: true },
    ],
    buttonText: "Learn More",
    buttonUrl: "/contact?course=pmi-cp",
    buttonStyle: "accent",
    status: "active",
    featured: false,
    icon: "🏗️",
    order: 3,
  },
];

// Forms
const FORMS = [
  {
    title: "Contact Form",
    slug: "contact-form",
    status: "active",
    fields: [
      { fieldType: "text", name: "name", label: "Full Name", required: true, placeholder: "Your name" },
      { fieldType: "email", name: "email", label: "Email Address", required: true, placeholder: "your@email.com" },
      { fieldType: "tel", name: "phone", label: "Phone Number", required: false, placeholder: "+64 21 123 4567" },
      { fieldType: "select", name: "subject", label: "Subject", required: true, options: [
        { label: "General Enquiry", value: "general" },
        { label: "PMP Training", value: "pmp" },
        { label: "CAPM Training", value: "capm" },
        { label: "Consulting Services", value: "consulting" },
        { label: "Corporate Training", value: "corporate" },
        { label: "Partnership", value: "partnership" },
      ]},
      { fieldType: "textarea", name: "message", label: "Message", required: true, placeholder: "How can we help you?" },
    ],
    sendEmail: true,
    emailSubject: "New Contact Form Submission",
    confirmationType: "message",
    confirmationMessage: "Thank you for contacting us! We'll get back to you within 24 hours.",
    submitButtonText: "Send Message",
    submitButtonColor: "#0B3C5D",
    formWidth: "medium",
    labelPosition: "top",
    enableHoneypot: true,
    rateLimitPerHour: 10,
  },
  {
    title: "Course Booking Form",
    slug: "course-booking",
    status: "active",
    fields: [
      { fieldType: "text", name: "name", label: "Full Name", required: true },
      { fieldType: "email", name: "email", label: "Email", required: true },
      { fieldType: "tel", name: "phone", label: "Phone", required: true },
      { fieldType: "select", name: "course", label: "Select Course", required: true, options: [
        { label: "PMP Certification", value: "pmp" },
        { label: "CAPM Certification", value: "capm" },
        { label: "PMI-CP Construction", value: "pmi-cp" },
      ]},
      { fieldType: "select", name: "experience", label: "Project Management Experience", required: true, options: [
        { label: "0-2 years", value: "0-2" },
        { label: "3-5 years", value: "3-5" },
        { label: "5-10 years", value: "5-10" },
        { label: "10+ years", value: "10+" },
      ]},
      { fieldType: "textarea", name: "goals", label: "What are your goals?", required: false },
    ],
    sendEmail: true,
    emailSubject: "New Course Booking Request",
    confirmationType: "redirect",
    redirectUrl: "/thank-you",
    submitButtonText: "Book My Spot",
    submitButtonColor: "#D4A03E",
    formWidth: "medium",
    enableRecaptcha: false,
    enableHoneypot: true,
  },
];

// Menus
const MENUS = [
  {
    name: "Main Navigation",
    location: "header-primary",
    isActive: true,
    items: [
      {
        label: "Services",
        type: "dropdown",
        children: [
          { label: "Project Management", url: "/project-management", description: "Strategic project delivery" },
          { label: "Cost Estimation", url: "/cost-estimation", description: "Accurate cost planning" },
          { label: "Contract Management", url: "/contract-management", description: "Contract administration" },
          { label: "Consulting", url: "/consulting", description: "Expert consultancy" },
        ],
      },
      {
        label: "Training",
        type: "dropdown",
        children: [
          { label: "PMP Certification", url: "/pmp", description: "Project Management Professional" },
          { label: "CAPM Certification", url: "/capm", description: "Certified Associate" },
          { label: "PMI-CP", url: "/pmicp", description: "Construction Professional" },
          { label: "All Training", url: "/training", description: "View all courses" },
        ],
      },
      { label: "About", url: "/about", type: "link" },
      { label: "Blog", url: "/blog", type: "link" },
      { label: "Partner", url: "/partner", type: "link" },
    ],
  },
  {
    name: "Footer Services",
    location: "footer-1",
    isActive: true,
    items: [
      { label: "Project Management", url: "/project-management", type: "link" },
      { label: "Cost Estimation", url: "/cost-estimation", type: "link" },
      { label: "Contract Management", url: "/contract-management", type: "link" },
      { label: "Consulting", url: "/consulting", type: "link" },
    ],
  },
  {
    name: "Footer Training",
    location: "footer-2",
    isActive: true,
    items: [
      { label: "PMP Certification", url: "/pmp", type: "link" },
      { label: "CAPM Certification", url: "/capm", type: "link" },
      { label: "PMI-CP", url: "/pmicp", type: "link" },
      { label: "All Training", url: "/training", type: "link" },
    ],
  },
  {
    name: "Footer Resources",
    location: "footer-3",
    isActive: true,
    items: [
      { label: "Blog", url: "/blog", type: "link" },
      { label: "About Us", url: "/about", type: "link" },
      { label: "Partner With Us", url: "/partner", type: "link" },
      { label: "Privacy Policy", url: "/privacy", type: "link" },
      { label: "Terms of Service", url: "/terms", type: "link" },
    ],
  },
];

export async function GET() {
  const results: Record<string, { created: number; errors: string[] }> = {};
  
  try {
    const payload = await getPayload({ config });

    // Seed Testimonials
    results.testimonials = { created: 0, errors: [] };
    for (const t of TESTIMONIALS) {
      try {
        await payload.create({ collection: "testimonials", data: t as any });
        results.testimonials.created++;
      } catch (e) {
        results.testimonials.errors.push(String(e));
      }
    }

    // Seed FAQs
    results.faqs = { created: 0, errors: [] };
    for (const f of FAQS) {
      try {
        await payload.create({ collection: "faqs", data: f as any });
        results.faqs.created++;
      } catch (e) {
        results.faqs.errors.push(String(e));
      }
    }

    // Seed Team Members
    results.teamMembers = { created: 0, errors: [] };
    for (const t of TEAM_MEMBERS) {
      try {
        await payload.create({ collection: "team-members", data: t as any });
        results.teamMembers.created++;
      } catch (e) {
        results.teamMembers.errors.push(String(e));
      }
    }

    // Seed Pricing Plans
    results.pricingPlans = { created: 0, errors: [] };
    for (const p of PRICING_PLANS) {
      try {
        await payload.create({ collection: "pricing-plans", data: p as any });
        results.pricingPlans.created++;
      } catch (e) {
        results.pricingPlans.errors.push(String(e));
      }
    }

    // Seed Forms
    results.forms = { created: 0, errors: [] };
    for (const f of FORMS) {
      try {
        await payload.create({ collection: "forms", data: f as any });
        results.forms.created++;
      } catch (e) {
        results.forms.errors.push(String(e));
      }
    }

    // Seed Menus
    results.menus = { created: 0, errors: [] };
    for (const m of MENUS) {
      try {
        await payload.create({ collection: "menus", data: m as any });
        results.menus.created++;
      } catch (e) {
        results.menus.errors.push(String(e));
      }
    }

    return NextResponse.json({
      success: true,
      message: "All collections seeded successfully!",
      results,
      summary: {
        testimonials: results.testimonials.created,
        faqs: results.faqs.created,
        teamMembers: results.teamMembers.created,
        pricingPlans: results.pricingPlans.created,
        forms: results.forms.created,
        menus: results.menus.created,
      },
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: String(error), results },
      { status: 500 }
    );
  }
}
