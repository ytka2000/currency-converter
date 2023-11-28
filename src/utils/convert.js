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

  return 0;
};

const convert = ({ ccy, base_ccy, amount, rates, swapped = false }) => {
  const rate = findRate(ccy, base_ccy, rates);

  if (!rate) return 0;

  const result = !swapped ? rate * amount : amount / rate;

  return result.toFixed(2);
};

export { convert };
