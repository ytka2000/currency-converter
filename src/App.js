import { ThemeProvider, THEME_ID } from "@mui/material/styles";
import theme from "./theme";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <ThemeProvider theme={{ [THEME_ID]: theme }}>
      <Header />
      {/* content */}
      <Footer />
    </ThemeProvider>
  );
}

export default App;
