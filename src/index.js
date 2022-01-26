import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

const Index = () => {
  return (<div>Hello React!</div>);
};

ReactDOM.render(<React.StrictMode>
  <App />
</React.StrictMode>, document.getElementById("root"));
