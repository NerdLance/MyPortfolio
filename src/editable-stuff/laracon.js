import bitMinkyImage from "../assets/img/icon-bitminky.jpg";
import skillBoundImage from "../assets/img/icon-skillbound.jpg";
import transcribePlusImage from "../assets/img/screenshot-transcribe-plus.png";
import tripFernImage from "../assets/img/icon-tripfern.jpg";

export const contactLinks = {
  email: "mailto:Lance@LanceMadden.com",
  github: "https://github.com/NerdLance",
  linkedin: "https://www.linkedin.com/in/NerdLance",
  resume:
    "https://drive.google.com/file/d/1WQ9GGfP7aI57ViPHoE44trxikN6S4R45/view?usp=sharing",
  portfolio: "/",
};

export const proofPoints = [
  {
    value: "Since 2011",
    label: "Building and shipping software",
  },
  {
    value: "Published",
    label: "iOS application in the App Store",
  },
  {
    value: "Production",
    label: "AI SaaS used for thousands of transcription hours",
  },
  {
    value: "Full lifecycle",
    label: "Architecture, backend, web, admin, and mobile",
  },
];

export const projects = [
  {
    name: "TripFern",
    slug: "tripfern",
    status: "Live on iOS",
    shortDescription:
      "A collaborative travel and memory-sharing application available on the iOS App Store, with Android launching soon.",
    longDescription:
      "TripFern covers the complete product journey—from architecture and cross-platform development through App Store testing, signing, submission, and release under Apple's production standards.",
    technologies: [
      "Flutter",
      "Dart",
      "Node.js",
      "Express",
      "AWS",
      "Mapbox",
      "RevenueCat",
      "OpenAI",
    ],
    proofPoints: [
      "Thousands of travel memories uploaded",
      "Native in-app purchases and subscription infrastructure",
      "Supporting web-based administration experience",
    ],
    image: tripFernImage,
    imageWidth: 512,
    imageHeight: 512,
    imageAlt: "TripFern white fern logo on a deep green background",
    externalUrl: "https://apps.apple.com/us/app/tripfern/id6782602872",
    externalLabel: "View TripFern",
    featured: true,
    displayOrder: 1,
  },
  {
    name: "Transcribe.plus",
    slug: "transcribe-plus",
    status: "In production",
    shortDescription:
      "An intuitive AI-powered speech-to-text SaaS built specifically for court transcriptionists.",
    longDescription:
      "A focused pay-as-you-go service that handles upload, processing, transcription, and billing workflows without forcing customers into a monthly transcription plan.",
    technologies: [
      "Node.js",
      "Express",
      "React",
      "Stripe",
      "AWS",
      "AssemblyAI",
    ],
    proofPoints: [
      "Thousands of hours transcribed",
      "Customers active since launch",
      "File-processing and usage-based billing workflows",
    ],
    image: transcribePlusImage,
    imageWidth: 1400,
    imageHeight: 1482,
    imageAlt: "Transcribe.plus speech-to-text application landing screen",
    externalUrl: "https://transcribe.plus/",
    externalLabel: "Visit Transcribe.plus",
    featured: false,
    displayOrder: 2,
  },
  {
    name: "SkillBound",
    slug: "skillbound",
    status: "In development",
    shortDescription:
      "An AI-powered gamified learning platform that generates personalized learning paths, lessons, quizzes, challenges, and projects.",
    longDescription:
      "Structured AI output and background workflows turn a learning goal into an experience with useful progression rather than a one-off generated response.",
    technologies: [
      "Laravel",
      "PHP",
      "Flutter",
      "Structured AI",
      "Background jobs",
    ],
    proofPoints: [
      "Personalized learning paths",
      "XP and progression systems",
      "Lessons, quizzes, challenges, and projects",
    ],
    image: skillBoundImage,
    imageWidth: 512,
    imageHeight: 512,
    imageAlt: "SkillBound white book and crown logo on a blue background",
    externalUrl: null,
    externalLabel: null,
    featured: false,
    displayOrder: 3,
  },
  {
    name: "BitMinky",
    slug: "bitminky",
    status: "In development",
    shortDescription:
      "A cozy Unity 6 farming RPG built around modular gameplay systems and long-term progression.",
    longDescription:
      "The project brings together interconnected gameplay systems that remain maintainable as the world, economy, and progression loops grow.",
    technologies: ["Unity 6", "C#", "Persistence", "Offline simulation"],
    proofPoints: [
      "Save and persistence architecture",
      "Farming, inventory, quests, and economy systems",
      "Progression and offline simulation",
    ],
    image: bitMinkyImage,
    imageWidth: 512,
    imageHeight: 512,
    imageAlt: "BitMinky character with a carrot and cheese in a colorful field",
    externalUrl: null,
    externalLabel: null,
    featured: false,
    displayOrder: 4,
  },
];

export const buildingInterests = [
  "Laravel backend systems",
  "Node.js APIs",
  "SaaS platforms",
  "AI-powered applications",
  "Flutter mobile applications",
  "Payments and subscriptions",
  "Webhook processing",
  "Cloud storage and file processing",
  "Product architecture",
  "Developer tooling and automation",
  "Ideas that need a path to production",
];

export const technologyGroups = [
  {
    title: "Backend & architecture",
    technologies: [
      "Laravel",
      "PHP",
      "Node.js",
      "Express",
      "REST APIs",
      "Webhooks",
      "Git",
    ],
  },
  {
    title: "Frontend & mobile",
    technologies: ["React", "JavaScript", "Flutter", "Dart"],
  },
  {
    title: "Data & infrastructure",
    technologies: ["MySQL", "MongoDB", "AWS", "S3", "Lambda"],
  },
  {
    title: "Product integrations",
    technologies: [
      "OpenAI",
      "Stripe",
      "RevenueCat",
      "Mapbox",
      "AssemblyAI",
    ],
  },
  {
    title: "Additional development",
    technologies: ["Unity", "C#"],
  },
];
