import { useStore } from "../../store";
import { getCurrenciesList } from "../../store/selectors";
import { validateNumberInput } from "../../utils";

import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";

const ConverterItem = ({
  label,
  id,
  data,
  onInputChange,
  onDropdownSelect,
}) => {
  const currenciesList = useStore(getCurrenciesList);

  const handleInputChange = (e) => {
    const newValue = e.target.value;

    if (validateNumberInput(newValue)) {
      onInputChange(newValue, id);
    }
  };

  const handleDropdownSelect = (_, newValue) => {
    onDropdownSelect(newValue, id);
  };

  const handleBlur = (e) => {
    const newValue = e.target.value;

    if (newValue.endsWith(".")) {
      onInputChange(newValue.substring(0, newValue.length - 1), id);
    }
  };

  return (
    <Box
      component="form"
      display="flex"
      sx={{ justifyContent: "center", gap: "10px" }}
    >
      <TextField
        label={label}
        value={data.value}
        variant="outlined"
        InputLabelProps={{
          shrink: true,
        }}
        onChange={handleInputChange}
        onBlur={handleBlur}
      />
      <Autocomplete
        options={currenciesList}
        value={data.name}
        onChange={handleDropdownSelect}
        disableClearable
        renderInput={(params) => <TextField {...params} sx={{ width: 100 }} />}
      />
    </Box>
  );
};

export default ConverterItem;
