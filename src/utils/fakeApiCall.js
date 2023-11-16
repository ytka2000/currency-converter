import { returnWithDelay } from "./returnWithDelay";

const fakeApiCall = async ({ data, error }) => {
  const options = error
    ? { error: error.message, t: error.delay }
    : {
        data: {
          ok: true,
          json: () =>
            returnWithDelay({
              data: JSON.stringify(data.result),
              t: data.delay,
            }),
        },
        t: 1000,
      };

  const result = await returnWithDelay(options);
  return result;
};

export { fakeApiCall };
