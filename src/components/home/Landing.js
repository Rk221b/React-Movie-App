import React, { Component } from 'react';

import { connect } from 'react-redux';

import SearchForm from './SearchForm';
import MoviesContainer from './MoviesContainer';
import Spinner from '../layout/Spinner';
import fire from '../../config/fire';
import { Redirect } from 'react-router-dom';

export class Landing extends Component {

  constructor(props) {
    super(props)

    this.logout = this.logout.bind(this);

    const token = localStorage.getItem("token");
    let loggedIn = true

    if (token === null) {
      loggedIn = false
    }

    this.state = {
      loggedIn
    }
  }

  logout() {
    localStorage.removeItem("token");

    this.setState({
      loggedIn: false
    })
    fire.auth().signOut();
  }


  render() {

    if(this.state.loggedIn === false){
      console.log("In Landing "+this.state.loggedIn);
      return <Redirect to="/"/>
    }

    const { loading } = this.props;
    return (
      <div>
        <button
         onClick={this.logout}
         >
         Logout</button>
        <div className="container">
          <SearchForm />
          {loading ? <Spinner /> : <MoviesContainer />}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  loading: state.movies.loading
});

export default connect(mapStateToProps)(Landing);
