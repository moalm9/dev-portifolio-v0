"use client"

import { useState } from "react"
import { Terminal } from "../components/Terminal"
import { FileExplorer } from "../components/FileExplorer"
import { CodeEditor } from "../components/CodeEditor"
import { Console } from "../components/Console"

export default function DevPortfolio() {
  const [activeTab, setActiveTab] = useState("terminal")
  const [currentFile, setCurrentFile] = useState("README.md")

  return (
    <div className="min-h-screen bg-[#1e1e1e] text-green-400 font-mono">
      {/* VS Code-like header */}
      <div className="bg-[#2d2d30] border-b border-[#3e3e42] px-4 py-2">
        <div className="flex items-center gap-2">
          <div className="flex gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
          </div>
          <span className="ml-4 text-white text-sm">mohammed-almonify-portfolio - Visual Studio Code</span>
        </div>
      </div>

      {/* Tab bar */}
      <div className="bg-[#2d2d30] border-b border-[#3e3e42] flex">
        {[
          { id: "terminal", label: "$ terminal", icon: ">" },
          { id: "explorer", label: "explorer.js", icon: "📁" },
          { id: "projects", label: "projects.tsx", icon: "⚛️" },
          { id: "console", label: "console.log", icon: "🔍" },
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-4 py-2 text-sm border-r border-[#3e3e42] flex items-center gap-2 ${activeTab === tab.id ? "bg-[#1e1e1e] text-white border-b-2 border-blue-500" : "text-gray-400 hover:text-white hover:bg-[#3e3e42]"}`}
          >
            <span>{tab.icon}</span>
            {tab.label}
          </button>
        ))}
      </div>

      {/* Main content area */}
      <div className="flex h-[calc(100vh-120px)]">
        {/* Sidebar */}
        <div className="w-64 bg-[#252526] border-r border-[#3e3e42] p-4">
          <FileExplorer currentFile={currentFile} setCurrentFile={setCurrentFile} />
        </div>

        {/* Main panel */}
        <div className="flex-1 bg-[#1e1e1e]">
          {activeTab === "terminal" && <Terminal />}
          {activeTab === "explorer" && <CodeEditor currentFile={currentFile} />}
          {activeTab === "projects" && <CodeEditor currentFile="projects.tsx" />}
          {activeTab === "console" && <Console />}
        </div>
      </div>

      {/* Status bar */}
      <div className="bg-[#007acc] text-white px-4 py-1 text-xs flex justify-between">
        <div className="flex items-center gap-4">
          <span>⚡ main</span>
          <span>✓ Prettier</span>
          <span>TypeScript React</span>
        </div>
        <div className="flex items-center gap-4">
          <span>Ln 42, Col 12</span>
          <span>UTF-8</span>
          <span>LF</span>
        </div>
      </div>
    </div>
  )
}
