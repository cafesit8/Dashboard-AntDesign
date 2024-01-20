import { create } from 'zustand'

type PropsDrawer = {
  isOpen: boolean
  handleOpen: () => void
}

export const useDrawerStore = create<PropsDrawer>((set, get) => ({
  isOpen: false,
  handleOpen: () => {
    get().isOpen ? set({ isOpen: false }) : set({ isOpen: true })
  }
}))
