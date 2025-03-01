import { BiLogoNetlify, BiLogoTypescript } from "react-icons/bi";
import { CgVercel } from "react-icons/cg";
import { DiGithubAlt } from "react-icons/di";
import {
  FaCss3Alt,
  FaGitAlt,
  FaHtml5,
  FaNodeJs,
  FaReact,
} from "react-icons/fa6";
import { IoLogoJavascript } from "react-icons/io";
import { IoLogoFirebase } from "react-icons/io5";
import {
  SiExpress,
  SiJest,
  SiTailwindcss,
  SiMysql,
  SiAdobe,
} from "react-icons/si";

const info_en = {
  // ============ MAIN DETAILS ============
  main: {
    name: "Kaushik Jain",
    description:
      "I am a software engineer with expertise in front-end web development. I have experience in building scalable, secure and reliable web applications using various frameworks and technologies. I enjoy solving complex problems and learning new skills. I am passionate about creating high-quality code that follows best practices and industry standards.",
    photo: "images/photo.jpg",
    email: "kaushikjain67890@gmail.com",
    phone: 8955302242,
    github: "https://github.com/kaushik73",
  },

  // ============ SOCIAL LINKS ============
  socials: {
    twitter: "https://twitter.com/dsbalico",
    github: "https://github.com/kaushik73",
    linkedin: "https://www.linkedin.com/in/kaushikjain-73/",
    instagram: "https://www.instagram.com/kaushikk_73/",
    facebook: "https://facebook.com/dsbalico",
  },

  // ============ PROJECTS ============
  projects: [
    {
      title: "Netflix Clone",
      description:
        "A Netflix clone that fetches data from the TMDB API, featuring a trailer view, deeply nested recommended movies, reviews, cast profiles, and more, all within a beautifully responsive UI that showcases high-quality images.",
      technologies: "React, Tailwind, Redux, HTML , CSS ,  Javascript",
      github: "https://github.com/kaushik73/Netflix-Clone",
      link: "https://66b8b557a3dcf159d5b48646--movie-drag-8d0296.netlify.app/",
    },
    {
      title: "Meal Recommendation Engine",
      description:
        "Developed a console-based, algorithm-driven Recommendation Engine for a cafeteria, designed to enhance food choices for customers based on their preferences. Supports multiple users and adheres to all SOLID principles.",
      technologies: "SQL, TypeScript",
      github: "https://github.com/kaushik73/cafeteria-management-system",
      link: "",
    },
    {
      title: "Youtube Clone",
      description:
        "A YouTube clone that fetches live data from the YouTube API, featuring an advanced search engine, a simulated live chat with an add message feature, and support for nested comments up to the nth level.",
      technologies: "React, Tailwind, Redux , HTML , CSS ,  Javascript",
      github: "https://github.com/kaushik73/Youtube-Clone",
      link: "https://youtube-clone-kaushik.vercel.app/",
    },

    {
      title: "Password Manager",
      description:
        "A Password manager which securely store  passwords in app. Encrypt passwords using a unique key, ensuring they are safe and protected under lock and key. Key is the encryption of the password used to login to Password Manager.",
      technologies: "React, HTML, CSS, Tailwind , Javascript",
      github: "https://github.com/kaushik73/Password-Manager/tree/master",
      link: "https://passwordmanager73.netlify.app/",
    },
  ],

  // ============ EDUCATION ============
  education: [
    {
      school: "Swami Keshwanand Institute of Technology, Jaipur",
      degree: "Bachelor of Technology in Computer Science",
      duration: "2019 - 2023",
      marks: "8.4 CGPA",
      image: "images/skit_logo.png",
    },
    {
      school: "Emmanuel Snr. Sr. School",
      degree: "Class 12th (CBSE)",
      duration: "2018 - 2019",
      marks: "84 %",
      image: "images/emmanuel_school_logo.jpg",
    },
    {
      school: "Emmanuel Snr. Sr. School",
      degree: "Class 10th (CBSE)",
      duration: "2016 - 2017",
      marks: "8.2 CGPA",
      image: "images/emmanuel_school_logo.jpg",
    },
  ],

  // ============ EXPERIENCE ============
  experience: [
    {
      position: "Software Engineer",
      company: "In Time Tec",
      duration: "May 2024 - Present",
      image: "images/intimetec_logo.png",
      descriptions: [
        "Contributing as a front-end developer for MMS with a team of 15+ developers.",
        "Showcasing POC’s to clients for the Web Pages.",
      ],
    },
    {
      position: "Junior Software Engineer",
      company: "In Time Tec",
      duration: "April 2023 - April 2024",
      image: "images/intimetec_logo.png",
      descriptions: [
        "Contributed to an app that provides training in child development and education.",
        "Assessment of childcare facilities based on national quality standards.",
      ],
    },
    {
      position: "Trainee",
      company: "In Time Tec",
      duration: "Jan 2023 - March 2023",
      image: "images/intimetec_logo.png",
      descriptions: ["Gained practical experience in front-end development."],
    },
    {
      position: "Internship",
      company: "Let’s Grow More",
      duration: "Sep 2022 - Aug 2022",
      image: "images/lets_grow_more_logo.jpg",
      descriptions: [
        "Completed a virtual internship, creating static websites and acquiring fundamental front-end skills.",
      ],
    },
    {
      position: "Student Partner",
      company: "StartUp-201",
      duration: "July 2021 - Aug 2021",
      image: "images/startup_201_logo.png",
      descriptions: [
        "Presented a strategic plan for an Online Food Delivery Business to compete against established industry giants.",
      ],
    },
  ],

  // ============ CERTIFICATES (not in use)============
  certificates: [
    {
      title: "Foundations of Cybersecurity Certificate",
      description: "Provided by Coursera & Authorized by IBM",
      icon: "ibm",
      link: "https://www.coursera.org/account/accomplishments/records/SF2PPLNVTH6R",
    },
    {
      title: "Git and GitHub Essentials",
      description: "Provided by Coursera & Authorized by IBM",
      icon: "ibm",
      link: "https://www.credly.com/badges/fa00026a-4db5-4269-ab4f-340f5382ac03",
    },
    {
      title: "Crash Course on Python Certificate",
      description: "Provided by Coursera & Authorized by Google",
      icon: "google",
      link: "https://www.coursera.org/account/accomplishments/verify/S9773NBEK4S6",
    },
    {
      title: "Technical Support Fundamentals Certificate",
      description: "Provided by Coursera & Authorized by Google",
      icon: "google",
      link: "https://www.coursera.org/account/accomplishments/verify/P9EH5HNYRESZ",
    },
    {
      title:
        "Introduction to Web Development with HTML, CSS, JavaScript Certificate",
      description: "Provided by Coursera & Authorized by IBM",
      icon: "ibm",
      link: "https://www.credly.com/badges/7b88eb00-e1f9-4ae6-be2a-3b2ae8983c44",
    },
    {
      title: "Introduction to Cloud Computing Certificate",
      description: "Provided by Coursera & Authorized by IBM",
      icon: "ibm",
      link: "https://www.credly.com/badges/514b694a-8dc4-418d-9af4-61908dc29ca8",
    },
    {
      title:
        "Django Application Development with SQL and Databases Certificate",
      description: "Provided by Coursera & Authorized by IBM",
      icon: "ibm",
      link: "https://www.credly.com/badges/a36dd8a3-1050-4c4e-bcef-97b39babf55e",
    },
    {
      title: "Front-End Developer (React) Certificate",
      description: "Provided by HackerRank",
      icon: "hackerrank",
      link: "https://www.hackerrank.com/certificates/631ac3acf267",
    },
    {
      title: "Software Engineer Certificate",
      description: "Provided by HackerRank",
      icon: "hackerrank",
      link: "https://www.hackerrank.com/certificates/efdbdd44eb7d",
    },
  ],

  // ============ CONTACT ============
  contact: {
    title: "Let's Get in Touch: Ways to Connect with Me",
    description: {
      line1:
        "Thank you for your interest in getting in touch with me. I welcome your feedback, questions, and suggestions.",
      line2:
        "If you have a specific question or comment, please feel free to email me.",
      line3:
        "Let's Connect and disscuss more, You can connect with me using the social media links below.",
    },
  },

  // ============ SKILLS ============
  skills: [
    {
      id: 1,
      name: "HTML",
      icon: FaHtml5,
    },
    {
      id: 2,
      name: "CSS",
      icon: FaCss3Alt,
    },
    {
      id: 3,
      name: "JavaScript",
      icon: IoLogoJavascript,
    },
    {
      id: 4,
      name: "TypeScript",
      icon: BiLogoTypescript,
    },
    {
      id: 5,
      name: "React",
      icon: FaReact,
    },
    {
      id: 6,
      name: "Express",
      icon: SiExpress,
    },
    {
      id: 7,
      name: "NodeJS",
      icon: FaNodeJs,
    },
    {
      id: 8,
      name: "Tailwind",
      icon: SiTailwindcss,
    },
    {
      id: 9,
      name: "Jest",
      icon: SiJest,
    },
    {
      id: 10,
      name: "Git",
      icon: FaGitAlt,
    },
    {
      id: 11,
      name: "Github",
      icon: DiGithubAlt,
    },
    {
      id: 12,
      name: "Netlify",

      icon: BiLogoNetlify,
    },
    {
      id: 13,
      name: "Vercel",
      icon: CgVercel,
    },
    {
      id: 14,
      name: "Firebase",
      icon: IoLogoFirebase,
    },

    {
      id: 16,
      name: "MySQL",
      icon: SiMysql,
    },
    {
      id: 17,
      name: "Coldfusion",
      icon: SiAdobe,
    },
  ],

  // ============ TYPE ANIMATION (not in use)============
  typeAnimation: {
    one: "I am a Frontend Developer",
    two: "I am a React Developer",
    three: "I am a Coder",
    four: "I am Curious to Learn",
  },

  // ---------------EXTRA STUFFF ------------------------------

  // ============ HERO ============
  hero: {
    HELLO_THERE: "Hello, There",
    HELLO_HOW_YOU_DOING: "Hello! 👋 How are you doing? 🤔",
    RESUME: "Resume",
    CONTACT: "Contact",
  },

  // ============ PROJECTS ============
  projectsPage: {
    PROJECTS: "Projects",
    VIEW_PROJECT: "View Project",
    VIEW_GITHUB: "View Github",
  },
  // ============ EDUCATION ============
  educationPage: {
    EDUCATION: "Education",
  },
  // ============ EXPERIENCE ============
  experiencePage: {
    EXPERIENCE: "Experience",
  },
  // ============ SKILLS ============
  SkillsPage: {
    TECH_I_USE: "Technologies I Use",
  },
  // ============ CONTACT ============
  contactPage: {
    GET_IN_TOUCH: "Let's Get in Touch:",
    WAYS_TO_CONNECT_ME: "Ways to Connect with Me",
    FOLLOW_ON_FACEBOOK: "Let's Connect on Facebook",
    FOLLOW_ON_X: "Follow on X",
    FOLLOW_ON_INSTA: "Let's Connect on Instagram",
    FOLLOW_ON_LINKEDIN: "Let's Connect on LinkedIn",
    FOLLOW_ON_GITHUB: "Let's Connect on Github",
  },

  // ============ FOOTER ============
  footerPage: {
    RIGHTS_RESERVED: "© 2024 Kaushik Jain. All Rights Reserved",
    BACK_TO_TOP: "Go back to top",
  },
};

export default info_en;
