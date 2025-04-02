
import { Github, Linkedin, Mail, Send, ChartArea, Database, Code, Cloud, Briefcase, School, Link } from "lucide-react";

export const socialLinks = [
  {
    name: "GitHub",
    url: "https://github.com/Apnitin2024",
    icon: Github,
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/nitin-arora-a189a4179/",
    icon: Linkedin,
  },
  {
    name: "Email",
    url: "mailto:contact@nitinarora.com",
    icon: Mail,
  },
];

export const navLinks = [
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "About", href: "#about" },
  { name: "Contact", href: "#contact" },
];

export const projects = [
  {
    id: "project-1",
    title: "Global Client BI Implementation",
    description: "Led the development and deployment of BI solutions for an Italian client, integrating AI and machine learning to enhance reporting accuracy and automate manual processes.",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
    tech: ["Power BI", "AI/ML", "Risk Assessment", "Compliance"],
    demoUrl: "#",
    githubUrl: "https://github.com/Apnitin2024",
  },
  {
    id: "project-2",
    title: "Data Automation & Migration",
    description: "Successfully managed the migration from legacy systems to modern BI platforms (Power BI, Tableau), streamlining data processing and enhancing reporting capabilities.",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
    tech: ["ETL", "Power BI", "Tableau", "Data Processing"],
    demoUrl: "#",
    githubUrl: "https://github.com/Apnitin2024",
  },
  {
    id: "project-3",
    title: "Marketing Campaign Analytics",
    description: "Developed real-time dashboards with Web3 insights to analyze customer engagement, sales trends, and campaign performance using SQL and Python.",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
    tech: ["SQL", "Python", "Web3", "Analytics"],
    demoUrl: "#",
    githubUrl: "https://github.com/Apnitin2024",
  },
  {
    id: "project-4",
    title: "Automated Reporting & Data Pipelines",
    description: "Designed Apache airflows and implemented ETL workflows to automate campaign data extraction and transformation, improving reporting efficiency.",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
    tech: ["Apache Airflow", "ETL", "Tableau", "Marketing Data"],
    demoUrl: "#",
    githubUrl: "https://github.com/Apnitin2024",
  },
];

export const skills = [
  {
    category: "Data & Analytics",
    items: ["SQL", "Python", "R", "ETL", "Big Data", "Power BI", "Tableau", "Data Modeling"],
    icon: ChartArea
  },
  {
    category: "Cloud & Technologies",
    items: ["AWS", "Google Cloud", "Azure Data Platform", "Apache Spark", "InfoSphere", "Denodo Platform"],
    icon: Cloud
  },
  {
    category: "Tools & Software",
    items: ["Excel", "JIRA", "SharePoint", "Power Automate", "SAS", "Sybase", "Visual Studio", "T-SQL"],
    icon: Database
  },
  {
    category: "Expertise",
    items: ["Data Pipelines", "BI Dashboards", "Machine Learning", "ETL Workflows", "Data Governance", "Regulatory Compliance"],
    icon: Briefcase
  },
  {
    category: "Programming",
    items: ["SQL", "Python", "R", "Spark SQL", "T-SQL", "JSON", "HTML"],
    icon: Code
  },
  {
    category: "Certifications",
    items: ["AWS Certified Cloud Practitioner", "Power BI", "Data Analytics", "SQL Advanced", "HubSpot Reporting"],
    icon: School
  },
];

export const aboutMe = {
  summary: "Dynamic BI Developer & Data Analyst with 5+ years of experience in data management, reporting, and business intelligence. Proficient in leveraging Power BI, SQL, Python, and cloud technologies to drive data-driven insights, optimize operations, and support key business decisions.",
  experience: "Proven expertise in full project lifecycle management, from requirement gathering to final delivery, working closely with stakeholders to ensure alignment with business objectives. Strong background in building ETL pipelines, audit analytics, risk assessment, regulatory compliance (SOX, GDPR, PIPEDA), anomaly detection, developing interactive dashboards, and improving data quality.",
  approach: "Experienced in leading teams and mentoring junior analysts while driving the adoption of automation and AI/ML-driven solutions. I focus on creating data-driven solutions that provide actionable insights and improve operational efficiency.",
  education: [
    {
      degree: "Certificate, Data Analytics",
      institution: "University of Toronto",
      year: "2024"
    },
    {
      degree: "Postgrad, Computer Networking",
      institution: "Centennial College",
      year: "2017-2019"
    },
    {
      degree: "Bachelor's, Computer Science",
      institution: "University of Delhi",
      year: "2013-2016"
    }
  ]
};

export const workExperience = [
  {
    role: "Data Analyst",
    company: "SKSR Network Ltd. (IT Outsourcing Company)",
    location: "Toronto, ON",
    period: "Aug 2022 — Present",
    highlights: [
      "Led end-to-end BI projects for multiple clients, including requirement gathering, data extraction, and stakeholder management",
      "Developed AI/ML-driven insights, optimizing operations and driving a 15% improvement in efficiency",
      "Built scalable ETL pipelines (SQL, Python, T-SQL) to manage large datasets, increasing processing speed by 30%",
      "Integrated cloud solutions (AWS, Google Analytics, CRM), enabling scalable data management"
    ]
  },
  {
    role: "SQL Trainer",
    company: "Varsity (A Tutoring Platform)",
    location: "Toronto, ON",
    period: "July 2024 — Present",
    highlights: [
      "Delivered comprehensive SQL training to university and adult learners",
      "Created hands-on exercises, tailored lessons, and real-world scenarios",
      "Achieved a 95% satisfaction rate by providing clear explanations and personalized support"
    ]
  },
  {
    role: "Freelance Data Engineer",
    company: "Self-Employed",
    location: "Toronto, ON",
    period: "Jun 2022 — Jun 2023",
    highlights: [
      "Designed and maintained robust data pipelines for processing and analytics for multiple clients",
      "Implemented cloud-based solutions on AWS and Azure, optimizing for scalability and cost-efficiency",
      "Developed interactive dashboards in Tableau and Power BI for data-driven decision-making",
      "Provided consulting services on data architecture and ETL workflow optimization"
    ]
  },
  {
    role: "Operations Analyst",
    company: "Freshly Mexican Grill",
    location: "Toronto, ON",
    period: "Jan 2019 — Dec 2022",
    highlights: [
      "Optimized inventory management using SQL, Excel, and Power BI, reducing waste by 20%",
      "Streamlined data integration using JSON and HTML, saving 10 hours per week",
      "Analyzed and improved customer service workflows, resulting in 10% improvement in satisfaction scores"
    ]
  }
];
