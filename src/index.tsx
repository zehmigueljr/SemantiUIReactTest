import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { RootProvider, rootStore } from "./Models/Root";
import * as serviceWorker from "./serviceWorker";
import "semantic-ui-less/semantic.less";

ReactDOM.render(
  <RootProvider value={rootStore}>
    <App />
  </RootProvider>,
  document.getElementById("root")
);

serviceWorker.unregister();
