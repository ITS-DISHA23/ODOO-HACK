import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "leaflet/dist/leaflet.css";
import App from "./App";

import { FleetProvider } from "./context/FleetContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <FleetProvider>
      <App />
    </FleetProvider>
  </React.StrictMode>
);