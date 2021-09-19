import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";

ReactDOM.render(
  <React.StrictMode>
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-12 col-md-7">
          <App />
        </div>
      </div>
    </div>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
