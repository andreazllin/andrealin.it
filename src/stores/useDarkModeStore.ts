import { create } from "zustand"
import { persist, createJSONStorage } from "zustand/middleware"
import { createSelectors } from "@/helpers/zustand"
import { immer } from "zustand/middleware/immer"

interface UseDarkModeStore {
  isDark: boolean
  toggleDarkMode(): void
}

export const useDarkModeStore = create<UseDarkModeStore>()(
  persist(
    immer(
      (set, get) => ({
        isDark: true,
        toggleDarkMode: (): void => set({ isDark: !get().isDark })
      })
    ),
    {
      name: "dark-mode",
      storage: createJSONStorage(() => localStorage)
    }
  )
)

export default createSelectors(useDarkModeStore)
