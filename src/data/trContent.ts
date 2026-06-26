import { globalFaqs } from "@/lib/faqData";

/**
 * Single source of truth for the Training page's default content (incl. the
 * monthly schedule). Imported by the page (fallbacks) and the seed route.
 */
export const TR_CONTENT = {
  heroTitle: "Professional Training",
  heroDescription:
    "Equipping organisations and individuals with the skills to achieve project outcomes, through bespoke, public or global certification training.",
  heroBreadcrumb: "Our Services",

  introEyebrow: "Knowledge is Power",
  introHeadingLine1: "Build Your Team's",
  introHeadingLine2: "Project Capability",
  introParagraph:
    "At TheAgileNest, we’re passionate about projects. We provide the full range of project services and training to increase your team’s skills and capabilities to help you achieve your business outcomes.",

  categories: [
    {
      title: "Course Catalogue",
      desc: "Comprehensive project management courses available across New Zealand and Australia, tailored for local market needs.",
      links: [
        { text: "NZ Course Catalogue", href: "/training#schedule" },
        { text: "Australia Course Catalogue", href: "/training#schedule" },
      ],
    },
    {
      title: "PMI Certification",
      desc: "The gold standard in project credentials. Full preparation for PMP®, CAPM®, and industry-specific certifications.",
      links: [
        { text: "PMP® Prep", href: "/pmp" },
        { text: "CAPM® Entry", href: "/capm" },
        { text: "PMI-CP® Construction", href: "/pmicp" },
      ],
    },
    {
      title: "Professional Development",
      desc: "Advance your career with targeted skills in leadership, risk management, and strategic project delivery.",
      links: [
        { text: "Leadership Workshops", href: "/training#bespoke" },
        { text: "Risk Management", href: "/training#bespoke" },
        { text: "TheAgileNest Methodologies", href: "/about" },
      ],
    },
  ],

  bespokeHeading: "Bespoke Solutions for Your Unique Needs",
  bespokeParagraph: "We don't just teach theory. We help create calm across your projects by creating the momentum you need to move your organisation forward.",
  bespokeServices: [
    { title: "Custom Training", desc: "Training designed around your specific corporate methodologies." },
    { title: "Coaching & Mentoring", desc: "1-on-1 and group support for project leaders and teams." },
    { title: "Global Delivery", desc: "Seamless training delivery across multiple timezones and regions." },
  ],
  bespokeBadgeTitle: "Global Training",
  bespokeBadgeText: "Delivered to teams in 15+ countries.",

  resources: [
    { title: "Testimonials", desc: "What our students and corporate partners are saying." },
    { title: "Case Studies", desc: "Explore how our training transformed organisations." },
    { title: "Resources", desc: "Free guides, whitepapers, and PM tools." },
  ],

  scheduleEyebrow: "Upcoming Batches",
  scheduleHeading: "Monthly Training Schedule",
  scheduleParagraph:
    "Secure your spot in our upcoming certification cohorts. Our live virtual weekends are designed for working professionals to balance career growth with existing commitments.",
  scheduleItems: [
    { month: "June 2026", course: "PMP® Certification Bootcamp", dates: "June 13, 14, 20, 21", time: "9:00 AM - 5:00 PM (NZST)", format: "Live Virtual", status: "Filling Fast" },
    { month: "June 2026", course: "CAPM® Foundation Course", dates: "June 27, 28", time: "9:00 AM - 5:00 PM (NZST)", format: "Live Virtual", status: "Open" },
    { month: "July 2026", course: "PMP® Certification Bootcamp", dates: "July 11, 12, 18, 19", time: "9:00 AM - 5:00 PM (NZST)", format: "Live Virtual", status: "Open" },
    { month: "July 2026", course: "PMI-CP® Certification Bootcamp", dates: "July 25, 26", time: "9:00 AM - 5:00 PM (NZST)", format: "Live Virtual", status: "Open" },
  ],

  faqTitle: "Training FAQs",
  faqSubtitle: "Certification Journey",
  faqDescription: "Everything you need to know about our training programs, schedules, and certification preparation.",
  faqItems: globalFaqs.training,
};
