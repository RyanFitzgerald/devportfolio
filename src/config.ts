export const siteConfig = {
  name: "Anil Kumar Yalla",
  title: "Software Engineer II",
  description:
    "Software Engineer with 4+ years of experience building and scaling backend systems using Go, Python, Java, and PostgreSQL. Proven success in optimizing SD-WAN management systems, automating deployments, and modernizing legacy applications. Skilled in designing high-performance APIs, implementing CI/CD pipelines, and improving infrastructure reliability across distributed systems.",
  resumeUrl: "https://github.com/anilkumar2809/resume.pdf",
  accentColor: "#1d4ed8",
  social: {
    email: "anilkumaryalla88@gmail.com",
    linkedin: "https://www.linkedin.com/in/anilkumar2809",
    github: "https://github.com/anilkumar2809",
  },

  aboutMe:
    "Software Engineer experienced in backend and full-stack development, modernizing legacy systems, and optimizing distributed applications. Skilled in Go, Python, Java, PostgreSQL, Django, and containerization technologies. Passionate about building reliable and high-performance software, automating processes, and improving observability and infrastructure reliability.",
  skills: [
    "Go",
    "Python",
    "Java",
    "PostgreSQL",
    "Django",
    "MongoDB",
    "Gin",
    "JavaScript",
    "Elastic Stack",
    "Jenkins",
    "Nginx",
    "Docker",
    "AWS",
    "Ansible",
    "Patroni",
    "MailHog",
  ],

projects: [
  {
    name: "Legacy Module Modernization",
    description:
      "Migrated legacy Perl-based SD-WAN management modules to Golang (Gin) using Strangler Fig pattern. Boosted API performance 5×, enabled containerization, and ensured backward compatibility following REST standards.",
    skills: ["Go", "Gin", "REST API", "Containerization", "Perl"],
    link: "", // optional: add GitHub or internal link
  },
  {
    name: "Firmware Upgrade System",
    description:
      "Developed server-side Go feature in SD-WAN NMS to enable firmware upgrades for 500K+ edge devices. Implemented asynchronous pull and throttled scheduling, improving throughput 10× while minimizing service disruptions.",
    skills: ["Go", "SD-WAN", "Asynchronous Processing", "Telemetry", "Scalability"],
    link: "", // optional
  },
  {
    name: "Internal Engineering Portal",
    description:
      "Designed and launched a Django-based monitoring dashboard used by 20+ engineers for real-time visualization of network and system performance. Integrated automation and ETL pipelines to process edge device telemetry and expose REST APIs, enabling cross-team analytics, improving operational efficiency and reducing manual monitoring.",
    skills: ["Django", "Python", "JavaScript", "MongoDB", "Jenkins", "Nginx", "REST API", "ETL"],
    link: "", // optional
  }
],


  experience: [
    {
      company: "Hughes Network Systems",
      title: "Software Engineer",
      dateRange: "Feb 2023 - Present",
      bullets: [
        "Spearheaded PostgreSQL upgrade from v11 to v16, improving performance and limiting downtime to 1 hour.",
        "Modernized Perl-based SD-WAN management modules to Golang (Gin) via Strangler Fig pattern, boosting API performance 5× and enabling containerization.",
        "Implemented server-side Go features for firmware upgrades across 500K+ edge devices, improving throughput 10×.",
        "Deployed Elastic Stack (ELK) for centralized logging and observability, reducing debug time 10%.",
        "Designed internal engineering portal (Django, Python, JS, Nginx) used by 20+ engineers, reducing issue detection time by 20%.",
        "Redesigned deployment pipeline with pre-window configuration generation, automation scripts, sanity checks, and rollbacks, cutting downtime from 2 hours to 30 minutes.",
        "Developed ETL pipelines to process edge device telemetry and expose REST APIs for analytics, reducing manual monitoring by 40%.",
        "Mentored interns and new hires, accelerating onboarding and team productivity.",
      ],
    },
    {
      company: "Accenture",
      title: "Java Software Developer",
      dateRange: "May 2018 - Jul 2019",
      bullets: [
        "Upgraded banking application from Java 6 to Java 8 and WebLogic to JBoss, boosting performance by 20% and improving security.",
        "Implemented REST APIs with Spring Boot for data retrieval and validation across 3 internal applications, reducing manual processing time.",
        "Developed and integrated a web-based document upload feature, reducing handling time by 10% for support calls.",
        "Received ACE Client and Customer Award for consistent performance and project excellence.",
      ],
    },
  ],

  education: [
    {
      school: "North Carolina State University",
      degree: "Master of Computer Science",
      dateRange: "Jan 2021 - Dec 2022",
      achievements: ["GPA: 4.00 / 4.00"],
    },
    {
      school: "Sreenidhi Institute of Science and Technology",
      degree: "Bachelor of Technology in Computer Science and Engineering",
      dateRange: "Aug 2014 - Apr 2018",
      achievements: ["GPA: 8.7 / 10.0"],
    },
  ],
};
