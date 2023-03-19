import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App"
import "./index.css"
import axios from "axios"

/**
 *
 * ! use axios only for responseType, for the baseURL, create an instance
 */
axios.defaults.baseURL = "https://jsonplaceholder.typicode.com/"

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
