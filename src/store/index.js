import { create } from "zustand";

const useStore = create((set) => ({
  apiCurrencies: [],
  currencies: [],
  setApiCurrencies: (data) =>
    set((state) => {
      if (state.currencies.length === 0) {
        state.setCurrencies(data);
      }
      return { apiCurrencies: data };
    }),
  setCurrencies: (data) => set({ currencies: data }),
}));

export { useStore };
