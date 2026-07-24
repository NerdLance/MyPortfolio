import {
  contactLinks as sharedContactLinks,
  projects as sharedProjects,
} from "./laracon";

const projectBySlug = (slug) =>
  sharedProjects.find((project) => project.slug === slug);

export const metadata = {
  title: "Lance Madden | Software Engineer & Product Builder",
  description:
    "Backend-focused software engineer building Laravel and Node.js systems, Flutter applications, AI-powered SaaS, and production products including TripFern and Transcribe.plus.",
    canonicalUrl: "https://lancemadden.com/",
  socialImage: "https://lancemadden.com/next-social-image.jpg",
  socialImageAlt:
    "Lance Madden, software engineer and product builder, with a raining-pixels motif",
  socialImageWidth: "1200",
  socialImageHeight: "630",
    robots: "index,follow",
  themeColor: "#08111f",
};

export const contactLinks = {
  ...sharedContactLinks,
};

export const navigation = [
  { label: "Work", href: "#work" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export const proofPoints = [
  {
    value: "15+ years",
    label: "Building software",
  },
  {
    value: "Published",
    label: "iOS application",
  },
  {
    value: "Production AI",
    label: "SaaS with long-term customers",
  },
  {
    value: "Full lifecycle",
    label: "Architecture through deployment",
  },
];

const tripFern = projectBySlug("tripfern");
const transcribePlus = projectBySlug("transcribe-plus");
const skillBound = projectBySlug("skillbound");
const bitMinky = projectBySlug("bitminky");

export const featuredProducts = [
  {
    ...tripFern,
    eyebrow: "Mobile product · Founder & builder",
    headline: "Travel memories, built to last.",
    description:
      "A collaborative travel and memory-sharing platform spanning Flutter mobile development, Node.js and Express APIs, web administration, cloud storage, mapping, AI features, subscriptions, and App Store deployment.",
    highlights: [
      "Published on the iOS App Store with thousands of memories uploaded",
      "Native purchases, subscriptions, administration, and a complete code-to-shipped lifecycle",
    ],
    technologies: [
      "Flutter",
      "Node.js",
      "Express",
      "AWS",
      "Mapbox",
      "RevenueCat",
      "OpenAI",
    ],
    visualLabel: "Available on iOS · Android planned",
    layout: "image-left",
  },
  {
    ...transcribePlus,
    eyebrow: "AI SaaS · Founder & builder",
    headline: "Speech to text, without the subscription trap.",
    description:
      "An AI-powered speech-to-text SaaS built specifically for court transcriptionists, with secure file processing and straightforward pay-as-you-go billing.",
    highlights: [
      "Thousands of hours transcribed through production file-processing workflows",
      "Long-term customers active since launch with usage-based Stripe billing",
    ],
    technologies: [
      "Node.js",
      "Express",
      "React",
      "AWS",
      "Stripe",
      "AssemblyAI",
    ],
    visualLabel: "Production AI SaaS",
    layout: "image-right",
  },
];

export const experienceHighlights = [
  {
    company: "Cross Catholic Outreach",
    role: "Web Developer",
    dates: "2022–2025",
    summary:
      "Built secure, content-rich systems for a global nonprofit and the people supporting its mission.",
    highlights: [
      "Created an educational portal for Outreach Priests with training video, documents, alerts, authentication, administrative roles, and content management.",
      "Built an idempotent, webhook-powered donation synchronization system moving hundreds to thousands of daily transactions between two high-security systems.",
    ],
  },
  {
    company: "Independent",
    role: "Software Developer & Product Builder",
    dates: "2010–Present",
    summary:
      "Architecting and shipping SaaS, backend applications, mobile products, and client systems from first idea through production.",
    highlights: [
      "End-to-end product ownership across architecture, APIs, interfaces, cloud services, payments, and deployment.",
    ],
  },
  {
    company: "Gloucester Mass Marketing",
    role: "Founder & Full-Stack Developer",
    dates: "2017–2022",
    summary:
      "Combined software, automation, marketing, and direct client delivery to build useful growth systems.",
    highlights: [
      "Delivered websites, landing pages, customer-acquisition systems, and automation while managing more than $100,000 in paid advertising.",
    ],
  },
  {
    company: "Shawmut Communications Group",
    role: "Head of Variable Data Development",
    dates: "2015–2018",
    summary:
      "Led data-driven development for high-volume, highly personalized document production.",
    highlights: [
      "Built Node.js tooling, database-analysis workflows, APIs, automation, and conditional content-generation systems.",
    ],
  },
];

export const capabilityGroups = [
  {
    title: "Backend & architecture",
    description: "Reliable systems with meaningful behavior behind the UI.",
    technologies: [
      "Laravel",
      "PHP",
      "Node.js",
      "Express",
      "REST APIs",
      "Webhooks",
      "Authentication",
      "Idempotent processing",
      "Git",
    ],
  },
  {
    title: "Frontend & mobile",
    description: "Interfaces that carry a product from browser to App Store.",
    technologies: [
      "React",
      "JavaScript",
      "Flutter",
      "Dart",
      "Responsive web apps",
      "App Store deployment",
    ],
  },
  {
    title: "Data & infrastructure",
    description: "The storage, processing, and cloud foundation underneath.",
    technologies: [
      "MySQL",
      "MongoDB",
      "AWS",
      "S3",
      "Lambda",
      "File processing",
      "Cloud deployment",
    ],
  },
  {
    title: "Product integrations",
    description: "External services shaped into one coherent experience.",
    technologies: [
      "OpenAI",
      "AssemblyAI",
      "Stripe",
      "RevenueCat",
      "Mapbox",
      "Native purchases",
    ],
  },
];

export const currentProjects = [
  {
    ...skillBound,
    description:
      "An AI-powered gamified learning platform that generates personalized learning paths, lessons, quizzes, projects, challenges, and progression systems.",
    technologies: [
      "Laravel",
      "PHP",
      "Flutter",
      "Structured AI",
      "Background jobs",
      "XP systems",
    ],
    accent: "blue",
  },
  {
    ...bitMinky,
    description:
      "A cozy Unity 6 farming RPG built around modular gameplay systems, progression, persistence, farming, quests, inventory, economy, and offline simulation.",
    technologies: [
      "Unity 6",
      "C#",
      "Save systems",
      "Gameplay architecture",
      "Progression",
    ],
    accent: "mint",
  },
];

export const personalNotes = [
  "Lifelong self-directed learner",
  "Regular participant in technical courses",
  "Founder and product builder",
  "First-Degree Black Belt",
];

export const opportunityTypes = [
  "Full-stack, Flutter, and mobile roles",
  "Product and startup teams",
  "Consulting and architecture",
  "Thoughtful technical collaborations",
];

const nextConfig = {
  metadata,
  contactLinks,
  navigation,
  proofPoints,
  featuredProducts,
  experienceHighlights,
  capabilityGroups,
  currentProjects,
  personalNotes,
  opportunityTypes,
};

export default nextConfig;
