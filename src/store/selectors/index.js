const getCurrenciesList = (state) => state.currenciesList;

const getCurrenciesData = (state) => state.currenciesData;

const getFirstConverterPair = (state) => state.currenciesData[0];

const getRatesbyBase = (state) => state.ratesByBase;

export {
  getCurrenciesList,
  getCurrenciesData,
  getFirstConverterPair,
  getRatesbyBase,
};
