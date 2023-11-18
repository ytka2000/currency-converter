import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import SwapHorizIcon from "@mui/icons-material/SwapHoriz";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

import ConverterItem from "../ConverterItem";

const Converter = () => {
  const theme = useTheme();
  const matchesSm = useMediaQuery(theme.breakpoints.down("sm"));
  const matches = useMediaQuery("(max-width:1100px)");

  const handleSwap = () => {};

  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: matchesSm ? "column" : "row",
        justifyContent: "space-evenly",
        alignContent: "center",
        width: matches ? "100%" : "75%",
        gap: "5px",
      }}
    >
      <ConverterItem label="Change" defaultValue="100.00" />
      <Box display="flex" justifyContent="center">
        <IconButton color="primary" onClick={handleSwap}>
          <SwapHorizIcon sx={{ height: "45px", width: "45px" }} />
        </IconButton>
      </Box>
      <ConverterItem label="Get" />
    </Container>
  );
};

export default Converter;
