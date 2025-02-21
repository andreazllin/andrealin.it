"use client"

import * as React from "react"
import { ThemeProvider as NextThemesProvider } from "next-themes"
import { Button } from "./ui/button"
import { LoaderCircleIcon, MoonIcon, SunIcon } from "lucide-react"
import useTheme from "@/hooks/useTheme"

export function ThemeProvider({
  children,
  ...props
}: React.ComponentProps<typeof NextThemesProvider>) {
  return (
    <NextThemesProvider {...props}>
      <>
        {children}
        <ThemeToggle className="fixed right-6 bottom-6 z-10" />
      </>
    </NextThemesProvider>
  )
}

export const ThemeToggle: React.FunctionComponent<{ className?: string }> = ({
  className
}) => {
  const [mounted, setMounted] = React.useState(false)
  const { isDark, toggleTheme } = useTheme()

  // useEffect only runs on the client, so now we can safely show the UI
  React.useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <Button size="icon" disabled className={className}>
        <LoaderCircleIcon className="animate-spin" />
      </Button>
    )
  }

  return (
    <Button size="icon" onClick={toggleTheme} className={className}>
      {isDark ? <SunIcon /> : <MoonIcon />}
    </Button>
  )
}
