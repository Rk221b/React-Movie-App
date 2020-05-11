import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { HashRouter as Router, Route } from 'react-router-dom';

import './App.css';

import Navbar from './components/layout/Navbar';
import Landing from './components/home/Landing';
import Login from './components/home/Login';
import Movie from './components/home/Movie';
import fire from './config/fire';


import store from './store';

class App extends Component {

  constructor(props) {
    super(props)

    this.state = {
      user: {},
    }
  }

  componentDidMount() {
    this.authListner();
  }

  authListner() {
    fire.auth().onAuthStateChanged((user) => {
      console.log(user);

      if (user) {
        this.setState({
          user
        });
      } else {
        this.setState({
          user: null
        });
      }
    });
  }


  render() {
    return (
      <Provider store={store}>
        <Router>
          <div>
            <Navbar /> 
            <Route exact path="/" component={Login} />
            <Route exact path="/landing" component={Landing} />
            <Route exact path="/movie/:id" component={Movie} />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
