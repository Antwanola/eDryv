import { Provider } from "./components/ui/provider"
import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App"
import "./App.css"
import "./fonts.css"; 
import theme from './theme';

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider enableSystem={false} theme={theme}>
      <App />
    </Provider>
  </React.StrictMode>,
)