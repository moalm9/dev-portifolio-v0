"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"

export function Terminal() {
  const [input, setInput] = useState("")
  const [history, setHistory] = useState<string[]>([])
  const [commandHistory, setCommandHistory] = useState<string[]>([])
  const [historyIndex, setHistoryIndex] = useState(-1)
  const inputRef = useRef<HTMLInputElement>(null)

  const commands = {
    help: () => [
      "Available commands:",
      "  about     - Learn about me",
      "  skills    - View my technical skills",
      "  projects  - See my projects",
      "  contact   - Get my contact information",
      "  experience- View my work experience",
      "  clear     - Clear the terminal",
      "  whoami    - Display current user",
      "  ls        - List directory contents",
    ],
    about: () => [
      "Mohammed Al-Monify - Software Developer",
      "======================================",
      "",
      "Software Developer with over 2 years of experience of building responsive",
      "and user-focused web applications using React.js, Next.js, Tailwind CSS,",
      "and related technologies. Strong understanding of UI/UX design principles,",
      "API integration, and frontend performance optimization.",
      "",
      "Currently focused on:",
      "• Frontend development with React/Next.js",
      "• Backend services with Node.js/Express.js",
      "• UI/UX design and optimization",
      "• DevOps and system services"
    ],
    skills: () => [
      "Technical Skills:",
      "================",
      "",
      "Frontend:      React.js, Next.js, Tailwind CSS, JavaScript, TypeScript, ShadCN, TanStack Query",
      "Backend:       Node.js, Express.js",
      "UI/UX & Tools: Figma, Git, GitHub, RPA (UiPath)",
      "Databases:     PostgreSQL, MySQL, SQL Server",
      "DevOps:        Docker, CI/CD (GitHub Actions, Azure DevOps), Linux (Ubuntu), systemd services"
    ],
    projects: () => [
      "Featured Projects:",
      "==================",
      "",
      "1. Video Streaming Platform – Sohobcom (2025)",
      "   → Backend development with Node.js, Express.js, and PostgreSQL",
      "   → System services integration and performance optimization",
      "",
      "2. Video Conferencing Platform – Sohobcom (2024)",
      "   → Frontend development with React.js, Next.js, and TanStack Query",
      "   → UI components and feature implementation",
      "   → API integration and performance optimization"
    ],
    contact: () => [
      "Contact Information:",
      "===================",
      "",
      "Email:     mo.almonify@gmail.com",
      "Phone:     +967 772 837 338",
      "LinkedIn:  linkedin.com/in/mohammedalmonify",
      "Location:  Sana'a, Yemen"
    ],
    experience: () => [
      "Work Experience:",
      "================",
      "",
      "Full-stack Developer @ Sohobcom (Feb 2024-Present)",
      "• Developing responsive user interfaces and frontend features",
      "• Integrating RESTful APIs and optimizing frontend performance",
      "• Contributing to architectural decisions and scalability planning",
      "",
      "Software Developer @ Quality Connect (Dec 2022-Jan 2024)",
      "• Developed C# applications and integrated RESTful APIs",
      "• Automated workflows using UiPath and enhanced backend with Laravel",
      "",
      "Web Developer Intern @ Yottagate (Sep 2022-Nov 2022)",
      "• Implemented frontend UI components and integrated APIs",
      "",
      "Full Stack Developer Intern @ Temmam Lite (Dec 2021-Feb 2022)",
      "• Focused on feature development and bug fixing"
    ],
    whoami: () => ["mohammed-almonify"],
    ls: () => [
      "total 8",
      "drwxr-xr-x  2 mohammed-almonify staff   64 Feb 15 10:30 projects/",
      "drwxr-xr-x  2 mohammed-almonify staff   64 Feb 15 10:30 skills/",
      "-rw-r--r--  1 mohammed-almonify staff 1234 Feb 15 10:30 README.md",
      "-rw-r--r--  1 mohammed-almonify staff  567 Feb 15 10:30 package.json",
      "-rw-r--r--  1 mohammed-almonify staff  890 Feb 15 10:30 resume.pdf",
    ],
    clear: () => {
      setHistory([])
      return []
    },
  }

  useEffect(() => {
    setHistory([
      "Welcome to Mohammed Al-Monify's Portfolio Terminal!",
      "=================================================",
      "",
      'Type "help" to see available commands.',
      "Use ↑/↓ arrow keys to navigate command history.",
      "",
    ])
  }, [])

  useEffect(() => {
    inputRef.current?.focus()
  }, [])

  const handleCommand = (cmd: string) => {
    const trimmedCmd = cmd.trim().toLowerCase()
    const newHistory = [...history, `$ ${cmd}`]

    if (trimmedCmd === "clear") {
      commands.clear()
      return
    }

    if (commands[trimmedCmd as keyof typeof commands]) {
      const output = commands[trimmedCmd as keyof typeof commands]()
      setHistory([...newHistory, ...output, ""])
    } else if (trimmedCmd === "") {
      setHistory([...newHistory])
    } else {
      setHistory([...newHistory, `Command not found: ${cmd}`, 'Type "help" for available commands.', ""])
    }

    if (cmd.trim()) {
      setCommandHistory((prev) => [...prev, cmd])
    }
    setHistoryIndex(-1)
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleCommand(input)
      setInput("")
    } else if (e.key === "ArrowUp") {
      e.preventDefault()
      if (commandHistory.length > 0) {
        const newIndex = historyIndex === -1 ? commandHistory.length - 1 : Math.max(0, historyIndex - 1)
        setHistoryIndex(newIndex)
        setInput(commandHistory[newIndex])
      }
    } else if (e.key === "ArrowDown") {
      e.preventDefault()
      if (historyIndex !== -1) {
        const newIndex = historyIndex + 1
        if (newIndex >= commandHistory.length) {
          setHistoryIndex(-1)
          setInput("")
        } else {
          setHistoryIndex(newIndex)
          setInput(commandHistory[newIndex])
        }
      }
    }
  }

  return (
    <div className="p-4 h-full overflow-auto" onClick={() => inputRef.current?.focus()}>
      <div className="space-y-1">
        {history.map((line, index) => (
          <div key={index} className="whitespace-pre-wrap">
            {line.startsWith("$") ? (
              <span className="text-yellow-400">{line}</span>
            ) : (
              <span className="text-green-400">{line}</span>
            )}
          </div>
        ))}
        <div className="flex items-center">
          <span className="text-yellow-400 mr-2">$</span>
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            className="bg-transparent outline-none flex-1 text-green-400"
            autoFocus
          />
        </div>
      </div>
    </div>
  )
}
