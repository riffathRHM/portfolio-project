export const profile = {
  name: "Mohamed Riffath",
  taglineDesign: "Graphic Designer",
  taglineCode: "Mobile & Full-Stack Engineer",
  email: "riffath.emedia@gmail.com",
  phone: "+971 506471697",
  fiverr: "https://www.fiverr.com/qwerty_works?public_mode=true",
  miloAnimates: "https://www.facebook.com/share/1BgDYP9W4C/",
  github: "https://github.com/riffathRHM",
  linkedin: "#", // TODO: add real LinkedIn URL
  summaryDesign:
    "Graphic designer with 4+ years of freelance experience across logos, brochures, flyers, leaflets, and brand stationery for clients worldwide, holding a 5.0-star rating across 20+ Fiverr reviews.",
  summaryCode:
    "Mobile engineer with 4+ years shipping production Flutter and SwiftUI apps to the App Store and Google Play, plus full-stack experience across Node.js, Express, and MongoDB.",
};

export const skillsDesign = [
  "Logo design, brand identity & guidelines",
  "Brochure, leaflet, flyer & catalogue layout",
  "Business stationery: letterheads, business cards, forms",
  "Social media content design & character animation",
  "Adobe Illustrator, Photoshop, InDesign, After Effects",
  "Canva Pro",
  "AI-assisted animation & content tools",
  "Client communication & revision management",
];

export const skillsCode = {
  Languages: ["Swift", "Dart", "JavaScript", "Java", "PHP", "Python"],
  "Frontend (Web)": [
    "React.js",
    "Redux",
    "TypeScript",
    "Context API",
    "HTML5",
    "CSS3",
  ],
  Mobile: [
    "Flutter",
    "SwiftUI",
    "UIKit",
    "React Native",
    "Combine",
    "REST API Integration",
  ],
  Backend: ["Node.js", "Express.js", "RESTful APIs", "JWT"],
  Databases: ["MongoDB", "MySQL", "Firebase Firestore", "Core Data"],
  "Tools & Cloud": [
    "Git",
    "GitHub",
    "Bitbucket",
    "Xcode",
    "VS Code",
    "CI/CD",
    "AWS/GCP",
  ],
  Integrations: ["Stripe", "In-App Purchases", "Social Login (OAuth)"],
  Concepts: [
    "Agile/Scrum",
    "MVVM",
    "MVC",
    "OOP",
    "Performance Optimisation",
    "App Store Deployment",
  ],
};

export const experienceCode = [
  {
    role: "Mobile Engineer",
    org: "Elegant Media Australia",
    period: "Jan 2024 — Present",
    points: [
      "Develop and maintain production Flutter and SwiftUI applications for international clients.",
      "Integrate REST APIs, authentication systems, payment gateways, push notifications, and third-party SDKs.",
      "Collaborate with designers, backend developers, QA engineers, and stakeholders to ship high-quality mobile apps.",
      "Participate in code reviews, testing, bug fixing, App Store releases, and production support.",
    ],
  },
];

export const experienceDesign = [
  {
    role: "Freelance Graphic Designer",
    org: "Fiverr — qwerty_works",
    period: "Nov 2022 — Present",
    points: [
      "Delivered 20+ completed design projects (logos, brochures, leaflets, letterheads, posters) for clients across the UK, Germany, India, USA, and UAE, maintaining a 5.0-star average rating.",
      "Translated client briefs into print-ready designs using Adobe Illustrator, Photoshop, and Canva with a 1–6 day average turnaround.",
      "Managed multiple revision rounds per project, including research into unfamiliar languages, cultures, and industries.",
      "Produced advertising posters and campaign material tailored to specific regional audiences.",
    ],
  },
  {
    role: "Founder & Designer",
    org: "Milo Animates",
    period: "Dec 2025 — Present",
    points: [
      "Created and grew an original animated-monkey character brand on Facebook to 273,000+ organic followers with no paid advertising.",
      "Designed the character, story content, and visual style using AI-assisted animation tools, finishing in Adobe Photoshop.",
      "Planned and maintained a consistent content and posting schedule to sustain audience growth and engagement.",
    ],
  },
];

export const appProjects = [
  {
    name: "TeeTime NZ",
    description: "Golf tournament booking platform used across New Zealand.",
    stack: ["SwiftUI", "REST APIs", "Stripe", "OAuth"],
    points: [
      "Integrated Stripe payment workflows for tournament registrations.",
      "Implemented OAuth authentication and secure account management.",
      "Built tournament discovery, registration, and booking functionality.",
    ],
    link: "https://apps.apple.com/nz/app/teetime-nz/id6755508981",
  },
  {
    name: "Hairchog",
    description: "Barber and hairstylist marketplace platform.",
    stack: ["SwiftUI", "REST APIs", "Stripe", "Google Maps", "Agora.io"],
    points: [
      "Integrated Agora.io for real-time voice and video communication.",
      "Implemented Stripe payment processing for appointment bookings.",
      "Integrated Google Maps for location discovery and nearby search.",
    ],
    link: "https://apps.apple.com/us/app/hairchog/id6752330010",
  },
  {
    name: "FitBlazer",
    description:
      "Fitness and wellness marketplace across New Zealand and Australia.",
    stack: [
      "Flutter",
      "Firebase Firestore",
      "Firebase Cloud Messaging",
      "REST APIs",
    ],
    points: [
      "Integrated Firebase Firestore for real-time data sync.",
      "Implemented push notifications using Firebase Cloud Messaging.",
      "Built activity discovery and booking workflows.",
    ],
    link: "https://apps.apple.com/uz/app/fitblazer/id6751321157",
  },
  {
    name: "How Did You Survive",
    description: "Community-driven storytelling platform.",
    stack: ["SwiftUI", "REST APIs"],
    points: ["Contributed SwiftUI interfaces and integrated backend APIs."],
    link: "https://apps.apple.com/us/app/how-did-you-survive/id6733222990",
  },
];

export const sideProjects = [
  {
    name: "Multi-Vendor Marketplace Mobile App",
    stack: [
      "Flutter",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Stripe",
      "JWT",
      "REST API",
    ],
    points: [
      "Architected a full-stack multi-vendor marketplace from scratch — vendor onboarding, product catalogue, cart, order tracking, and Stripe checkout for Android and iOS.",
      "Designed role-based access control (RBAC) for 3 user tiers with JWT-secured, middleware-protected routes.",
      "Structured a scalable REST API with 20+ endpoints for clean frontend/backend decoupling.",
    ],
    links: [
      {
        label: "Backend",
        href: "https://github.com/riffathRHM/multistore-backend",
      },
      {
        label: "Flutter app",
        href: "https://github.com/riffathRHM/multistore-flutter",
      },
    ],
  },
  {
    name: "Full-Stack Food Ordering Platform",
    stack: ["React.js", "Node.js", "Express.js", "MongoDB", "JWT", "Stripe"],
    points: [
      "Built a MERN-stack food ordering platform with dynamic cart management and real-time order status.",
      "Implemented stateless JWT authentication with refresh token rotation.",
      "Developed RESTful APIs for menu management, accounts, and order processing.",
    ],
    links: [
      {
        label: "Repository",
        href: "https://github.com/riffathRHM/foodDelivery_MERN",
      },
    ],
  },
];

export const designWork = [
  { title: "Brand Brochure", category: "Brochure Design" },
  { title: "Logo & Letterhead Suite", category: "Brand Identity" },
  { title: "Advertising Poster", category: "Campaign Design" },
  { title: "Business Card Set", category: "Stationery" },
  { title: "Milo Animates Character", category: "Character Design" },
  { title: "Client Forms Redesign", category: "Print Layout" },
];

export const videoWork = [
  {
    title: "Real Estate",
    category: "REAL ESTATE",
    video: "/videos/video-1.mp4",
    poster: "/images/video-poster-1.jpg",
  },
  {
    title: "Home Improvement Services",
    category: "HOME MAINTENANCE",
    video: "/videos/video-2.mp4",
    poster: "/images/video-poster-2.jpg",
  },
  {
    title: "Business Automation & Optimization",
    category: "BUSINESS GROWTH SOLUTIONS",
    video: "/videos/video-3.mp4",
    poster: "/images/video-poster-3.jpg",
  },
  {
    title: "Artificial Intelligence",
    category: "AI",
    video: "/videos/video-4.mp4",
    poster: "/images/video-poster-4.jpg",
  },
  {
    title: "Ai Videos",
    category: "AI GENERATED VIDEOS",
    video: "/videos/video-5.mp4",
    poster: "/images/video-poster-5.jpg",
  },
  {
    title: "SaaS Videos",
    category: "TECHNICAL VIDEOS",
    video: "/videos/video-6.mp4",
    poster: "/images/video-poster-6.jpg",
  },
];

export const education = {
  degree: "Bachelor of Science in Computer Science",
  school: "University of Jaffna, Sri Lanka",
  period: "Sep 2020 — Oct 2023",
};

export const certifications = [
  "Data Structures & Algorithms — Udemy",
  "IEEEXtreme 15.0 Competitive Programming Certificate",
];

export const languages = [
  { name: "English", level: "Professional Working Proficiency" },
  { name: "Tamil", level: "Native Proficiency" },
  { name: "Sinhala", level: "Conversational Proficiency" },
  { name: "Arabic", level: "Basic Reading Skills" },
];

export const testimonials = [
  {
    name: "richealtutu",
    location: "United States",
    rating: 5,
    text: "Great working with this seller. He completely followed all instructions. Outstanding work as usual! Highly recommend.",
    gig: "Brochure Design",
  },
  {
    name: "dondive",
    location: "India",
    rating: 5,
    text: "What a fantastic experience — effortlessly quick and top-notch quality, very professionally done. Understood the requirement and delivered beyond what I expected.",
    gig: "Brochure Design",
  },
  {
    name: "hayselokshen",
    location: "United Kingdom",
    rating: 5,
    text: "This seller will not let you down. He'll go out of his way to ensure customer satisfaction, even with umpteen revisions — a hard worker at a competitive price.",
    gig: "Brochure Design",
  },
  {
    name: "aeknathmishra",
    location: "United Arab Emirates",
    rating: 5,
    text: "Easy to work with due to his communication, politeness, and professionalism.",
    gig: "Repeat Client · Brochure Design",
  },
  {
    name: "mehtabali1988",
    location: "United Kingdom",
    rating: 5,
    text: "Amazing work and a good eye for detail.",
    gig: "Brochure Design",
  },
  {
    name: "chrislawn17",
    location: "United Kingdom",
    rating: 5,
    text: "Very high quality work, professional and quick service.",
    gig: "Design",
  },
];

export const stats = [
  { label: "Fiverr rating", value: "5.0★" },
  { label: "Design projects delivered", value: "20+" },
  { label: "Milo Animates followers", value: "273K+" },
  { label: "Years shipping code", value: "4+" },
];