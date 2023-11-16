const returnWithDelay = ({ data, error = "Failure", t }) => {
  return new Promise((resolve, reject) => {
    setTimeout(
      () => (data ? resolve(data) : reject(new Error(error))),
      t || Math.random() * 1000
    );
  });
};

export { returnWithDelay };
