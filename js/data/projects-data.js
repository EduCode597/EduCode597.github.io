/**
 * EduCode Portfolio - Projects Data
 * Central repository for all project case studies and showcase items.
 */

export const projectsData = [
  {
    id: "citisent",
    title: "CitiSent — Emotion-Aware Civic Reporting System",
    category: "fullstack",
    categoryLabel: "Full-Stack • AI Service",
    status: "Public Collaboration",
    layout: "project-featured",
    skills: "react tailwind api python nodejs supabase websocket docker",
    problemSolved:
      "Traditional civic complaint portals suffer from backlogged, unprioritized reporting. CitiSent analyzes the urgency and emotional sentiment of citizen submissions in real time, routing critical municipal issues to city administrators with live interactive triage dashboards.",
    techTags: [
      "React 19",
      "Tailwind CSS v4",
      "TanStack Query",
      "Node.js Gateway",
      "FastAPI (Python)",
      "Google Gemini AI",
      "Supabase",
      "WebSockets"
    ],
    links: [
      {
        label: "View Repository",
        url: "https://github.com/CitiSent-Project/CitiSent",
        icon: "bi-github",
        isPrimary: true
      }
    ]
  },
  {
    id: "karaoke",
    title: "PinoyVideoke / Karaoke",
    category: "frontend",
    categoryLabel: "Web Application",
    status: "Live Deployed",
    layout: "project-regular",
    skills: "typescript react css3 html5",
    problemSolved:
      "Replicates the authentic, nostalgic Philippine videoke machine experience (Megapro, Platinum, TJ Media) inside a responsive, modern web interface featuring queue controls and synchronized lyrics display.",
    techTags: [
      "TypeScript",
      "React",
      "Web Audio API",
      "CSS Modules",
      "Vercel Deployment"
    ],
    links: [
      {
        label: "Live Demo",
        url: "https://karaoke-navy-ten.vercel.app",
        icon: "bi-box-arrow-up-right",
        isPrimary: true
      },
      {
        label: "Source Code",
        url: "https://github.com/EduCode597/Karaoke",
        icon: "bi-github",
        isPrimary: false
      }
    ]
  },
  {
    id: "snapeat",
    title: "SnapEat — Food & Calorie Tracking",
    category: "fullstack",
    categoryLabel: "Nutrition & Web App",
    status: "Live Deployed",
    layout: "project-regular",
    skills: "python javascript html5 css3 api",
    problemSolved:
      "Offers an interactive food discovery and nutrition calculation workflow, providing students and health-conscious users with simplified dietary tracking and food log analysis.",
    techTags: [
      "Python Backend",
      "JavaScript",
      "HTML5 / CSS3",
      "API Integration",
      "Vercel"
    ],
    links: [
      {
        label: "Live Demo",
        url: "https://snapeat-henna.vercel.app",
        icon: "bi-box-arrow-up-right",
        isPrimary: true
      },
      {
        label: "Repository",
        url: "https://github.com/timbibat/snapeat",
        icon: "bi-github",
        isPrimary: false
      }
    ]
  },
  {
    id: "hotel-management",
    title: "Hotel Management System",
    category: "academic",
    categoryLabel: "Enterprise Backend",
    status: "Academic Collaboration",
    layout: "project-regular",
    skills: "php mysql javascript css3 oop",
    problemSolved:
      "Automates hospitality operations including room reservations, guest check-in records, housekeeping room status updates, and transaction billing calculations backed by a relational database schema.",
    techTags: [
      "PHP",
      "MySQL Database",
      "Relational Modeling",
      "JavaScript",
      "CSS3"
    ],
    links: [
      {
        label: "View Repository",
        url: "https://github.com/DarrenGuev/Hotel-Management-System",
        icon: "bi-github",
        isPrimary: true
      }
    ]
  },
  {
    id: "vento-corp",
    title: "VENTO-corp Enterprise Portal",
    category: "academic",
    categoryLabel: "INTE302 Project",
    status: "Final Project",
    layout: "project-regular",
    skills: "php mysql oop html5 css3",
    problemSolved:
      "Built as the INTE302 final project, delivering a cohesive corporate resource portal with modular user permission tiers, database persistence, and structured object-oriented backend controllers.",
    techTags: [
      "PHP",
      "OOP Architecture",
      "MySQL",
      "HTML5 / CSS3"
    ],
    links: [
      {
        label: "View Repository",
        url: "https://github.com/sijey-CJAA/VENTO-corp",
        icon: "bi-github",
        isPrimary: true
      }
    ]
  },
  {
    id: "gamedev-cars",
    title: "GameDevCars — 2D Physics Simulator",
    category: "academic",
    categoryLabel: "Game Engineering",
    status: "Python Simulation",
    layout: "project-regular",
    skills: "python oop",
    problemSolved:
      "Implements vehicle dynamics, acceleration vectors, obstacle collision detection, and class-based vehicle entity lifecycles governed by an optimized real-time game loop in Python.",
    techTags: [
      "Python",
      "Pygame",
      "OOP Classes & Inheritance",
      "Collision Algorithms"
    ],
    links: [
      {
        label: "View Repository",
        url: "https://github.com/DarrenGuev/GameDevCars",
        icon: "bi-github",
        isPrimary: true
      }
    ]
  },
  {
    id: "oop-dream-team",
    title: "OOP — Dream Team Core Concepts",
    category: "academic",
    categoryLabel: "OOP Paradigms",
    status: "Academic Collaboration",
    layout: "project-regular",
    skills: "python oop javascript html5 css3",
    problemSolved:
      "Demonstrates and tests core object-oriented software engineering principles: Encapsulation, Class Inheritance, Polymorphic method overriding, and Data Abstraction across practical application models.",
    techTags: [
      "Python",
      "OOP Paradigms",
      "JavaScript",
      "HTML5 / CSS3"
    ],
    links: [
      {
        label: "View Repository",
        url: "https://github.com/EduCode597/OOP",
        icon: "bi-github",
        isPrimary: true
      }
    ]
  },
  {
    id: "samsung-s24",
    title: "Samsung S24 Ultra Showcase",
    category: "frontend",
    categoryLabel: "Product Landing",
    status: "Live Deployed",
    layout: "project-spotlight",
    thumb: "images/projects/samsung.jpg",
    thumbAlt: "Samsung S24 Ultra Showcase",
    skills: "html5 css3 bootstrap",
    problemSolved:
      "High-impact product landing page highlighting specifications, photography capabilities, and clean marketing layout with Bootstrap 5.",
    techTags: [
      "HTML5",
      "CSS3",
      "Bootstrap 5",
      "Responsive UI"
    ],
    links: [
      {
        label: "Live Demo",
        url: "https://educode597.github.io/SamsungS24Ultra/",
        icon: "bi-box-arrow-up-right",
        isPrimary: true
      },
      {
        label: "Source",
        url: "https://github.com/EduCode597/SamsungS24Ultra",
        icon: "bi-github",
        isPrimary: false
      }
    ]
  },
  {
    id: "vigan-heritage",
    title: "Vigan Heritage Escape",
    category: "frontend",
    categoryLabel: "Cultural & Tourism Web",
    status: "Live Deployed",
    layout: "project-spotlight",
    thumb: "images/projects/vigan.jpg",
    thumbAlt: "Vigan Heritage Escape",
    skills: "html5 css3 bootstrap",
    problemSolved:
      "Responsive cultural exploration portal presenting historical landmarks, cobblestone street visuals, and heritage tourist spots of Vigan City.",
    techTags: [
      "HTML5",
      "CSS3",
      "Bootstrap 5",
      "Content Architecture"
    ],
    links: [
      {
        label: "Live Demo",
        url: "https://educode597.github.io/Vigan-City/",
        icon: "bi-box-arrow-up-right",
        isPrimary: true
      },
      {
        label: "Source",
        url: "https://github.com/EduCode597/Vigan-City",
        icon: "bi-github",
        isPrimary: false
      }
    ]
  },
  {
    id: "gallery",
    title: "Personal Media Gallery",
    category: "frontend",
    categoryLabel: "Media Grid",
    status: "Live Deployed",
    layout: "project-spotlight",
    thumb: "images/projects/gallery.jpg",
    thumbAlt: "My Gallery Showcase",
    skills: "html5 css3",
    problemSolved:
      "Responsive grid-based visual gallery showcasing the people and events around me with optimized aspect ratios and responsive layouts.",
    techTags: [
      "HTML5",
      "CSS Grid",
      "Media Queries"
    ],
    links: [
      {
        label: "Live Demo",
        url: "https://educode597.github.io/Gallery/",
        icon: "bi-box-arrow-up-right",
        isPrimary: true
      },
      {
        label: "Source",
        url: "https://github.com/EduCode597/Gallery",
        icon: "bi-github",
        isPrimary: false
      }
    ]
  }
];
