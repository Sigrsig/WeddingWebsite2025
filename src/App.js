import logo from "./logo.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Event from "./components/pages/Event";

//W95 things
import original from "react95/dist/themes/original";
import ms_sans_serif from "react95/dist/fonts/ms_sans_serif.woff2";
import ms_sans_serif_bold from "react95/dist/fonts/ms_sans_serif_bold.woff2";
import { styleReset } from "react95";
import { createGlobalStyle, ThemeProvider } from "styled-components";

const GlobalStyles = createGlobalStyle`
  ${styleReset}
  @font-face {
    font-family: 'ms_sans_serif';
    src: url('${ms_sans_serif}') format('woff2');
    font-weight: 400;
    font-style: normal
  }
  @font-face {
    font-family: 'ms_sans_serif';
    src: url('${ms_sans_serif_bold}') format('woff2');
    font-weight: bold;
    font-style: normal
  }
  body, input, select, textarea {
    font-family: 'ms_sans_serif';
  }
`;

function App() {
  const url = window.location.origin;

  return (
    <>
      <GlobalStyles />
      <ThemeProvider theme={original}>
        <Routes>
          <Route path="/" element={<Home />}>
            <Route path="event" element={<Event />} />
            <Route path="faq" element={""} />
            <Route path="schedule" element={""} />
          </Route>
        </Routes>{" "}
      </ThemeProvider>
    </>
  );
}

export default App;
