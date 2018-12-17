import React from "react";
import { Flex } from "rebass";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Canvas from "./Canvas";
import Header from "./Header";
import Burn from "./Burn";
import AccountsWrapper from "./AccountsWrapper";

const App = props => (
  <Flex flexDirection="column" width={800} m="auto">
    <Header />
    <Switch>
      <Route exact path="/" component={Burn} />
      <Route path="/canvases/:id" component={Canvas} />
    </Switch>
    <div style={{ position: "fixed", top: "1em", right: "1em" }}>
      <AccountsWrapper />
    </div>
  </Flex>
);

export default App;
