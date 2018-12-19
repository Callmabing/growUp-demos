import React, { Component } from 'react';
import { Provider } from 'react-redux'; 
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './common/header';
import store from './store/index.js';

import Home from './pages/home/index';
import Detail from './pages/detail/index';

class App extends Component {
  state = {
    top: ''
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  handleScroll = () => {
    this.setState({
      top: 'fixed'
    })
  }

  render() {
    const { top } = this.state;
    return (
      <Provider store={store}>
        <>
          <Header top={top}/>
          <Router>
            <div style={{ paddingTop: '58px' }}>
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
