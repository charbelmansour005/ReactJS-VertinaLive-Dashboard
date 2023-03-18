import Dashboard from "./pages/Dashboard/Dashboard"
import CssBaseline from "@mui/material/CssBaseline"
import { ThemeProvider, createTheme } from "@mui/material/styles"

const App = () => {
  const theme = createTheme()
  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Dashboard />
      </ThemeProvider>
    </>
  )
}

export default App
