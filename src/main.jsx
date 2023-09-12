import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { ContextAPI } from "./Context/FormContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ContextAPI>
      <App />
    </ContextAPI>
  </React.StrictMode>
);
