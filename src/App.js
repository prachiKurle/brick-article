import React from "react";
import "./App.css";
import "./App.scss";
import { BreakpointProvider } from "react-socks";
import Routers from "Routers";

const App = () => {
  return (
    <BreakpointProvider>
      <Routers />
    </BreakpointProvider>
  );
};

export default App;
