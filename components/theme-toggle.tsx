"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return <div className="w-9 h-9 rounded-md border border-slate-200 bg-white/10 backdrop-blur-sm" />
  }

  return (
    <button
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      className="w-9 h-9 rounded-md border border-slate-200 dark:border-slate-700 bg-white/10 dark:bg-black/10 backdrop-blur-sm hover:bg-white/20 dark:hover:bg-black/20 transition-all duration-200 flex items-center justify-center"
      aria-label="Toggle theme"
    >
      {theme === "light" ? (
        <Moon className="h-4 w-4 text-slate-800 transition-transform duration-200" />
      ) : (
        <Sun className="h-4 w-4 text-white transition-transform duration-200" />
      )}
    </button>
  )
}
