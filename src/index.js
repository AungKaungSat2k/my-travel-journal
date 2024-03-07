import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./css/index.css";

export default function Page() {
  return(
    <div className="root">
      <App/>
    </div>
  )
}

ReactDOM.render(<Page/>, document.getElementById("root"))