interface CodeEditorProps {
  currentFile: string
}

export function CodeEditor({ currentFile }: CodeEditorProps) {
  const getFileContent = (filename: string) => {
    switch (filename) {
      case "README.md":
        return `# Mohammed Al-Monify - Portfolio

## About Me
Software Developer with over 2 years of experience of building responsive and user-focused web applications using React.js, Next.js, Tailwind CSS, and related technologies. Strong understanding of UI/UX design principles, API integration, and frontend performance optimization.

## Skills
- **Frontend**: React.js, Next.js, Tailwind CSS, JavaScript, TypeScript, ShadCN, TanStack Query
- **Backend**: Node.js, Express.js
- **UI/UX & Tools**: Figma, Git, GitHub, RPA (UiPath)
- **Databases**: PostgreSQL, MySQL, SQL Server
- **DevOps & Systems**: Docker, CI/CD (GitHub Actions, Azure DevOps), Linux (Ubuntu), systemd services

## Experience

### Sohobcom Company – Sana'a, Yemen
**Full-stack Developer** | Feb 2024 – Present
- Developed user interfaces and frontend features with high responsiveness and performance
- Integrated RESTful APIs, improved frontend state management, and optimized API consumption
- Participated in architectural decisions, scalability planning, and cross-functional coordination

### Quality Connect Company – Sana'a, Yemen
**Software Developer** | Dec 2022 – Jan 2024
- Developed C# applications and integrated RESTful APIs for business-critical systems
- Automated internal workflows using UiPath, improving operational efficiency
- Collaborated on feature development and backend enhancements using Laravel

### Yottagate Company – Sana'a, Yemen
**Web Developer Intern** | Sep 2022 – Nov 2022
- Implemented and updated frontend UI components based on design guidelines
- Worked with API integration and minor UI/UX improvements

### Temmam Lite Company – Sana'a, Yemen
**Full Stack Developer Intern** | Dec 2021 – Feb 2022
- Focused on feature development, bug fixing, and team collaboration

## Featured Projects

### 1. Video Streaming Platform – Sohobcom
**Backend Developer** | 2025
- Contributed mainly to backend development and enhancement using Node.js, Express.js, and PostgreSQL
- Integrated system services using systemd and improved backend performance and scalability

### 2. Video Conferencing Platform – Sohobcom
**Frontend Developer** | 2024
- Developed UI components using React.js, Next.js, Tailwind CSS, TanStack Query, and ShadCN
- Focused on implementing new features, fixing bugs, and improving overall user experience
- Collaborated with cross-functional teams to integrate APIs and optimize frontend performance

## Education
- Bachelor of Information Technology | Sana'a University | Sana'a, Yemen (2018 - 2022)
- Excellent with Honors • CGPA 90%

## Languages
- Arabic – Native
- English – Good (verbal and written)

## Contact
- 📧 mo.almonify@gmail.com
- 📱 +967 772 837 338
- 💼 [LinkedIn](https://linkedin.com/in/mohammedalmonify)
- 🌍 Sana'a, Yemen`

      case "package.json":
        return `{
  "name": "mohammed-almonify-portfolio",
  "version": "1.0.0",
  "description": "Personal portfolio showcasing my development skills",
  "author": {
    "name": "Mohammed Al-Monify",
    "email": "mo.almonify@gmail.com",
    "location": "Sana'a, Yemen"
  },
  "skills": {
    "frontend": ["React.js", "Next.js", "Tailwind CSS", "JavaScript", "TypeScript", "ShadCN", "TanStack Query"],
    "backend": ["Node.js", "Express.js"],
    "tools": ["Figma", "Git", "GitHub", "RPA (UiPath)"],
    "databases": ["PostgreSQL", "MySQL", "SQL Server"],
    "devops": ["Docker", "CI/CD", "Linux", "systemd"]
  },
  "experience": {
    "years": 2,
    "current_role": "Full-stack Developer",
    "company": "Sohobcom"
  },
  "education": {
    "degree": "Bachelor of Information Technology",
    "institution": "Sana'a University",
    "graduation": 2022,
    "honors": "Excellent with Honors",
    "cgpa": "90%"
  },
  "contact": {
    "email": "mo.almonify@gmail.com",
    "phone": "+967 772 837 338",
    "linkedin": "linkedin.com/in/mohammedalmonify",
    "location": "Sana'a, Yemen"
  }
}`

      case "projects.tsx":
        return `
import React from 'react';

interface Project {
  id: string;
  title: string;
  company: string;
  role: string;
  period: string;
  description: string;
  tech: string[];
  achievements: string[];
}

const projects: Project[] = [
  {
    id: '1',
    title: 'Video Streaming Platform',
    company: 'Sohobcom',
    role: 'Backend Developer',
    period: '2025',
    description: 'A scalable video streaming platform with robust backend architecture',
    tech: ['Node.js', 'Express.js', 'PostgreSQL', 'systemd'],
    achievements: [
      'Contributed to backend development and enhancement',
      'Integrated system services using systemd',
      'Improved backend performance and scalability'
    ]
  },
  {
    id: '2',
    title: 'Video Conferencing Platform',
    company: 'Sohobcom',
    role: 'Frontend Developer',
    period: '2024',
    description: 'Modern video conferencing solution with advanced UI features',
    tech: ['React.js', 'Next.js', 'Tailwind CSS', 'TanStack Query', 'ShadCN'],
    achievements: [
      'Developed responsive UI components',
      'Implemented new features and fixed bugs',
      'Optimized frontend performance',
      'Collaborated on API integration'
    ]
  }
];

export const ProjectsPage: React.FC = () => {
  return (
    <div className="projects-container">
      <h1>Featured Projects</h1>
      {projects.map(project => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
  );
};`

      default:
        return `// ${filename}
// This file is part of Mohammed Al-Monify's portfolio

export default function ${filename.replace(/\.[^/.]+$/, "")}() {
  return (
    <div>
      <h1>Welcome to my portfolio!</h1>
      <p>This is the ${filename} file.</p>
    </div>
  );
}`
    }
  }

  const getLanguage = (filename: string) => {
    const ext = filename.split(".").pop()
    switch (ext) {
      case "tsx":
      case "jsx":
        return "typescript"
      case "js":
        return "javascript"
      case "ts":
        return "typescript"
      case "json":
        return "json"
      case "md":
        return "markdown"
      case "css":
        return "css"
      default:
        return "text"
    }
  }

  return (
    <div className="h-full flex flex-col">
      {/* File tab */}
      <div className="bg-[#2d2d30] border-b border-[#3e3e42] px-4 py-2">
        <span className="text-white text-sm flex items-center gap-2">
          <span>{currentFile.endsWith(".tsx") ? "⚛️" : "📄"}</span>
          {currentFile}
          <span className="text-gray-500 ml-2">●</span>
        </span>
      </div>

      {/* Line numbers and content */}
      <div className="flex-1 flex overflow-hidden">
        <div className="bg-[#1e1e1e] text-gray-500 text-right pr-4 py-4 text-sm font-mono select-none">
          {getFileContent(currentFile)
            .split("\n")
            .map((_, index) => (
              <div key={index} className="leading-6">
                {index + 1}
              </div>
            ))}
        </div>
        <div className="flex-1 bg-[#1e1e1e] text-gray-300 p-4 overflow-auto font-mono text-sm">
          <pre className="whitespace-pre-wrap leading-6">
            <code className={`language-${getLanguage(currentFile)}`}>{getFileContent(currentFile)}</code>
          </pre>
        </div>
      </div>
    </div>
  )
}
