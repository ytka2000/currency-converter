import useNumberInput from "../../hooks/useNumberInput";

import TextField from "@mui/material/TextField";

const ConverterInput = ({ label, defaultValue }) => {
  const [value, setValue, { onBlur }] = useNumberInput(defaultValue || "");

  return (
    <TextField
      label={label}
      variant="outlined"
      InputLabelProps={{
        shrink: true,
      }}
      value={value}
      onChange={(e) => setValue(e.target.value)}
      onBlur={onBlur}
    />
  );
};

export default ConverterInput;
