import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";

const ConverterDropdown = () => {
  return (
    <Autocomplete
      options={["SEK", "UAH"]}
      defaultValue={"SEK"}
      disableClearable
      renderInput={(params) => <TextField {...params} sx={{ width: 100 }} />}
    />
  );
};

export default ConverterDropdown;
