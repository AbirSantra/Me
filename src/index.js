import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App.jsx";
require("dotenv").config();

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById("react-root")
);
