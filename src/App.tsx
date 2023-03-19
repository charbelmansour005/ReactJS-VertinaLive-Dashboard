import Dashboard from "./pages/Dashboard/Dashboard"
import CssBaseline from "@mui/material/CssBaseline"
import { ThemeProvider, createTheme } from "@mui/material/styles"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"

const App = () => {
  const theme = createTheme()
  const queryClient = new QueryClient()
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Dashboard />
      </ThemeProvider>
    </QueryClientProvider>
  )
}

export default App
