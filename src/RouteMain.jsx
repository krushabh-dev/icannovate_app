import React from "react";
import { Routes, Route } from "react-router-dom";
import App from "./App";
import { auth } from "./config/fire";
import { onAuthStateChanged } from "firebase/auth";
import CreateUser from "./Componenet/CreateUser";
import Login from "./Componenet/Login";
import VerifyPhone from "./Componenet/VerifyPhone";
import { Component } from "react";
import LogOut from "./Componenet/LogOut";
import MailVerify from "./Componenet/MailVerify";
import Profile from "./Componenet/Profile";
import Dashboard from "./Componenet/Dashboard";
import Camera from "./Componenet/Camera";

class RouteMain extends Component{
  constructor(props) {
    super(props);
    this.state = {
      user: null,
    };
    this.authListener = this.authListener.bind(this);
  }

  componentDidMount() {
    this.authListener();
  }
  authListener() {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        this.setState({ user });
      } else {
        this.setState({ user: null });
      }
    });
  }

  render() {
  return (
    <>
      <Routes>
      {(() => {
          if (this.state.user) {
            if(this.state.user.email = ""){
              if(this.state.user.displayName === ""){
                return <>
                <Route exact path="/" element={<Profile />} />
                <Route exact path="/logout" element={<LogOut />} />
                </>
              }else{
                return <>
                <Route exact path="/" element={<Dashboard />} />
                <Route exact path="/cam" element={<Camera />} />
                <Route exact path="/logout" element={<LogOut />} />
                </>
              }
            }else{
            if (this.state.user.emailVerified === false) {
              return <>
              <Route exact path="/dash" element={<MailVerify />} />
              <Route exact path="/" element={<MailVerify />} />
              <Route exact path="/logout" element={<LogOut />} />
              </>
            }else if(this.state.user.displayName === ""){
              return <>
              <Route exact path="/" element={<Profile />} />
              <Route exact path="/logout" element={<LogOut />} />
              </>
            }else{
              return <>
              <Route exact path="/" element={<Dashboard />} />
              <Route exact path="/dash" element={<Profile />} />
              <Route exact path="/cam" element={<Camera />} />
              <Route exact path="/logout" element={<LogOut />} />
              </>
            }
          }
          }else{
         return<> <Route exact path="/" element={<Login />} />
        <Route exact path="/sign" element={<CreateUser />} />
        <Route exact path="/phone" element={<VerifyPhone />} />
        
        </>

          }
        })()}
      </Routes>
    </>
  );
}
}

export default RouteMain;
