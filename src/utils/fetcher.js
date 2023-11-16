import { fakeApiCall } from "./fakeApiCall";

import { mockData } from "./mockData";

const OPTIONS = {
  headers: {
    "Content-Type": "application/json",
  },
};

const fetcher = async (url) => {
  try {
    let response;

    const countRequests = localStorage.getItem("countRequests");

    if (+countRequests === 4) {
      localStorage.removeItem("countRequests");
      response = await fakeApiCall({
        error: { message: "Server error!", delay: 1000 },
      });
    }

    try {
      response = await fetch(url, OPTIONS);
    } catch (_) {
      response = await fakeApiCall({
        data: { result: mockData, delay: 1000 },
      });
    }

    if (!response.ok) {
      throw new Error("Response was not ok!");
    }

    const data = await response.json();
    const parsedData = JSON.parse(data);

    localStorage.setItem(
      "countRequests",
      countRequests ? +countRequests + 1 : 1
    );

    return parsedData;
  } catch (error) {
    throw new Error(error);
  }
};

export { fetcher };
