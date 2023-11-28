import { createTheme } from "@mui/material/styles";
import { green } from "@mui/material/colors";

const theme = createTheme({
  palette: {
    primary: {
      main: green[700],
      body: green[300],
      light: green[50],
      dark: green[900],
    },
  },
  breakpoints: {
    values: {
      es: 0,
      xs: 300,
      sm: 700,
      md: 900,
      lg: 1100,
      xl: 1536,
    },
  },
});

export default theme;
