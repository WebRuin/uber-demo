import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import SwipeableRoutes from 'react-swipeable-routes';

import Colors from './pages/colors';
import Gradients from './pages/gradients';
import Presets from './pages/presets';

class App extends Component {
  render() {
    return (
      <Router>
        <SwipeableRoutes>
          <Route exact path="/" component={Gradients} />
          <Route path="/presets" component={Presets} />
          <Route path="/colors" component={Colors} />
        </SwipeableRoutes>
      </Router>
    );
  }
}

export default App;
