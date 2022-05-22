import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import {BrowserRouter} from "react-router-dom";
import { VideoProvider } from "./Context/VideoContext";
import { AuthProvider } from "./Context/AuthContext";
import { FeatureProvider } from "./Context/FeatureContext";



// Call make Server
makeServer();
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <BrowserRouter>
    <VideoProvider>
      <AuthProvider>
      <FeatureProvider>
    <App />
    </FeatureProvider>
    </AuthProvider>
    </VideoProvider>
    </BrowserRouter>
  </React.StrictMode>,
);
