import { ThemeProvider, THEME_ID } from "@mui/material/styles";
import Box from "@mui/material/Box";

import theme from "../../theme";
import Header from "../Header";
import Content from "../Content";
import Footer from "../Footer";

const App = () => {
  return (
    <ThemeProvider theme={{ [THEME_ID]: theme }}>
      <Box
        sx={{
          display: "grid",
          gridTemplateRows: "100px auto 100px",
          height: "100%",
        }}
      >
        <Header />
        <Content />
        <Footer />
      </Box>
    </ThemeProvider>
  );
};

export default App;
