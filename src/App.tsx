import CssBaseline from "@mui/material/CssBaseline"
import { ThemeProvider, createTheme } from "@mui/material/styles"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { Routes } from "./routes/Routes"

const App = () => {
  const theme = createTheme()
  const queryClient = new QueryClient()
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <Routes />
        <CssBaseline />
      </ThemeProvider>
    </QueryClientProvider>
  )
}

export default App
