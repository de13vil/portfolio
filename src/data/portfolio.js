export const portfolioData = {
  personal: {
    name: "Divyansh Meena",
    title: "Software Engineer",
    institute: "MNNIT Allahabad",
    degree: "B.Tech — Electronics & Communication Engineering",
    email: "divyanshmeena5678@gmail.com",
    github: "https://github.com/de13vil",
    linkedin: "https://www.linkedin.com/in/divyansh-meena-497508300/",
    resume: "https://drive.google.com/file/d/1MHgNPKLVpaozhfCV4IQbpveY9buGps3j/view?usp=sharing",
    shortBio: "I build things for the web and solve problems with code.",
    longBio: "I'm an ECE student at MNNIT Allahabad with a strong interest in software engineering. I enjoy building full-stack applications, understanding backend systems, and solving algorithmic problems. I'm continuously improving my DSA, system design, and software development skills.",
  },
  skills: {
    languages: ["C++", "JavaScript", "SQL"],
    frontend: ["React", "Vite", "Tailwind CSS", "HTML", "CSS"],
    backend: ["Node.js", "Express.js", "REST APIs", "JWT", "Google OAuth"],
    database: ["MongoDB", "SQL"],
    computerScience: ["Data Structures & Algorithms", "OOP", "DBMS", "Operating Systems", "Computer Networks", "System Design"],
    tools: ["Git", "GitHub", "VS Code"]
  },
  problemSolving: {
    leetcode: {
      rating: "1878",
      url: "https://leetcode.com/u/Divyansh_1234/"
    }
  },
  projects: [
    {
      id: "01",
      title: "Deadman-Link",
      subtitle: "Intelligent Conditional & Self-Destructing URL System",
      description: "A web application for creating intelligent links with expiration and self-destructing behavior.",
      features: [
        "Short URLs",
        "Custom slugs",
        "Expiry timers",
        "Avatar support",
        "Conditional/self-destructing links"
      ],
      tech: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS", "Framer Motion", "Vite"],
      githubUrl: "https://github.com/de13vil/Deadman-Link",
      liveUrl: null,
      type: "deadman"
    },
    {
      id: "02",
      title: "MedWell — Alchemist's Grimoire",
      subtitle: "Full-stack application built during CodeSangam 2025.",
      description: "A comprehensive healthcare management application developed during the CodeSangam 2025 hackathon to streamline patient-doctor interactions.",
      tech: ["React", "Vite", "Tailwind CSS", "Node.js", "Express", "MongoDB", "JWT"],
      githubUrl: "https://github.com/de13vil/MedWell/tree/master",
      liveUrl: null,
      type: "medwell"
    }
  ],
  journey: [
    {
      period: "Current",
      role: "B.Tech — Electronics & Communication Engineering",
      institution: "MNNIT Allahabad",
      description: "Focus areas: Software Engineering, DSA, Web Development, Competitive Programming, Backend Development, System Design."
    },
    {
      period: "Projects & Development",
      role: "Full-Stack Developer",
      institution: "Personal & Hackathon Projects",
      description: "Built Deadman-Link (Conditional URL System) and MedWell — Alchemist's Grimoire (CodeSangam 2025)."
    }
  ]
};
