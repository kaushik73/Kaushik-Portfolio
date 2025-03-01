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

const info_hi = {
  // ============ मुख्य विवरण ============
  main: {
    name: "कौशिक जैन",
    description:
      "मैं एक सॉफ्टवेयर इंजीनियर हूँ जो फ्रंट-एंड वेब विकास में विशेषज्ञता रखता हूँ। मुझे विभिन्न फ्रेमवर्क और तकनीकों का उपयोग करके मापनीय, सुरक्षित और विश्वसनीय वेब अनुप्रयोग बनाने का अनुभव है। मुझे जटिल समस्याओं को हल करना और नई स्किल्स सीखना पसंद है। मैं उच्च-गुणवत्ता वाले कोड बनाने के लिए प्रतिबद्ध हूँ जो सर्वश्रेष्ठ प्रथाओं और उद्योग मानकों का पालन करता है।",
    photo: "images/photo.jpg",
    email: "kaushikjain67890@gmail.com",
    phone: 8955302242,
    github: "https://github.com/kaushik73",
  },

  // ============ सोशल लिंक ============
  socials: {
    twitter: "https://twitter.com/dsbalico",
    github: "https://github.com/dsbalico",
    linkedin: "https://linkedin.com/in/dsbalico",
    instagram: "https://instagram.com/dsbalico",
    facebook: "https://facebook.com/dsbalico",
  },

  // ============ PROJECTS ============
  projects: [
    {
      title: "Dev Tinder",
      description:
        "A Tinder-like platform for developers to connect and collaborate on projects. Features include sending connection request, making friends, chatting.",

      technologies: "React, Tailwind, Redux, HTML , CSS ,  Javascript",
      github: "https://github.com/kaushik73/devTinder-web",
      link: "https://dev-tinder-web-three.vercel.app/#/",
    },
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

  // ============ शिक्षा ============
  education: [
    {
      school: "स्वामी केशवानंद इंस्टीट्यूट ऑफ टेक्नोलॉजी, जयपुर",
      degree: "कंप्यूटर साइंस में बैचलर ऑफ टेक्नोलॉजी",
      duration: "2019 - 2023",
      marks: "8.4 CGPA",
      image: "images/skit_logo.png",
    },
    {
      school: "इमैनुएल सीनियर सेकंडरी स्कूल",
      degree: "कक्षा 12वीं (CBSE)",
      duration: "2018 - 2019",
      marks: "84 %",
      image: "images/emmanuel_school_logo.jpg",
    },
    {
      school: "इमैनुएल सीनियर सेकंडरी स्कूल",
      degree: "कक्षा 10वीं (CBSE)",
      duration: "2016 - 2017",
      marks: "8.2 CGPA",
      image: "images/emmanuel_school_logo.jpg",
    },
  ],

  // ============ अनुभव ============
  experience: [
    {
      position: "सॉफ्टवेयर इंजीनियर",
      company: "इन टाइम टेक",
      duration: "मई 2024 - वर्तमान",
      image: "images/intimetec_logo.png",
      descriptions: [
        "15+ डेवलपर्स की टीम के साथ MMS के लिए एक फ्रंट-एंड डेवलपर के रूप में योगदान।",
        "वेब पेजों के लिए ग्राहकों को POC दिखाना।",
      ],
    },
    {
      position: "जूनियर सॉफ्टवेयर इंजीनियर",
      company: "इन टाइम टेक",
      duration: "अप्रैल 2023 - अप्रैल 2024",
      image: "images/intimetec_logo.png",
      descriptions: [
        "एक ऐप में योगदान दिया जो बाल विकास और शिक्षा में प्रशिक्षण प्रदान करता है।",
        "राष्ट्रीय गुणवत्ता मानकों के आधार पर बाल देखभाल सुविधाओं का आकलन।",
      ],
    },
    {
      position: "ट्रैनी",
      company: "इन टाइम टेक",
      duration: "जनवरी 2023 - मार्च 2023",
      image: "images/intimetec_logo.png",
      descriptions: ["फ्रंट-एंड विकास में व्यावहारिक अनुभव प्राप्त किया।"],
    },
    {
      position: "इंटर्नशिप",
      company: "लेट्स ग्रो मोर",
      duration: "सितंबर 2022 - अगस्त 2022",
      image: "images/lets_grow_more_logo.jpg",
      descriptions: [
        "एक वर्चुअल इंटर्नशिप पूरी की, स्थिर वेबसाइटें बनाई और बुनियादी फ्रंट-एंड कौशल प्राप्त किया।",
      ],
    },
    {
      position: "स्टूडेंट पार्टनर",
      company: "स्टार्टअप-201",
      duration: "जुलाई 2021 - अगस्त 2021",
      image: "images/startup_201_logo.png",
      descriptions: [
        "स्थापित उद्योग दिग्गजों के साथ प्रतिस्पर्धा करने के लिए एक ऑनलाइन फूड डिलीवरी बिजनेस के लिए एक रणनीतिक योजना प्रस्तुत की।",
      ],
    },
  ],

  // ============ प्रमाणपत्र ============
  certificates: [
    {
      title: "साइबर सुरक्षा के बुनियादी सिद्धांत प्रमाणपत्र",
      description: "कोर्सेरा द्वारा प्रदान किया गया और IBM द्वारा अधिकृत",
      icon: "ibm",
      link: "https://www.coursera.org/account/accomplishments/records/SF2PPLNVTH6R",
    },
    {
      title: "Git और GitHub आवश्यकताएँ",
      description: "कोर्सेरा द्वारा प्रदान किया गया और IBM द्वारा अधिकृत",
      icon: "ibm",
      link: "https://www.credly.com/badges/fa00026a-4db5-4269-ab4f-340f5382ac03",
    },
    {
      title: "पायथन पर क्रैश कोर्स प्रमाणपत्र",
      description: "कोर्सेरा द्वारा प्रदान किया गया और Google द्वारा अधिकृत",
      icon: "google",
      link: "https://www.coursera.org/account/accomplishments/verify/S9773NBEK4S6",
    },
    {
      title: "तकनीकी समर्थन बुनियादी सिद्धांत प्रमाणपत्र",
      description: "कोर्सेरा द्वारा प्रदान किया गया और Google द्वारा अधिकृत",
      icon: "google",
      link: "https://www.coursera.org/account/accomplishments/verify/P9EH5HNYRESZ",
    },
    {
      title: "HTML, CSS, JavaScript के साथ वेब विकास का परिचय प्रमाणपत्र",
      description: "कोर्सेरा द्वारा प्रदान किया गया और IBM द्वारा अधिकृत",
      icon: "ibm",
      link: "https://www.credly.com/badges/7b88eb00-e1f9-4ae6-be2a-3b2ae8983c44",
    },
    {
      title: "क्लाउड कंप्यूटिंग का परिचय प्रमाणपत्र",
      description: "कोर्सेरा द्वारा प्रदान किया गया और IBM द्वारा अधिकृत",
      icon: "ibm",
      link: "https://www.credly.com/badges/514b694a-8dc4-418d-9af4-61908dc29ca8",
    },
    {
      title: "SQL और डेटाबेस के साथ Django एप्लिकेशन विकास प्रमाणपत्र",
      description: "कोर्सेरा द्वारा प्रदान किया गया और IBM द्वारा अधिकृत",
      icon: "ibm",
      link: "https://www.credly.com/badges/a36dd8a3-1050-4c4e-bcef-97b39babf55e",
    },
    {
      title: "फ्रंट-एंड डेवलपर (React) प्रमाणपत्र",
      description: "HackerRank द्वारा प्रदान किया गया",
      icon: "hackerrank",
      link: "https://www.hackerrank.com/certificates/631ac3acf267",
    },
    {
      title: "सॉफ्टवेयर इंजीनियर प्रमाणपत्र",
      description: "HackerRank द्वारा प्रदान किया गया",
      icon: "hackerrank",
      link: "https://www.hackerrank.com/certificates/efdbdd44eb7d",
    },
  ],

  // ============ संपर्क करें ============
  contact: {
    title: "संपर्क करें: मुझसे जुड़ने के तरीके",
    description: {
      line1:
        "मुझसे संपर्क करने में आपकी रुचि के लिए धन्यवाद। मैं आपकी प्रतिक्रिया, प्रश्न और सुझावों का स्वागत करता हूं।",
      line2:
        "यदि आपके पास कोई विशिष्ट प्रश्न या टिप्पणी है, तो कृपया मुझे सीधे ईमेल करें।",
      line3:
        "आइए जुड़ें और अधिक चर्चा करें, आप नीचे दिए गए सोशल मीडिया लिंक का उपयोग करके मुझसे जुड़ सकते हैं।",
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
    // {
    //   id: 15,
    //   name: "MongoDB",
    //   icon: DiMongodb,
    // },
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

  // ============ टाइप एनीमेशन (उपयोग में नहीं) ============
  typeAnimation: {
    one: "मैं एक फ्रंटेंड डेवलपर हूँ",
    two: "मैं एक React डेवलपर हूँ",
    three: "मैं एक कोडर हूँ",
    four: "मुझे सीखने की जिज्ञासा है",
  },

  // ---------------अतिरिक्त सामग्री ------------------------------

  // ============ हीरो ============
  hero: {
    HELLO_THERE: "नमस्ते",
    HELLO_HOW_YOU_DOING: "नमस्ते! 👋 आप कैसे हैं? 🤔",
    RESUME: "Resume",
    CONTACT: "संपर्क करें",
  },

  // ============ प्रोजेक्ट्स ============
  projectsPage: {
    PROJECTS: "प्रोजेक्ट्स",
    VIEW_PROJECT: "View Project",
    VIEW_GITHUB: "View Github",
  },
  // ============ शिक्षा ============
  educationPage: {
    EDUCATION: "शिक्षा",
  },
  // ============ अनुभव ============
  experiencePage: {
    EXPERIENCE: "अनुभव",
  },
  // ============ कौशल ============
  SkillsPage: {
    TECH_I_USE: "मैं जिन तकनीकों का उपयोग करता हूँ",
  },
  // ============ संपर्क करें ============
  contactPage: {
    GET_IN_TOUCH: "संपर्क में रहें:",
    WAYS_TO_CONNECT_ME: "मुझसे जुड़ने के तरीके",
    FOLLOW_ON_FACEBOOK: "फेसबुक पर फॉलो करें",
    FOLLOW_ON_X: "X पर फॉलो करें",
    FOLLOW_ON_INSTA: "इंस्टाग्राम पर फॉलो करें",
    FOLLOW_ON_LINKEDIN: "लिंक्डइन पर फॉलो करें",
    FOLLOW_ON_GITHUB: "गिटहब पर फॉलो करें",
  },

  // ============ FOOTER ============
  footerPage: {
    RIGHTS_RESERVED: "© 2024 Kaushik Jain. All Rights Reserved",
    BACK_TO_TOP: "Go back to top",
  },
};

export default info_hi;
