import { create } from "zustand";

export const useMedicalKitStore = create((set) => ({
  data: [],
  loading: false,
  error: null,
  getMedicalKitData: async () => {
    set({ loading: true, error: null });
    try {
      const response = await fetch("/public/data/medical-kit.json");
      if (response.ok) {
        const data = await response.json();
        set({ data: data });
        set({ loading: false, error: null });
      }
    } catch (err) {
      set({ err: "something happends", loading: false });
    }
  },
}));
