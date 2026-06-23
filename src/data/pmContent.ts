/**
 * Single source of truth for the Project Management page's default content.
 * Imported by BOTH the page (as fallbacks) and the seed route, so the seeded
 * CMS content can never drift from what the page renders by default.
 */
export const PM_CONTENT = {
  heroTitle: "Project Management for Construction Project",
  heroDescription:
    "We offer end-to-end project management, turning ideas into outcomes. From planning and feasibility to procurement, construction, handover, and closeout, we provide structure, clarity, and control.",
  heroBreadcrumb: "Our Services",

  helpEyebrow: "How we can help",
  helpHeadingLine1: "Project Management for",
  helpHeadingLine2: "Construction Project",
  helpIntro:
    "We offer end-to-end project management, turning ideas into outcomes. From planning and feasibility to procurement, construction, handover, and closeout, we provide structure, clarity, and control.",
  helpLeftPara1:
    "Our team works closely with clients, consultants, contractors, and stakeholders to manage scope, programme, cost, risk, quality, and governance across the project lifecycle. By combining strategic oversight and practical delivery, we ensure efficient project completion aligned with business goals.",
  helpLeftPara2:
    "For construction, infrastructure, transformation, or operational projects, we tailor our approach to each project's scale and complexity. Our focus: reduce risk, aid decisions, control costs, and deliver results.",
  helpButtonText: "Enquire Now",
  sectorTitle: "Sector Expertise",
  sectorText: "Delivering projects on time, within budget, and built for long-term success.",

  gridHeading: "Our project management services",
  gridSubtitle: "Helping clients through the delivery of:",
  subServices: [
    { title: "Project Planning & Feasibility", desc: "Projects succeed with clear planning, sound assumptions, and early decisions. We help shape projects from concept to feasibility by testing options, defining scope, setting budgets, and making delivery strategies realistic.", bullets: ["Project scoping and objectives definition", "Feasibility studies and option analysis", "Budget development and cost planning", "Site due diligence reviews", "Delivery strategy development", "Business case preparation", "Early risk identification", "Programme and milestone planning"] },
    { title: "Design & Pre-Construction Management", desc: "Effective design and pre-construction coordination reduce delays, prevent redesign, and improve buildability. We coordinate consultants, approvals, budgets, and programmes to prepare projects for construction.", bullets: ["Consultant team coordination", "Design programme management", "Value engineering workshops", "Buildability reviews", "Resource and procurement planning", "Authority consent coordination", "Scope alignment and design control", "Pre-construction readiness planning"] },
    { title: "Procurement & Tender Management", desc: "Selecting the right contractors and suppliers is key. We manage procurement to create competition, lower risk, and secure value.", bullets: ["Procurement strategy development", "Contractor prequalification", "Tender documentation preparation", "Bid management and clarifications", "Tender evaluation and scoring", "Supplier selection", "Contract negotiations", "Award recommendations"] },
    { title: "Construction Delivery Management", desc: "During construction, strong leadership and control are essential to achieving time, cost, quality, and safety objectives. We provide hands-on project management support throughout delivery to keep work progressing efficiently.", bullets: ["Principal’s representative services", "Contractor coordination", "Site progress monitoring", "Quality oversight", "Programme tracking", "Issue and change management", "Performance reporting", "Delivery assurance reviews"] },
    { title: "Cost Control & Commercial Management", desc: "We protect project budgets with active management from start to finish. Our accurate cost tracking and oversight let clients stay confident and in control.", bullets: ["Budget tracking and reporting", "Variations management", "Payment claim assessments", "Forecast final cost reporting", "Cashflow planning and monitoring", "Claims management", "Contract administration support", "Final account negotiations"] },
    { title: "Programme & Schedule Control", desc: "Time certainty is critical. Our controls team sets realistic programmes and tracks milestones to meet timelines. We spot delays early, analyse impacts, and apply recovery plans to safeguard project timelines.", bullets: ["Master programme development", "Baseline schedule setup", "Progress monitoring", "Critical path analysis", "Delay impact assessments", "Recovery planning", "Milestone reporting", "Executive dashboard reporting"] },
    { title: "Risk Management", desc: "Risk management protects project outcomes, budgets, and certainty. Our team covers cost, programme, commercial, operational, and delivery risks across the lifecycle.", bullets: ["Risk identification workshops", "Risk registers", "Qualitative and quantitative assessments", "Contingency modelling", "Mitigation planning", "Risk ownership allocation", "Contract risk reviews", "Ongoing risk monitoring"] },
    { title: "Stakeholder & Governance Management", desc: "Good governance and strong communication support fast decisions and effective project leadership. We set frameworks that give clients confidence and control.", bullets: ["Client reporting frameworks", "Steering committee packs", "Governance meeting management", "Stakeholder communication plans", "Council/authority liaison", "Decision tracking", "Executive dashboards", "Project assurance reviews"] },
    { title: "Handover & Closeout", desc: "The final delivery stage secures project value. We manage handover and closeout to ensure assets are operational, defects are resolved, and contracts are wrapped up efficiently.", bullets: ["Defects management", "Commissioning coordination", "Practical completion management", "O&M manuals coordination", "Final accounts closeout", "Contract completion reviews", "Lessons learned workshops", "Operational readiness support"] },
  ],

  consEyebrow: "Consultancy Services",
  consHeadingLine1: "Practical &",
  consHeadingLine2: "Outcome-Focused Advice",
  consPara1:
    "We deliver practical consultancy services that help organisations overcome challenges, boost performance, and achieve measurable results. Drawing on real-world commercial experience and strategic thinking, we guide clients through project delivery, construction, governance, operations, and business transformation.",
  consPara2:
    "We tailor our practical, outcome-focused advice to each organisation’s goals. We partner with clients to seize opportunities, mitigate risks, strengthen systems, and generate sustainable outcomes that drive long-term value.",
  consCards: [
    { title: "Project Management Consultancy", desc: "We help improve project delivery with planning, governance, controls, reporting, and leadership from start to finish." },
    { title: "Construction Consultancy", desc: "Expert advice across construction projects, including contract administration, budgeting, procurement, programme management, delays, claims, and delivery strategy. We help clients reduce risk and improve project outcomes." },
    { title: "Digital / AI Advisory", desc: "We modernise operations with AI tools, automation, dashboards, and digital reporting systems." },
    { title: "Contract Administration", desc: "We manage contracts, obligations, variations, payments, compliance, and correspondence to protect performance." },
  ],

  faqEyebrow: "PROJECT MANAGEMENT FAQ",
  faqHeadingLine1: "Got Questions? ",
  faqHeadingLine2: "We've Got Answers",
  faqItems: [
    { question: "1. What is project management?", answer: "Project management is the structured process of planning, coordinating, controlling, and delivering projects successfully within scope, time, cost, and quality targets." },
    { question: "2. What project management services does The Agile Nest provide?", answer: "We provide planning, scheduling, governance, reporting, PMO support, stakeholder management, project controls, and delivery assurance." },
    { question: "3. Why is project management important?", answer: "It helps organisations reduce delays, control budgets, manage risks, improve communication, and achieve better outcomes." },
    { question: "4. Can you help with delayed or struggling projects?", answer: "Yes. We help recover underperforming projects through planning reviews, stronger controls, governance, and practical recovery strategies." },
    { question: "5. Do you provide PMO support?", answer: "Yes. We help organisations establish PMO systems, governance frameworks, reporting processes, and portfolio visibility." },
    { question: "6. Do you support construction and infrastructure projects?", answer: "Yes. We work across construction, infrastructure, telecom, commercial, and transformation sectors." },
    { question: "7. Why choose The Agile Nest for project management?", answer: "We combine real-world experience, practical delivery expertise, and measurable results." },
  ],

  ctaHeading: "Create the momentum you need to move forward",
  ctaParagraph: "Contact us to see how we can help your organisation; we’d love to hear from you.",
  ctaButtonText: "Get In Touch",
};
