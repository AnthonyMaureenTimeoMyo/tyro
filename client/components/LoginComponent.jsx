import { Link, withRouter } from 'react-router-dom';
import React,{Component, useState } from "react";

//If the login cookie is present from localStorage -> Dont show login/signup component
// async function testBackend(){
//   const response = await fetch('/users');
//   console.log('Response is', response)
// }
// testBackend();
//If the login cookie isn't present -> show the login component.
//If the user clicks on Sign up -> show the Sign Up component


class LoginComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      username:'',
      password: '',
      loggedIn: false,
      currentUser: '',
      userTable: [{username: 'user1@gmail.com', password: 'user1'}, {username: 'user2@gmail.com', password: 'user2'}, {username: 'user3@gmail.com', password: 'user3'}, {username: 'tim@gmail.com', password: 'tim'}, {username: 'myo@gmail.com', password: 'myo'}]
   };
   this.userInfo = this.userInfo.bind(this);
   this.passwordInfo = this.passwordInfo.bind(this);
   this.validateLogin = this.validateLogin.bind(this);
   this.forgetPassword = this.forgetPassword.bind(this);
   this.signup = this.signup.bind(this);
  }
  validateLogin(e){
    e.preventDefault();
    // console.log('Username is', this.state.username, 'Password is', this.state.password)
    // console.log(this.state.userTable);
    let message = '';
    this.state.userTable.forEach((e, i)=> {
    if (e.username === this.state.username && e.password === this.state.password) {
      this.state.currentUser = this.state.username;
      this.loggedIn = true;
      message = 'logged in successful.';
      return;
    }
      // application data access

    })
    console.log(message);
  }
  forgetPassword(){
    console.log('I forgot password.<< still working in progress!!!! >>')
  }
  signup(){
    console.log('Sign up fired!')
    // move to sign up component

  }
 userInfo (event){
    this.setState({username: event.target.value});
  }
  passwordInfo (event){
    this.setState({password: event.target.value});
  }
  render() {
    let popUp;
    if(this.loggedIn){
      console.log('user:',this.state.currentUser);
      popUp = <h1 className = 'popUp'>WELCOME BACK {this.state.currentUser}</h1>
    }
    return (
      <div className="loginContainer">
        {popUp}
      <form>
      <input
        type='email'
        placeholder='Email'
        onChange={this.userInfo}
      />
       <input
        type='password'
        placeholder='Password'
        onChange={this.passwordInfo}
      />
      <button className = 'login' onClick = {this.validateLogin}>Log In</button>
      <button className = 'signup' onClick = {this.signup}>Sign up</button><br></br>
      {/* <a href ={this.forgetPassword}>forgot password?</a> */}
      </form>
      </div>
    );
  }
}
export default LoginComponent;