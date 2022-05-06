import { ThemeProvider } from "@mui/material"
import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App"
import "./index.css"
import { StoreProvider } from "./store"
import appTheme from "./utils/theme"

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider theme={appTheme}>
      <StoreProvider>
        <App />
      </StoreProvider>
    </ThemeProvider>
  </React.StrictMode>
)
