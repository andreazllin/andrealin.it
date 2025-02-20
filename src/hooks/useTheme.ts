import { useTheme as useNextTheme } from "next-themes"

const useTheme = () => {
  const { theme, setTheme } = useNextTheme()

  return {
    theme,
    isDark: theme === "dark",
    isLight: theme === "light",
    toggleTheme: () => setTheme(theme === "dark" ? "light" : "dark")
  }
}

export default useTheme
