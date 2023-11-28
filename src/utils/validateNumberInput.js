const validateNumberInput = (newValue) => {
  if (
    newValue.match(
      `(^0(\\.[0-9]{0,2})?$)|(^$)|(^[1-9]([0-9]*)(\\.?[0-9]{0,2})$)`
    )
  ) {
    return true;
  }
  return false;
};

export { validateNumberInput };
