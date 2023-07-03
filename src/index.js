import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import store from "./component/store/store";
import { BrowserRouter } from "react-router-dom";

import "./index.css";
import App from "./App";
import "../node_modules/react-bootstrap/dist/react-bootstrap";
import "../node_modules/bootstrap/dist/css/bootstrap.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);
