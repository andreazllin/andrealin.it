import { useTheme } from "next-themes"

type UseDarkMode = () => {
  isDark: boolean
  toggleDarkMode: () => void
}

const useDarkMode: UseDarkMode = () => {
  const { theme, setTheme } = useTheme()

  return {
    isDark: theme === "dark",
    toggleDarkMode: () => setTheme(theme === "dark" ? "light" : "dark")
  }
}

export default useDarkMode
