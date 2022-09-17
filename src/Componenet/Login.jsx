import React from 'react'
import "../Styles/login.css"
import { auth } from '../config/fire';
import {signInWithEmailAndPassword} from "firebase/auth";
import { signInWithPopup, GoogleAuthProvider, OAuthProvider } from 'firebase/auth';

const googleLogin = () => {
const provider = new GoogleAuthProvider();
signInWithPopup(auth, provider)
.then((result) => {
  const credential = GoogleAuthProvider.credentialFromResult(result);
  const token = credential.accessToken;
  const user = result.user;
})
}

const appleLogin = () => {
const provider = new OAuthProvider('apple.com');
signInWithPopup(auth, provider)
.then((result) => {
  const user = result.user;
  const credential = OAuthProvider.credentialFromResult(result);
  const token = credential.accessToken;
})
}

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};
    this.handleChange = this.handleChange.bind(this);
    this.formSubmit = this.formSubmit.bind(this);
  }

  handleChange(event) {
    // name = event.target.name;
    // this.setState({[name] : target.value});
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;

    this.setState({ [name]: value });
  }

  formSubmit(event) {
    event.preventDefault();
    var email = this.state.email;
    var password = this.state.password;

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log("Sign In:" + user);
        const uverif = userCredential.emailVerified;
        if (uverif == false) {
          alert("Do Verify Your Email First");
        } else {
          console.log("Email is Verified");
        }
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;

        console.log(
          "Error. ErrorCode" + errorCode + "errorMessage" + errorMessage
        );
        alert("Error : " + errorCode);
      });

      alert('A name was submitted: ');
      
  }

render() {
  return (
    <div className="login-root">
    <div
      className="box-root flex-flex flex-direction--column"
      style={{ minHeight: "100vh", flexGrow: 1 }}
    >
      <div className="loginbackground box-background--white padding-top--64">
        <div className="loginbackground-gridContainer">
          <div
            className="box-root flex-flex"
            style={{ gridArea: "top / start / 8 / end" }}
          >
            <div
              className="box-root"
              style={{
                backgroundImage:
                  "linear-gradient(white 0%, rgb(247, 250, 252) 33%)",
                flexGrow: 1
              }}
            ></div>
          </div>
          <div
            className="box-root flex-flex"
            style={{ gridArea: "4 / 2 / auto / 5" }}
          >
            <div
              className="box-root box-divider--light-all-2 animationLeftRight tans3s"
              style={{ flexGrow: 1 }}
            />
          </div>
          <div
            className="box-root flex-flex"
            style={{ gridArea: "6 / start / auto / 2" }}
          >
            <div
              className="box-root box-background--blue800"
              style={{ flexGrow: 1 }}
            />
          </div>
          <div
            className="box-root flex-flex"
            style={{ gridArea: "7 / start / auto / 4" }}
          >
            <div
              className="box-root box-background--blue animationLeftRight"
              style={{ flexGrow: 1 }}
            />
          </div>
          <div
            className="box-root flex-flex"
            style={{ gridArea: "8 / 4 / auto / 6" }}
          >
            <div
              className="box-root box-background--gray100 animationLeftRight tans3s"
              style={{ flexGrow: 1 }}
            />
          </div>
          <div
            className="box-root flex-flex"
            style={{ gridArea: "2 / 15 / auto / end" }}
          >
            <div
              className="box-root box-background--cyan200 animationRightLeft tans4s"
              style={{ flexGrow: 1 }}
            />
          </div>
          <div
            className="box-root flex-flex"
            style={{ gridArea: "3 / 14 / auto / end" }}
          >
            <div
              className="box-root box-background--blue animationRightLeft"
              style={{ flexGrow: 1 }}
            />
          </div>
          <div
            className="box-root flex-flex"
            style={{ gridArea: "4 / 17 / auto / 20" }}
          >
            <div
              className="box-root box-background--gray100 animationRightLeft tans4s"
              style={{ flexGrow: 1 }}
            />
          </div>
          <div
            className="box-root flex-flex"
            style={{ gridArea: "5 / 14 / auto / 17" }}
          >
            <div
              className="box-root box-divider--light-all-2 animationRightLeft tans3s"
              style={{ flexGrow: 1 }}
            />
          </div>
        </div>
      </div>
      <div
        className="box-root padding-top--24 flex-flex flex-direction--column"
        style={{ flexGrow: 1, zIndex: 9 }}
      >
        <div className="box-root padding-top--48 padding-bottom--24 flex-flex flex-justifyContent--center">
          <h1>
            <a href="" rel="dofollow">
              icannovate
            </a>
          </h1>
        </div>
        <div className="formbg-outer">
          <div className="formbg">
            <div className="formbg-inner padding-horizontal--48">
              <span className="padding-bottom--15">
                Sign in to your account
              </span>
              <form id="stripe-login" onSubmit={this.formSubmit} method='POST' >
                <div style={{marginBottom: "20px"}}>
                  <button onClick={googleLogin} style={{padding: "4px 16px", marginright: "10px", border: "0", borderRadius: "4px", color: "#fff" ,background: "#ea4335" }} >Google</button>
                  <button onClick={appleLogin}  style={{padding: "4px 16px", marginLeft: "10px", border: "0", borderRadius: "4px", color: "#fff", background: "#272727" }}>Apple</button>
                </div>
                <div className="field padding-bottom--24">
                  <label htmlFor="email">Email</label>
                  <input type="email" name="email" onChange={this.handleChange} value={this.state.email} required />
                </div>
                <div className="field padding-bottom--24">
                  <div className="grid--50-50">
                    <label htmlFor="password">Password</label>
                    <div className="reset-pass">
                      <a href="#">Forgot your password?</a>
                    </div>
                  </div>
                  <input type="password" name="password" onChange={this.handleChange} value={this.state.password} required />
                </div>
                <div className="field field-checkbox padding-bottom--24 flex-flex align-center">
                  <label htmlFor="checkbox">
                    <input type="checkbox" name="checkbox" onChange={this.handleChange} value={this.state.checkbox} required /> Remember Me
                  </label>
                </div>
                <div className="field padding-bottom--24">
                  <input type="submit" name="submit" value="Continue" />
                </div>
                <div className="field">
                  <a className="ssolink" href="#">
                  <span>
                  <a href="/phone">Use Phone Number </a>
                  </span>
                  <span>
                    Don't have an account? <a href="/sign">Sign up</a>
                  </span>
                  </a>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}
}

export default Login