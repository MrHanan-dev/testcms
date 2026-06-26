/**
 * Original CMS collection seed data derived from live site content (`src/data/*`).
 * Used by /admin/seed-all and collection seed helpers — not placeholder demo entries.
 */
import { CONSULTING_CONTENT } from "@/data/consultingContent";
import { CE_CONTENT } from "@/data/ceContent";
import { CAPM_CONTENT } from "@/data/capmContent";
import { globalFaqs } from "@/lib/faqData";
import {
  HOME_FAQ_ITEMS,
  HOME_TESTIMONIALS,
} from "@/data/homeContent";
import { PMP_CONTENT } from "@/data/pmpContent";
import { SITE_SETTINGS_CONTENT } from "@/data/siteSettingsContent";

export const ORIGINAL_TEAM_MEMBERS = [
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
] as const;

/** Homepage + service-page testimonials mapped to the testimonials collection schema. */
export const ORIGINAL_TESTIMONIALS = [
  ...HOME_TESTIMONIALS.map((t, i) => ({
    name: t.author,
    position: t.role,
    company: t.company,
    content: t.quote,
    rating: "5",
    service: "general" as const,
    status: "published" as const,
    featured: true,
    order: i + 1,
  })),
  {
    name: PMP_CONTENT.testimonialAuthor,
    position: PMP_CONTENT.testimonialRole,
    company: "",
    content: PMP_CONTENT.testimonialQuote,
    rating: "5",
    service: "pmp" as const,
    status: "published" as const,
    featured: false,
    order: 10,
  },
  {
    name: CAPM_CONTENT.testimonialAuthor,
    position: "",
    company: "",
    content: CAPM_CONTENT.testimonialQuote,
    rating: "5",
    service: "capm" as const,
    status: "published" as const,
    featured: false,
    order: 11,
  },
  ...CE_CONTENT.testimonials.map((t, i) => ({
    name: t.author,
    position: "",
    company: "",
    content: t.quote,
    rating: "5",
    service: "cost-estimation" as const,
    status: "published" as const,
    featured: false,
    order: 20 + i,
  })),
];

/** Site-wide FAQ entries for the FAQs collection (from homepage + PMP page). */
export const ORIGINAL_FAQS = [
  ...HOME_FAQ_ITEMS.map((f, i) => ({
    question: f.question.replace(/^\d+\.\s*/, ""),
    answer: f.answer,
    category: "general" as const,
    status: "published" as const,
    order: i + 1,
    relatedPage: ["home", "about"] as const,
    featured: i === HOME_FAQ_ITEMS.length - 1,
  })),
  ...PMP_CONTENT.faqItems.slice(0, 5).map((f, i) => ({
    question: f.question.replace(/^\d+\.\s*/, ""),
    answer: f.answer,
    category: "pmp" as const,
    status: "published" as const,
    order: 100 + i,
    relatedPage: ["pmp", "training"] as const,
    featured: false,
  })),
  ...CONSULTING_CONTENT.faqItems.map((f, i) => ({
    question: f.question,
    answer: f.answer,
    category: "consulting" as const,
    status: "published" as const,
    order: 200 + i,
    relatedPage: ["consulting"] as const,
    featured: false,
  })),
  ...globalFaqs.training.map((f, i) => ({
    question: f.question,
    answer: f.answer,
    category: "training" as const,
    status: "published" as const,
    order: 300 + i,
    relatedPage: ["training"] as const,
    featured: false,
  })),
];

/** Navigation menus aligned with Site Settings (original header/footer links). */
export const ORIGINAL_MENUS = [
  {
    name: "Main Navigation",
    location: "header-primary",
    isActive: true,
    items: SITE_SETTINGS_CONTENT.navCategories.map((cat) => ({
      label: cat.title,
      type: "dropdown" as const,
      url: cat.href,
      children: cat.items.map((item) => ({
        label: item.name,
        url: item.href,
        description: item.desc,
      })),
    })),
  },
  {
    name: "Footer Services",
    location: "footer-1",
    isActive: true,
    items: SITE_SETTINGS_CONTENT.footerOurServices.map((link) => ({
      label: link.label,
      url: link.href,
      type: "link" as const,
    })),
  },
  {
    name: "Footer Training",
    location: "footer-2",
    isActive: true,
    items: SITE_SETTINGS_CONTENT.footerTraining.map((link) => ({
      label: link.label,
      url: link.href,
      type: "link" as const,
    })),
  },
  {
    name: "Footer Resources",
    location: "footer-3",
    isActive: true,
    items: SITE_SETTINGS_CONTENT.footerResources.map((link) => ({
      label: link.label,
      url: link.href,
      type: "link" as const,
    })),
  },
];

/** Contact form fields matching the live ContactForm component options. */
export const ORIGINAL_FORMS = [
  {
    title: "Contact Form",
    slug: "contact-form",
    status: "active",
    fields: [
      { fieldType: "text", name: "name", label: "Full Name", required: true, placeholder: "Your name" },
      { fieldType: "email", name: "email", label: "Email Address", required: true, placeholder: "your@email.com" },
      { fieldType: "tel", name: "phone", label: "Phone Number", required: false, placeholder: "+64 27 353 7774" },
      {
        fieldType: "select",
        name: "subject",
        label: "Subject",
        required: true,
        options: [
          { label: "General Enquiry", value: "general" },
          { label: "PMP Training", value: "pmp" },
          { label: "CAPM Training", value: "capm" },
          { label: "PMI-CP Training", value: "pmi-cp" },
          { label: "Consulting Services", value: "consulting" },
          { label: "Cost Estimation", value: "cost-estimation" },
          { label: "Corporate Training", value: "corporate" },
          { label: "Partnership", value: "partnership" },
        ],
      },
      { fieldType: "textarea", name: "message", label: "Message", required: true, placeholder: "How can we help you?" },
    ],
    sendEmail: true,
    emailSubject: "New Contact Form Submission — TheAgileNest",
    confirmationType: "message",
    confirmationMessage: "Thank you for contacting TheAgileNest. We'll get back to you within 24 hours.",
    submitButtonText: "Send Message",
    submitButtonColor: "#0B3C5D",
    formWidth: "medium",
    labelPosition: "top",
    enableHoneypot: true,
    rateLimitPerHour: 10,
  },
  {
    title: "Course Enquiry Form",
    slug: "course-enquiry",
    status: "active",
    fields: [
      { fieldType: "text", name: "name", label: "Full Name", required: true },
      { fieldType: "email", name: "email", label: "Email", required: true },
      { fieldType: "tel", name: "phone", label: "Phone", required: true },
      {
        fieldType: "select",
        name: "course",
        label: "Select Course",
        required: true,
        options: [
          { label: "PMP® Certification", value: "pmp" },
          { label: "CAPM® Certification", value: "capm" },
          { label: "PMI-CP® Construction", value: "pmi-cp" },
          { label: "Corporate / Custom Training", value: "corporate" },
        ],
      },
      { fieldType: "textarea", name: "message", label: "Your enquiry", required: false, placeholder: "Tell us about your goals or preferred schedule." },
    ],
    sendEmail: true,
    emailSubject: "New Course Enquiry — TheAgileNest",
    confirmationType: "message",
    confirmationMessage: "Thank you. Our training team will contact you with current schedules and fees.",
    submitButtonText: "Submit Enquiry",
    submitButtonColor: "#D4A03E",
    formWidth: "medium",
    enableHoneypot: true,
    rateLimitPerHour: 10,
  },
];
