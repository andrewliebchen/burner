import React from 'react';
import {Flex} from 'rebass';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Canvas from './Canvas';
import Header from './Header';
import Burn from './Burn';

const App = props => (
  <Flex flexDirection="column" width={800} m="auto">
    <Header />
    <Switch>
      <Route exact path="/" component={Burn} />
      <Route path="/canvases/:id" component={Canvas} />
    </Switch>
  </Flex>
);

export default App;
