import { create } from 'zustand'

const useViewedStore = create((set) => ({
  viewedItems: [],

  addViewedItem: (item) =>
    set((state) => {
      // Не добавлять, если уже просмотрен
      if (state.viewedItems.some((i) => i.id === item.id)) return state
      return { viewedItems: [...state.viewedItems, item] }
    }),

  clearViewedItems: () => set({ viewedItems: [] })
}))

export default useViewedStore
