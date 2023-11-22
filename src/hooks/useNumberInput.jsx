import { useState } from "react";

const useNumberInput = (defaultValue) => {
  const [value, setValue] = useState(defaultValue || "");

  const handleChange = (newValue) => {
    if (newValue.match(`(^$)|(^[1-9]([0-9]*)(\\.?[0-9]{0,2})$)`)) {
      setValue(newValue);
    }
  };

  const handleBlur = (e) => {
    const newValue = e.target.value;

    if (newValue.endsWith(".")) {
      setValue(newValue.substring(0, newValue.length - 1));
    }
  };

  return [value, handleChange, { onBlur: handleBlur }];
};

export default useNumberInput;
