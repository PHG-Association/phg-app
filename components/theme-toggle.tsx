"use client"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { useEffect, useState } from "react"

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return <div className="w-10 h-10 rounded-lg bg-white/10 backdrop-blur-md border border-white/20 animate-pulse" />
  }

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light")
  }

  return (
    <button
      onClick={toggleTheme}
      className="relative w-10 h-10 rounded-lg bg-white/10 dark:bg-black/20 backdrop-blur-md border border-white/20 dark:border-white/10 hover:bg-white/20 dark:hover:bg-black/30 transition-all duration-300 flex items-center justify-center group"
      aria-label="Toggle theme"
    >
      <Sun
        className={`absolute h-5 w-5 transition-all duration-500 ease-in-out ${
          theme === "dark" ? "opacity-0 scale-0 rotate-90" : "opacity-100 scale-100 rotate-0"
        } text-[#0B1957] dark:text-yellow-400`}
      />
      <Moon
        className={`absolute h-5 w-5 transition-all duration-500 ease-in-out ${
          theme === "light" ? "opacity-0 scale-0 -rotate-90" : "opacity-100 scale-100 rotate-0"
        } text-[#0B1957] dark:text-blue-200`}
      />
    </button>
  )
}
