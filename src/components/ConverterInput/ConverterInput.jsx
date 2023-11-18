import { useState } from "react";

import TextField from "@mui/material/TextField";

const ConverterInput = ({ label, defaultValue }) => {
  const [value, setValue] = useState(defaultValue || "");

  const handleChange = (e) => {
    const newValue = e.target.value;

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

  return (
    <TextField
      label={label}
      variant="outlined"
      InputLabelProps={{
        shrink: true,
      }}
      value={value}
      onChange={handleChange}
      onBlur={handleBlur}
    />
  );
};

export default ConverterInput;
