import "./App.css";
import Main from "./components/main/Main";
import Navbar from "./components/navbar/Navbar";
import VerticalTabs from "./components/tabs/VerticalTabs";
import { ThemeProvider } from "@mui/material";
import { theme } from "./constants/colors";

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Navbar />
        <div style={{ display: "flex" }}>
          <VerticalTabs />
          <Main />
        </div>
      </ThemeProvider>
    </>
  );
}

export default App;
