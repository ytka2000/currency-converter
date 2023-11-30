import { fetcher } from "./fetcher";
import { mockData } from "./mockData";

const data = [
  { ccy: "CHF", base_ccy: "UAH", buy: "40.00670", sale: "40.00670" },
];

const localStorageMock = {
  getItem: jest.fn(),
  setItem: jest.fn(),
  removeItem: jest.fn(),
};

Object.defineProperty(window, "localStorage", {
  value: localStorageMock,
});

global.fetch = () =>
  Promise.resolve({
    ok: true,
    json: () => Promise.resolve(JSON.stringify(data)),
  });

describe("fetcher util", () => {
  test("returns correct result", async () => {
    const result = await fetcher();

    expect(localStorageMock.getItem).toHaveBeenCalledWith("countRequests");
    expect(localStorageMock.setItem).toHaveBeenCalled();
    expect(result).toEqual(data);
  });

  test("returns error if response.ok is false", async () => {
    global.fetch = () => Promise.resolve({ ok: false });

    expect.assertions(1);

    await expect(fetcher()).rejects.toThrow("Error: Response was not ok!");
  });

  test("returns server error on fifth request", async () => {
    localStorageMock.getItem.mockReturnValueOnce(4);

    expect.assertions(2);

    await expect(fetcher()).rejects.toThrow("Error: Server error!");
    expect(localStorageMock.removeItem).toHaveBeenCalled();
  });

  test("returns mockData if fetch has thrown an error", async () => {
    global.fetch = () => {
      throw new Error("Fetch error");
    };

    expect.assertions(1);

    await expect(fetcher()).resolves.toEqual(mockData);
  });
});
