import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import fire from '../../config/fire'

export default class Login extends Component {

    constructor(props){

        super(props);
        const token = localStorage.getItem("token");
        let loggedIn = true;

        if (token === null) {
            loggedIn = false
        }

        this.login = this.login.bind(this);
        this.signup = this.signup.bind(this);
        this.handleChange = this.handleChange.bind(this);

        this.state ={
            email:'',
            password:'',
            loggedIn
        }

    }

    login(e){
        e.preventDefault();

        fire.auth().signInWithEmailAndPassword(this.state.email,this.state.password)
        .then((u) =>{
            localStorage.setItem("token", "anyrandomstringcanbehere")
             this.setState({
                 loggedIn: true
             });
        })
        .catch((error) =>{
            console.log(error);
            alert("Wrong Username or Password");
        });
    }

    signup(e){
        e.preventDefault();

        fire.auth().createUserWithEmailAndPassword(this.state.email,this.state.password)
        .then((u) =>{

        })
        .catch((error) =>{
            console.log(error);
        });
    }


    handleChange(e){
        this.setState({ [e.target.name]: e.target.value });
    }

    render() {

        if(this.state.loggedIn === true){
            return <Redirect to="/landing"/>
        }

        return (
            <div className="col-md-6">
                <form>
                  <div class='form-group'>
                        <label for="exampleInputEmail" style={{color: '#fff'}}>Email Address</label>
                        <input value={this.state.email} onChange={this.handleChange} type="email" name="email"
                        class="form-control" id="exampleInputEmail" aria-describedby="emailHelp"
                        placeholder="Enter Email"
                        />
                  </div>

                  <div class='form-group'>
                        <label for="exampleInputPassword" style={{color: '#fff'}}>Password</label>
                        <input value={this.state.password} onChange={this.handleChange} type="password" name="password"
                        class="form-control" id="exampleInputPassword"
                        placeholder="Enter Password"
                        />
                  </div>

                  <button type="submit" onClick={this.login} class="btn-btn-primary">Login</button>
                  <button onClick={this.signup} style={{marginLeft:'25px'}} className="btn-btn-success">Signup</button>
                </form>                
            </div>
        )
    }
}
