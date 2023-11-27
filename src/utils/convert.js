const findRate = (ccyName, baseCcyName, rates) => {
  const ccyRates = rates[ccyName];

  if (ccyRates[baseCcyName]) {
    return ccyRates[baseCcyName];
  } else {
    for (const rateName in ccyRates) {
      const currentRates = rates[rateName];

      if (currentRates[baseCcyName]) {
        return ccyRates[rateName] * currentRates[baseCcyName];
      }
    }
  }
};

const convert = ({ ccy, base_ccy, amount, rates }) => {
  const rate = findRate(ccy, base_ccy, rates);

  const result = rate * amount;

  return result.toFixed(2);
};

export { convert };
