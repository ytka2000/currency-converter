import Box from "@mui/material/Box";
import ConverterInput from "../ConverterInput";
import ConverterDropdown from "../ConverterDropdown";

const ConverterItem = ({ label, defaultValue }) => {
  return (
    <Box
      component="form"
      display="flex"
      sx={{ justifyContent: "center", gap: "10px" }}
    >
      <ConverterInput label={label} defaultValue={defaultValue} />
      <ConverterDropdown />
    </Box>
  );
};

export default ConverterItem;
