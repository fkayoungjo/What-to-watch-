import React, { Component } from 'react';
import {Route, Redirect, withRouter } from 'react-router-dom';
import Nav from './Nav'
import SignUp from './SignUp'
import Login from './Login'
import Profile from './Profile'
import Search from './Search'
import Trending from './Trending'
import './App.css';
import video from './video.mp4'



class App extends Component {
  state = {
    user: null
  };

  componentDidMount() {
    console.log("DID MOUNT")
    this.getUser()
  }

  signupFormSubmitHandler = (e, userInfo) => {
    e.preventDefault();
    this.createUser(userInfo);
    this.props.history.push("/trending");
  };


  loginSubmitHandler = (e, userInfo) => {
    e.preventDefault();
    this.signinUser(userInfo);
    this.props.history.push("/trending");
  };

  createUser = userInfo => {
    fetch("http://localhost:3000/api/v1/users/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accepts: "application/json"
      },
      body: JSON.stringify({
        user: {
          username: userInfo.signupUsername,
          password: userInfo.signupPassword,
          email: userInfo.email,
          avatar: userInfo.avatar,
          tagline: userInfo.tagline,
          name: userInfo.name
        }
      })
    })
      .then(resp => resp.json())
      .then(resp => {
        localStorage.setItem("token", resp.jwt);
        this.setState({
          user: resp.user
        });
      });
  };

  getUser = () => {
   let token = localStorage.getItem("token")
   if (token !== null ) {
   return fetch('http://localhost:3000/api/v1/current_user', {
     method: 'GET',
     headers: {
       "Content-Type": "application/json",
       Action: "application/json",
       Authorization: `Bearer ${token}`
     }
   })
   .then(res => res.json())
   .then(res => {
     this.setState({user: res.user})
   })
   } else {
     return <Redirect to="/login" />
   }
 }

  signinUser = userInfo => {
    fetch("http://localhost:3000/api/v1/login/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accepts: "application/json"
      },
      body: JSON.stringify({
        user: {
          username: userInfo.loginUsername,
          password: userInfo.loginPassword
        }
      })
    })
      .then(resp => resp.json())
      .then(resp => {
        localStorage.setItem("token", resp.jwt);
        this.setState({
          user: resp.user
        });
      });
      console.log("done!");
  };

  render() {
    console.log(this.state.user)

    return (


    <React.Fragment>
  <video className="myVideo" loop autoPlay muted>
         <source src={video} type="video/mp4" />
         <source src={video} type="video/ogg" />
         Your browser does not support the video tag.
       </video>
      <Nav />
      <Route exact path="/signup" render={() => (
        <SignUp signupFormSubmitHandler={this.signupFormSubmitHandler}/>
        )
      }/>
      <Route exact path="/login" render={() => (
        <Login loginSubmitHandler={this.loginSubmitHandler}/>
        )
      }/>
      <Route exact path="/profile" render={() => (
        <Profile user={this.state.user}/>
        )
      }/>
      <Route exact path="/search" render={() => (
        <Search user={this.state.user}/>
        )
      }/>
      <Route exact path="/trending" render={() => (
        <Trending user={this.state.user}/>
        )
      }/>

    </React.Fragment>

    )
  }
}

export default withRouter(App);
