import { convert } from "./convert";

const rates = {
  CZK: {
    UAH: 1.5686,
  },
  UAH: {
    PLZ: 0.12,
  },
};

const data = { ccy: "CZK", base_ccy: "UAH", amount: 100, rates };

describe("convert util", () => {
  test("returns correct result", () => {
    const result = convert(data);

    const rate = rates.CZK.UAH;
    const expectedResult = (data.amount * rate).toFixed(2);

    expect(result).toBe(expectedResult);
  });

  test("returns correct result in case of cross rate", () => {
    const result = convert({ ...data, base_ccy: "PLZ" });

    const rate = rates.CZK.UAH * rates.UAH.PLZ;
    const expectedResult = (data.amount * rate).toFixed(2);

    expect(result).toBe(expectedResult);
  });

  test("returns correct result when swapped is true", () => {
    const result = convert({ ...data, swapped: true });

    const rate = rates.CZK.UAH;
    const expectedResult = (data.amount / rate).toFixed(2);

    expect(result).toBe(expectedResult);
  });

  test("returns correct result in case of cross rate and when swapped is true", () => {
    const result = convert({ ...data, base_ccy: "PLZ", swapped: true });

    const rate = rates.CZK.UAH * rates.UAH.PLZ;
    const expectedResult = (data.amount / rate).toFixed(2);

    expect(result).toBe(expectedResult);
  });

  test("returns zero when convertation is not possible", () => {
    const result = convert({ ...data, base_ccy: "GBP" });

    expect(result).toBe(0);
  });
});
