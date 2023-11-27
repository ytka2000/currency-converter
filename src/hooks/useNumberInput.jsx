import { useState } from "react";

import { validateNumberInput } from "../utils";

const useNumberInput = (defaultValue) => {
  const [value, setValue] = useState(defaultValue || "");

  const handleChange = (newValue) => {
    if (validateNumberInput(newValue)) {
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
