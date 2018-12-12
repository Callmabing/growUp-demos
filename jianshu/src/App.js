import React, { Component } from 'react';
import { Provider } from 'react-redux'; 
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './common/header';
import store from './store/index.js';

import Home from './pages/home/index';
import Detail from './pages/detail/index';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <>
          <Header />
          <Router>
            <div>
              <Route exact path='/' component={Home}></Route>
              <Route exact path='/detail' component={Detail}></Route>
              {/* <Route exact path='/' render={() => <Home/>}></Route> */}
              {/* <Route exact path='/detail' render={() => <Detail/>}></Route> */}
            </div>
          </Router>
        </>
      </Provider>
    );
  }
}

export default App;
