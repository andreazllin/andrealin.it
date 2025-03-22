import { useTheme as useNextTheme } from "next-themes"

const useTheme = () => {
  const { theme, resolvedTheme, setTheme } = useNextTheme()

  return {
    theme: theme,
    isDark: theme === "dark",
    isLight: theme === "light",
    isSystem: theme === "system",
    isResolvedDark: resolvedTheme === "dark",
    isResolvedLight: resolvedTheme === "light",
    cycleTheme: () => {
      if (theme === "system") {
        setTheme("dark")
      } else if (theme === "dark") {
        setTheme("light")
      } else {
        setTheme("system")
      }
    }
  }
}

export default useTheme
