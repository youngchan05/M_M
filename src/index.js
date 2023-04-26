import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "styled-components";
import App from "./App";
import theme from "./theme";
import GlobalStyles from "./GlobalStyle";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <ThemeProvider theme={{ ...theme }}>
            <GlobalStyles />
            <App />
        </ThemeProvider>
    </React.StrictMode>
);
