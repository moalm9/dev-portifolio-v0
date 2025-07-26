"use client"

import { useState } from "react"
import { ChevronDown, ChevronRight, Folder, FolderOpen } from "lucide-react"

interface FileNode {
  name: string
  type: "file" | "folder"
  children?: FileNode[]
  extension?: string
}

const fileStructure: FileNode[] = [
  {
    name: "src",
    type: "folder",
    children: [
      {
        name: "components",
        type: "folder",
        children: [
          { name: "VideoPlayer.tsx", type: "file", extension: "tsx" },
          { name: "ConferenceRoom.tsx", type: "file", extension: "tsx" },
          { name: "ProjectCard.tsx", type: "file", extension: "tsx" },
        ],
      },
      {
        name: "pages",
        type: "folder",
        children: [
          { name: "index.tsx", type: "file", extension: "tsx" },
          { name: "about.tsx", type: "file", extension: "tsx" },
          { name: "projects.tsx", type: "file", extension: "tsx" },
        ],
      },
      { name: "styles", type: "folder", children: [{ name: "globals.css", type: "file", extension: "css" }] },
    ],
  },
  { name: "README.md", type: "file", extension: "md" },
  { name: "package.json", type: "file", extension: "json" },
  { name: "tsconfig.json", type: "file", extension: "json" },
  { name: "tailwind.config.js", type: "file", extension: "js" },
  { name: ".gitignore", type: "file", extension: "gitignore" },
  { name: "resume.pdf", type: "file", extension: "pdf" },
]

interface FileExplorerProps {
  currentFile: string
  setCurrentFile: (file: string) => void
}

export function FileExplorer({ currentFile, setCurrentFile }: FileExplorerProps) {
  const [expandedFolders, setExpandedFolders] = useState<Set<string>>(new Set(["src"]))

  const toggleFolder = (folderName: string) => {
    const newExpanded = new Set(expandedFolders)
    if (newExpanded.has(folderName)) {
      newExpanded.delete(folderName)
    } else {
      newExpanded.add(folderName)
    }
    setExpandedFolders(newExpanded)
  }

  const getFileIcon = (extension?: string) => {
    switch (extension) {
      case "tsx":
      case "jsx":
        return "⚛️"
      case "js":
        return "📜"
      case "ts":
        return "🔷"
      case "css":
        return "🎨"
      case "json":
        return "📋"
      case "md":
        return "📝"
      case "pdf":
        return "📄"
      case "gitignore":
        return "🚫"
      default:
        return "📄"
    }
  }

  const renderFileNode = (node: FileNode, depth = 0, path = "") => {
    const fullPath = path ? `${path}/${node.name}` : node.name
    const isExpanded = expandedFolders.has(fullPath)
    const isSelected = currentFile === node.name

    return (
      <div key={fullPath}>
        <div
          className={`flex items-center py-1 px-2 cursor-pointer hover:bg-[#2a2d2e] ${isSelected ? "bg-[#37373d] text-white" : "text-gray-300"}`}
          style={{ paddingLeft: `${depth * 16 + 8}px` }}
          onClick={() => {
            if (node.type === "folder") {
              toggleFolder(fullPath)
            } else {
              setCurrentFile(node.name)
            }
          }}
        >
          {node.type === "folder" ? (
            <>
              {isExpanded ? <ChevronDown className="w-4 h-4 mr-1" /> : <ChevronRight className="w-4 h-4 mr-1" />}
              {isExpanded ? (
                <FolderOpen className="w-4 h-4 mr-2 text-blue-400" />
              ) : (
                <Folder className="w-4 h-4 mr-2 text-blue-400" />
              )}
            </>
          ) : (
            <>
              <span className="w-5 mr-1"></span>
              <span className="mr-2">{getFileIcon(node.extension)}</span>
            </>
          )}
          <span className="text-sm">{node.name}</span>
        </div>
        {node.type === "folder" && isExpanded && node.children && (
          <div>{node.children.map((child) => renderFileNode(child, depth + 1, fullPath))}</div>
        )}
      </div>
    )
  }

  return (
    <div className="text-sm">
      <div className="text-gray-400 uppercase text-xs font-semibold mb-2 px-2">Explorer</div>
      <div className="text-white font-semibold mb-2 px-2 flex items-center">
        <ChevronDown className="w-4 h-4 mr-1" />
        MOHAMMED-ALMONIFY-PORTFOLIO
      </div>
      {fileStructure.map((node) => renderFileNode(node))}
    </div>
  )
}
