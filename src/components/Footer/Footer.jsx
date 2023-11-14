import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

const copyright = `© Copyright ${new Date().getFullYear()}.`;
const rights = "All rights reserved.";

const Footer = () => (
  <Container
    component="footer"
    maxWidth="xl"
    align="center"
    sx={{
      mt: 4,

      backgroundColor: "primary.light",
      position: "fixed",
      bottom: 0,
    }}
  >
    <Typography
      variant="body2"
      color="primary.dark"
      sx={{ py: 2, display: { es: "none", xs: "block" } }}
    >
      {`${copyright} ${rights}`}
    </Typography>
    <Typography
      variant="caption"
      color="primary.dark"
      sx={{ py: 1, display: { es: "block", xs: "none" } }}
    >
      {copyright}
    </Typography>
  </Container>
);

export default Footer;
