import Container from "@mui/material/Container";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

import DataTable from "../DataTable";
import Converter from "../Converter";

const Content = () => {
  const theme = useTheme();
  const matchesMd = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Container
      sx={{
        height: "100%",
        width: matchesMd ? "100%" : "75%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-evenly",
        alignItems: "center",
        gap: "30px",
      }}
    >
      <DataTable />
      <Converter />
    </Container>
  );
};

export default Content;
