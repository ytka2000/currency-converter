import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

const copyright = `© Copyright ${new Date().getFullYear()}.`;
const rights = "All rights reserved.";

const Footer = () => (
  <Grid
    container
    component="footer"
    sx={{
      mt: 5,
      backgroundColor: "primary.light",
      justifyContent: "center",
      alignItems: "center",
    }}
  >
    <Typography
      variant="body2"
      color="primary.dark"
      sx={{ py: 2, display: { es: "none", xs: "block" } }}
    >
      {copyright}
      {rights}
    </Typography>
    <Typography
      variant="caption"
      color="primary.dark"
      sx={{ py: 1, display: { es: "block", xs: "none" } }}
    >
      {copyright}
      <br />
      {rights}
    </Typography>
  </Grid>
);

export default Footer;
