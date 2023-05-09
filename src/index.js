import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";
// import redux store and redux provider
import store from "./redux/store";
import { Provider } from "react-redux";

const domContainer = document.getElementById("root");
const root = ReactDOM.createRoot(domContainer);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);

export default App;
