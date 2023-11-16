import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import CurrencyExchangeIcon from "@mui/icons-material/CurrencyExchange";

const Header = () => (
  <AppBar position="static" sx={{ justifyContent: "center", mb: 3 }}>
    <Container maxWidth="xl" sx={{ ml: 0 }}>
      <Toolbar disableGutters>
        <CurrencyExchangeIcon sx={{ mr: 2 }} />
        <Typography
          variant="h6"
          noWrap
          component="div"
          sx={{ mr: 2, display: { es: "none", xs: "flex" } }}
        >
          Currency Converter
        </Typography>
      </Toolbar>
    </Container>
  </AppBar>
);

export default Header;
