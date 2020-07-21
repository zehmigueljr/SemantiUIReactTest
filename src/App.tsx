import React from "react";
import { useMst } from "./Models/Root";
import { Observer } from "mobx-react";
import { Login } from "./Components/Login/Index";
import { Main } from "./Components/Main/Index";

function App() {
  const store = useMst();
  return (
    <div className="App">
      <Observer>{() => (store.user?.token ? <Main /> : <Login />)}</Observer>
    </div>
  );
}

export default App;
