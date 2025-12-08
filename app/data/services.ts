import { neighborhoods } from "./neighborhoods";

const citiesList = Array.from(new Set(neighborhoods.map((n) => n.city))).join(
  ", "
);

export interface Service {
  id: string;
  title: string;
  header?: string;
  description: string;
  bullets?: string[];
  details?: string;
  relevant?: string[]; // related service IDs
  location?: Record<string, string>; // per-city custom copy
  micro?: string; // 5-6 word micro description
}
export type Services = Service[];

export const services: Services = [
  {
    id: "website-design",
    title: "Website Design",
    header: "Beautiful Websites That Convert",
    description: `We create beautiful, functional websites that drive results. Our design process focuses on user experience, conversion optimization, and brand consistency across all touchpoints. From simple landing pages to complex e-commerce solutions, we deliver designs that make an impact. Serving: ${citiesList}.`,
    micro: "Modern, fast websites that convert",
    bullets: [
      "User-centered design with accessibility",
      "Responsive layouts for all devices",
      "Conversion-focused page structures",
      "Component-based UI systems",
      "Brand-consistent visuals and typography",
    ],
    details:
      "Our design practice emphasizes research-driven decisions, rapid prototyping, and iterative feedback loops. We tailor information architecture, visual hierarchy, and micro-interactions to business goals, ensuring clarity, speed, and measurable outcomes.",
    relevant: ["seo", "development", "branding", "digital-marketing"],
    location: {
      Scranton:
        "Scranton customers value clarity and speed. We design fast pages with clean messaging and neighborhood context that lead visitors to call, book, or buy.",
      Dunmore:
        "In Dunmore, simple paths win. We craft mobile-first layouts with clear actions so nearby customers can reach you quickly and confidently.",
      Carbondale:
        "Carbondale businesses need straightforward sites that explain services well. We prioritize readable content, trust signals, and easy contact from any device.",
      "Pocono Mountains":
        "Tourism sites in the Poconos rely on strong visuals and booking clarity. We build galleries, itineraries, and streamlined flows that turn research into reservations.",
      Philadelphia:
        "Philadelphia audiences expect polish and performance. We deliver accessible, well-structured pages with strong brand systems that stand out in competitive searches.",
      Pittsburgh:
        "Pittsburgh visitors look for fast answers. We emphasize scannable sections, performance budgets, and consistent components for long-term maintainability.",
      "Clarks Summit":
        "For the Abingtons, convenience and trust matter. We design clear service pages, insurance or pricing notes, and frictionless scheduling.",
      "Wilkes-Barre":
        "Luzerne County users compare options quickly. We build pages that highlight value, social proof, and direct actions to convert attention into visits.",
    },
  },
  {
    id: "development",
    title: "Development",
    header: "Fast, Reliable Web Development",
    description: `Our development team builds robust, scalable solutions using modern technologies. We specialize in responsive websites, custom applications, and content management systems that are easy to maintain and update. We focus on performance, security, and code quality. Serving: ${citiesList}.`,
    micro: "Reliable, scalable web development services",
    bullets: [
      "Scalable architectures and APIs",
      "Type-safe code and testing",
      "Performance optimizations",
      "Secure authentication and authorization",
      "CMS integrations and migrations",
    ],
    details:
      "We use modern stacks (TypeScript, Nuxt/Vue, Node) and proven patterns (clean architecture, CI/CD) to deliver maintainable, testable codebases. We prioritize observability, accessibility, and long-term sustainability.",
    relevant: ["website-design", "nuxt-web-app", "seo", "software-development"],
    location: {
      Scranton:
        "Scranton projects benefit from reliable performance and simple maintenance. We ship type-safe code, clear APIs, and caching that keeps sites fast under load.",
      Dunmore:
        "In Dunmore, small teams need pragmatic builds. We focus on stable deployments, clean CMS integrations, and easy content updates.",
      Carbondale:
        "Carbondale businesses value durability. We implement secure auth, tested components, and predictable releases that minimize downtime.",
      "Pocono Mountains":
        "Tourism traffic spikes demand resilient apps. We add guardrails—SSR/ISR, edge caching, and monitoring—so pages stay quick on busy weekends.",
      Philadelphia:
        "Competitive markets require disciplined engineering. We enforce performance budgets, CI/CD, and observability for confident iteration at pace.",
      Pittsburgh:
        "Pittsburgh companies need dependable systems. We deliver readable architectures with tests and metrics so teams can evolve features safely.",
      "Clarks Summit":
        "Local practices and shops want stability. We build maintainable sites with backups and analytics to track growth without surprises.",
      "Wilkes-Barre":
        "We optimize for everyday reliability. Strong caching, secure patterns, and clean deployments keep Luzerne County sites running smoothly.",
    },
  },
  {
    id: "digital-marketing",
    title: "Marketing",
    header: "Get Your Business Found",
    description: `Drive traffic and generate leads with our comprehensive digital marketing services. We create data-driven strategies that include SEO, content marketing, social media, and paid advertising to help you reach your target audience and achieve measurable results. Serving: ${citiesList}.`,
    micro: "SEO, content, ads that grow",
    bullets: [
      "SEO + content strategy",
      "Social media campaigns",
      "Paid ads setup and optimization",
      "Analytics and reporting",
      "Lead-gen funnels",
    ],
    details:
      "Our approach combines research, experimentation, and rigorous measurement. We build editorial calendars, landing pages, and campaigns that convert—then iterate based on real signals, not guesses.",
    relevant: ["seo", "website-design", "e-commerce", "consulting"],
    location: {
      Scranton:
        "Scranton audiences respond to clear offers and proof. We build funnels with local content, reviews, and CTAs that turn clicks into leads.",
      Dunmore:
        "In Dunmore, proximity and trust drive action. We lean on maps, consistent NAP, and social posts that highlight community ties.",
      Carbondale:
        "Upper Valley reach requires steady content. We ship helpful articles and landing pages aligned to common searches and services.",
      "Pocono Mountains":
        "Tourism brands gain with seasonal storytelling. We plan campaigns around events, guides, and promotions that sustain interest year-round.",
      Philadelphia:
        "In Philly, competition is fierce. We differentiate with positioning, structured content, and measurement that proves what works.",
      Pittsburgh:
        "Pittsburgh buyers value clarity. We refine messaging, tighten ad targets, and track outcomes with dashboards that inform decisions.",
      "Clarks Summit":
        "Local families pick what’s easy and trusted. We emphasize directions, hours, booking links, and reviews that remove friction.",
      "Wilkes-Barre":
        "We focus on everyday demand. Service pages and helpful FAQs earn organic traffic while paid campaigns amplify peak periods.",
    },
  },
  {
    id: "ai",
    title: "AI & Automation",
    header: "Automate Work With AI",
    description: `Leverage the power of artificial intelligence to streamline your business operations. From chatbots and automated customer service to data analysis and predictive modeling, we implement AI solutions that save time, reduce costs, and improve decision-making. Serving: ${citiesList}.`,
    micro: "Automate workflows with trusted AI",
    bullets: [
      "Chatbots and assistants",
      "Workflow automation",
      "Data extraction and enrichment",
      "Predictive analytics",
      "Process optimization",
    ],
    details:
      "We identify high-leverage automation opportunities, integrate reliable models and tooling, and ensure controls are in place for accuracy, privacy, and governance.",
    relevant: [
      "development",
      "software-development",
      "e-commerce",
      "consulting",
    ],
    location: {
      Scranton:
        "Automation saves time for lean Scranton teams. We streamline intake, support, and reporting so staff can focus on higher-value work.",
      Dunmore:
        "In Dunmore, simple workflows matter. We add assistants and data tasks that reduce busywork without changing core tools.",
      Carbondale:
        "Carbondale shops benefit from faster responses. We implement chat, lead triage, and reminders to improve day-to-day operations.",
      "Pocono Mountains":
        "Tourism operations handle bursts of demand. We automate guest messaging, FAQs, and scheduling to keep service consistent.",
      Philadelphia:
        "Philly teams need reliable automation at scale. We design guardrails, audit trails, and metrics so automations stay accurate over time.",
      Pittsburgh:
        "Pittsburgh firms value dependable processes. We integrate AI where it lifts throughput and reduce manual errors across workflows.",
      "Clarks Summit":
        "Local practices gain from simple, safe automation. We add appointment workflows and follow-ups that fit existing systems.",
      "Wilkes-Barre":
        "We target repetitive tasks first. Smart intake and documentation help Luzerne County businesses serve more customers, faster.",
    },
  },
  {
    id: "branding",
    title: "Brand Identity",
    header: "A Brand People Remember",
    description: `We help you create a strong and memorable brand identity. From logo design to brand guidelines, we ensure your brand stands out and resonates with your target audience. Serving: ${citiesList}.`,
    micro: "Memorable, consistent brand identity systems",
    bullets: [
      "Logo and mark systems",
      "Color, type, and voice",
      "Brand guidelines",
      "Asset kits and templates",
      "Collateral and packaging",
    ],
    details:
      "From discovery to delivery, we translate brand values into coherent systems—visual, verbal, and experiential—so every touchpoint is consistent and compelling.",
    relevant: ["website-design", "digital-marketing", "seo"],
    location: {
      Scranton:
        "Scranton brands stand out with simple, memorable systems. We craft marks, type, and voice that feel authentic and clear across channels.",
      Dunmore:
        "In Dunmore, familiarity builds trust. We design approachable identities and templates that make everyday communication easy.",
      Carbondale:
        "Heritage and renewal shape Carbondale. We balance tradition with modern clarity so your brand looks current without losing roots.",
      "Pocono Mountains":
        "Tourism brands need consistent visuals. We define image styles, copy tone, and kits that scale across listings, maps, and social.",
      Philadelphia:
        "Philly audiences notice detail. We systematize color, type, and components to maintain polish from site to signage.",
      Pittsburgh:
        "Pittsburgh buyers appreciate straightforward messaging. We align positioning and design so your value is obvious at a glance.",
      "Clarks Summit":
        "Local service brands thrive on clarity. We create friendly, legible systems that make calling or booking feel natural.",
      "Wilkes-Barre":
        "Consistency wins comparisons. We deliver identity kits and patterns so your brand looks strong wherever customers find you.",
    },
  },
  {
    id: "consulting",
    title: "Consulting",
    header: "Expert Guidance, Clear Strategy",
    description: `Our experts provide strategic consulting to help you navigate challenges and seize opportunities. We offer insights and solutions tailored to your business needs. Serving: ${citiesList}.`,
    micro: "Clear strategy and expert guidance",
    bullets: [
      "Product and roadmap planning",
      "Tech stack evaluations",
      "Process audits",
      "Growth strategy",
      "Training and enablement",
    ],
    details:
      "We work with stakeholders to clarify goals, identify constraints, and prioritize actions—then help execute with focus and discipline.",
    relevant: ["seo", "digital-marketing", "development", "branding"],
    location: {
      Scranton:
        "We align Scranton teams around practical roadmaps. Clear goals, constraints, and sequencing move projects forward without surprises.",
      Dunmore:
        "In Dunmore, small businesses benefit from focused planning. We cut scope to essentials and implement changes that deliver value fast.",
      Carbondale:
        "Carbondale leaders want calm execution. We prioritize, schedule, and track improvements so momentum stays steady.",
      "Pocono Mountains":
        "Tourism operations need seasonal strategy. We plan content, booking flows, and measurement that adapt to peaks and shoulder seasons.",
      Philadelphia:
        "Complex markets require disciplined decisions. We introduce frameworks and dashboards that make tradeoffs clear and measurable.",
      Pittsburgh:
        "Pittsburgh teams value reliable guidance. We coach on processes and tooling that keep work predictable and efficient.",
      "Clarks Summit":
        "Local practices benefit from simple systems. We standardize workflows and train teams to reduce errors and delays.",
      "Wilkes-Barre":
        "We focus on steps that matter. Lightweight plans and checklists help Luzerne County businesses deliver consistently.",
    },
  },
  {
    id: "e-commerce",
    title: "E-Commerce",
    header: "Ecommerce Sites That Sell",
    description: `We build powerful e-commerce platforms that enhance user experience and drive sales. From product catalogs to secure payment gateways, we deliver solutions tailored to your business. Serving: ${citiesList}.`,
    micro: "Ecommerce storefronts that sell more",
    bullets: [
      "Storefront UX and IA",
      "Catalog and search",
      "Checkout and payments",
      "Subscriptions and taxes",
      "Integrations (ERP/CRM)",
    ],
    details:
      "We optimize the full funnel—from discovery to checkout—balancing speed, reliability, and trust to increase conversion and lifetime value.",
    relevant: ["seo", "digital-marketing", "ai", "development"],
    location: {
      Scranton:
        "Scranton stores win with fast product pages and clear policies. We improve search, filters, and checkout flows for fewer drop-offs.",
      Dunmore:
        "In Dunmore, convenience is key. We simplify carts, shipping choices, and mobile payments to speed purchases.",
      Carbondale:
        "Carbondale shops benefit from helpful content. We add sizing, FAQs, and reviews that build confidence and reduce returns.",
      "Pocono Mountains":
        "Tourism products have seasonal spikes. We prepare catalogs and promotions with caching and analytics to handle busy periods.",
      Philadelphia:
        "Philly buyers expect polish. We tune Core Web Vitals, accessibility, and trust elements so stores feel professional.",
      Pittsburgh:
        "Pittsburgh customers value straight answers. We streamline discovery and checkout while maintaining reliability and speed.",
      "Clarks Summit":
        "Local shops need clear pickup and delivery info. We optimize pages and notifications so orders feel easy.",
      "Wilkes-Barre":
        "We remove friction in the funnel. Strong search, simple checkout, and transparent shipping lift conversions in Luzerne County.",
    },
  },
  {
    id: "seo",
    title: "SEO",
    header: "Rank Higher. Get More Leads.",
    description: `Optimize your website to rank higher in search engine results. Our SEO services include keyword research, on-page optimization, and link building to improve visibility and drive organic traffic. Serving: ${citiesList}.`,
    micro: "Rank higher, get qualified leads",
    bullets: [
      "Keyword + intent research",
      "On-page technical fixes",
      "Content optimization",
      "Internal linking + schema",
      "Authority and backlinks",
    ],
    details:
      "We fix technical issues, craft content that answers intent, and build authority with ethical, durable link strategies—then track and report real gains.",
    relevant: [
      "website-design",
      "digital-marketing",
      "e-commerce",
      "consulting",
    ],
    location: {
      Scranton:
        "Local competitors in Scranton move fast, so clear technical foundations and content that answers intent matter. We prioritize site speed, crawlability, and neighborhood-focused pages that convert.",
      Dunmore:
        "In Dunmore, nearby searches and reviews drive discovery. We optimize maps, service pages, and structured data so neighbors can find, trust, and contact you quickly.",
      Carbondale:
        "Carbondale businesses benefit from steady organic reach across the Upper Valley. We build targeted service content and tighten on-page signals to capture everyday searches.",
      "Pocono Mountains":
        "Tourism cycles in the Poconos require reliable off-season visibility. We strengthen booking paths, seasonal content, and local intent pages for towns across the region.",
      Philadelphia:
        "Philadelphia’s competitive market rewards fast, structured sites. We align keywords to neighborhoods and services, enforce schema, and improve Core Web Vitals for ranking.",
      Pittsburgh:
        "Pittsburgh audiences expect speed and clarity. We fix technical blockers, structure content by service and area, and earn authority with durable, relevant links.",
      "Clarks Summit":
        "Families in the Abingtons look for convenience and trust. We optimize local listings, reviews, and service pages so customers can book or call without friction.",
      "Wilkes-Barre":
        "In Luzerne County, customers compare options before visiting. We sharpen positioning, improve maps and NAP signals, and build helpful content that ranks and converts.",
    },
  },
  {
    id: "nuxt-web-app",
    title: "Nuxt Web App Development",
    header: "High-Performance Nuxt Apps",
    description: `We specialize in building high-performance web applications using Nuxt.js. Our solutions are scalable, fast, and tailored to meet your business needs. Serving: ${citiesList}.`,
    micro: "High‑performance Nuxt web app development",
    bullets: [
      "SSR/ISR + caching",
      "Performance budgets",
      "Composable architectures",
      "API integrations",
      "Testing and CI/CD",
    ],
    details:
      "We architect resilient frontends with great DX, strong performance, and maintainability—integrated cleanly with your backend and workflows.",
    relevant: ["development", "software-development", "seo"],
    location: {
      Scranton:
        "Scranton teams gain from fast Nuxt apps. We use SSR/ISR and caching to keep experiences quick and stable.",
      Dunmore:
        "In Dunmore, simplicity matters. We build composable frontends that are easy to extend without complexity.",
      Carbondale:
        "Carbondale projects need dependable tooling. We add tests, CI, and observability so changes are safe and visible.",
      "Pocono Mountains":
        "Tourism apps must handle bursts. We design for peaks with edge caching and pragmatic performance budgets.",
      Philadelphia:
        "Philly apps require discipline. We enforce patterns and guardrails so teams can ship quickly with confidence.",
      Pittsburgh:
        "Pittsburgh firms value maintainable code. We structure components and data flows for longevity and clarity.",
      "Clarks Summit":
        "Local services benefit from snappy frontends. We prioritize core interactions and accessible patterns.",
      "Wilkes-Barre":
        "We keep apps fast and reliable. Monitoring and caching ensure consistent UX across Luzerne County.",
    },
  },
  {
    id: "software-development",
    title: "Software Development",
    header: "From Idea To Production",
    description: `We provide end-to-end software development services, creating custom solutions tailored to your business needs. From initial concept to deployment, we ensure quality, scalability, and performance. Serving: ${citiesList}.`,
    micro: "Custom software from idea to production",
    bullets: [
      "Discovery and requirements",
      "Architecture and design",
      "Implementation and QA",
      "DevOps and releases",
      "Monitoring and support",
    ],
    details:
      "From idea to production, we deliver reliable systems with strong engineering practices—so they’re easy to evolve and scale.",
    relevant: ["development", "nuxt-web-app", "ai"],
    location: {
      Scranton:
        "Scranton companies need practical builds. We deliver clear architectures, tests, and releases that keep teams moving.",
      Dunmore:
        "In Dunmore, steady progress matters. We plan small iterations and ship features with guardrails.",
      Carbondale:
        "Carbondale projects benefit from predictable cadence. We track work and results so improvements are visible.",
      "Pocono Mountains":
        "Seasonal businesses need resilient systems. We prepare features and infrastructure for peaks without sacrificing speed.",
      Philadelphia:
        "Philly firms expect strong engineering. We align requirements, quality, and performance to support growth.",
      Pittsburgh:
        "Pittsburgh teams value clarity. We document decisions and automate checks for dependable delivery.",
      "Clarks Summit":
        "Local shops want reliable software. We keep scopes focused and systems simple to maintain.",
      "Wilkes-Barre":
        "We favor durable solutions. Tested code and clean deployments support Luzerne County businesses long-term.",
    },
  },
];

// Returns services with location-customized descriptions.
// Does not mutate the base `services` export.
export function servicesForLocation(location: string): Services {
  const loc = (location || "").trim();
  if (!loc) return services.map((s) => ({ ...s }));

  return services.map((s) => {
    const base = { ...s };
    const desc = base.description;

    // If there is per-city custom copy, inject it after the first sentence
    const cityCopy = s.location?.[loc];
    if (cityCopy) {
      const firstPeriodIdx = desc.indexOf(".");
      if (firstPeriodIdx !== -1) {
        const first = desc.slice(0, firstPeriodIdx + 1);
        const rest = desc.slice(firstPeriodIdx + 1).trimStart();
        base.description = `${first} ${cityCopy} ${rest}`;
      } else {
        base.description = `${desc} ${cityCopy}`;
      }
      return base;
    }

    // Per-service phrasing where it reads best
    if (s.id === "website-design") {
      // Replace the first clause "drive results." with location-specific wording
      const replaced = desc.replace(
        /drive results\./,
        `drive results for ${loc} small businesses.`
      );
      base.description = replaced;
      return base;
    }

    // Generic injection after the first sentence
    const firstPeriodIdx = desc.indexOf(".");
    if (firstPeriodIdx !== -1) {
      const first = desc.slice(0, firstPeriodIdx + 1);
      const rest = desc.slice(firstPeriodIdx + 1).trimStart();
      base.description = `${first} We tailor our work for ${loc} small businesses. ${rest}`;
    } else {
      base.description = `${desc} We tailor our work for ${loc} small businesses.`;
    }
    return base;
  });
}
