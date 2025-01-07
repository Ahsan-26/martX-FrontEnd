import { create } from 'zustand';

const useUIStore = create((set) => ({
    theme: 'light',
    sidebarOpen: false,

    toggleTheme: () => set((state) => ({ theme: state.theme === 'light' ? 'dark' : 'light' })),

    toggleSidebar: () => set((state) => ({ sidebarOpen: !state.sidebarOpen })),
}));

export default useUIStore;
