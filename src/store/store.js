import { create } from "zustand";

const useStore = create((set) => ({
  currenciesData: [],
  currenciesList: [],
  ratesByBase: {},
  setCurrenciesData: (data) =>
    set((state) => {
      state.setRatesByBase(data);
      state.setCurrenciesList();

      return { currenciesData: data };
    }),
  setCurrenciesList: () =>
    set((state) => ({ currenciesList: Object.keys(state.ratesByBase).sort() })),
  setRatesByBase: (data) =>
    set(() => {
      const ratesByBase = {};

      data.forEach((item) => {
        const ccy = ratesByBase[item.ccy];
        if (!ccy) {
          ratesByBase[item.ccy] = {};
        }

        ratesByBase[item.ccy] = {
          ...ccy,
          [item.base_ccy]: +item.buy,
        };

        const base_ccy = ratesByBase[item.base_ccy];
        if (!base_ccy) {
          ratesByBase[item.base_ccy] = {};
        }

        ratesByBase[item.base_ccy] = {
          ...base_ccy,
          [item.ccy]: 1 / item.sale,
        };
      });

      return { ratesByBase };
    }),
  setRateByName: ({ ccy: ccyName, baseCcy: baseCcyName, operation, amount }) =>
    set((state) => {
      switch (operation) {
        case "buy":
          return {
            ratesByBase: {
              ...state.ratesByBase,
              [ccyName]: {
                ...state.ratesByBase[ccyName],
                [baseCcyName]: amount,
              },
            },
          };
        case "sell":
          return {
            ratesByBase: {
              ...state.ratesByBase,
              [baseCcyName]: {
                ...state.ratesByBase[baseCcyName],
                [ccyName]: amount,
              },
            },
          };
        default:
          return { ratesByBase: { ...state.ratesByBase } };
      }
    }),
}));

export { useStore };
