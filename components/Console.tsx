"use client"

import { useState, useEffect } from "react"

export function Console() {
  const [logs, setLogs] = useState<
    Array<{
      type: "log" | "warn" | "error" | "info"
      message: string
      timestamp: string
    }>
  >([])

  useEffect(() => {
    const initialLogs = [
      {
        type: "info" as const,
        message: "🚀 Portfolio application started",
        timestamp: new Date().toLocaleTimeString(),
      },
      {
        type: "log" as const,
        message: "📊 Loading developer profile...",
        timestamp: new Date().toLocaleTimeString(),
      },
      {
        type: "log" as const,
        message: "✅ Skills loaded: React.js, Next.js, Node.js, TypeScript, Tailwind CSS",
        timestamp: new Date().toLocaleTimeString(),
      },
      {
        type: "log" as const,
        message: "✅ Projects loaded: 2 featured projects",
        timestamp: new Date().toLocaleTimeString(),
      },
      {
        type: "log" as const,
        message: "✅ Experience loaded: 2+ years",
        timestamp: new Date().toLocaleTimeString(),
      },
      {
        type: "warn" as const,
        message: "⚠️  Still looking for new opportunities!",
        timestamp: new Date().toLocaleTimeString(),
      },
      {
        type: "info" as const,
        message: "💼 Current role: Full-stack Developer @ Sohobcom",
        timestamp: new Date().toLocaleTimeString(),
      },
      {
        type: "log" as const,
        message: "🎯 Interests: Frontend Development, UI/UX Design, DevOps",
        timestamp: new Date().toLocaleTimeString(),
      },
      {
        type: "log" as const,
        message: "📍 Location: Sana'a, Yemen",
        timestamp: new Date().toLocaleTimeString(),
      },
      {
        type: "info" as const,
        message: "📧 Contact: mo.almonify@gmail.com",
        timestamp: new Date().toLocaleTimeString(),
      },
    ]

    // Simulate loading logs one by one
    initialLogs.forEach((log, index) => {
      setTimeout(() => {
        setLogs((prev) => [...prev, log])
      }, index * 500)
    })
  }, [])

  const getLogColor = (type: string) => {
    switch (type) {
      case "error":
        return "text-red-400"
      case "warn":
        return "text-yellow-400"
      case "info":
        return "text-blue-400"
      default:
        return "text-green-400"
    }
  }

  const getLogIcon = (type: string) => {
    switch (type) {
      case "error":
        return "❌"
      case "warn":
        return "⚠️"
      case "info":
        return "ℹ️"
      default:
        return "📝"
    }
  }

  return (
    <div className="h-full p-4 overflow-auto font-mono text-sm">
      <div className="mb-4 text-gray-400">Console - Developer Profile Logs</div>
      <div className="space-y-1">
        {logs.map((log, index) => (
          <div key={index} className="flex items-start gap-2">
            <span className="text-gray-500 text-xs mt-1 w-20 flex-shrink-0">{log.timestamp}</span>
            <span className="mt-1">{getLogIcon(log.type)}</span>
            <span className={`${getLogColor(log.type)} flex-1`}>{log.message}</span>
          </div>
        ))}
        <div className="flex items-center gap-2 mt-4">
          <span className="text-gray-500 text-xs w-20">{new Date().toLocaleTimeString()}</span>
          <span>💡</span>
          <span className="text-blue-400 animate-pulse">Ready to collaborate on your next project...</span>
        </div>
      </div>
    </div>
  )
}
