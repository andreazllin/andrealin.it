import { createSelectors } from "@/helpers/zustand"
import { create } from "zustand"

interface UseNavbarStore {
  isNavbarOpen: boolean
  openNavbar: () => void
  closeNavbar: () => void
}

export const useNavbarStore = create<UseNavbarStore>((set) => ({
  isNavbarOpen: false,
  openNavbar: (): void => set({ isNavbarOpen: true }),
  closeNavbar: (): void => set({ isNavbarOpen: false })
}))

export default createSelectors(useNavbarStore)
