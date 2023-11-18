import Container from "@mui/material/Container";
import IconButton from "@mui/material/IconButton";
import SwapHorizIcon from "@mui/icons-material/SwapHoriz";

import ConverterItem from "../ConverterItem";

const Converter = () => {
  const handleSwap = () => {};

  return (
    // console.log responsive !!!
    <Container
      sx={{ display: "flex", justifyContent: "space-evenly", width: "75%" }}
    >
      <ConverterItem label="Change" defaultValue="100.00" />
      <IconButton color="primary" onClick={handleSwap}>
        <SwapHorizIcon sx={{ height: "50px", width: "50px" }} />
      </IconButton>
      <ConverterItem label="Get" />
    </Container>
  );
};

export default Converter;
