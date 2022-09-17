import React from "react";
import { auth } from "../config/fire";
import { signInWithPhoneNumber, RecaptchaVerifier} from "firebase/auth";

class VerifyPhone extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isphonesubmitted: false };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleOtpSubmit = this.handleOtpSubmit.bind(this);
  }

  handleChange(event) {
    var e = event.target;
    var name = e.name;
    const value = e.type === "checkbox" ? e.checked : e.value;
    this.setState({ [name]: value });
  }

  handleSubmit(event) {
    
    var Mobile = this.state.phone;
    var re = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;

    if(re.test(Mobile)){
        this.configurecaptcha()
        const appVerifier = window.recaptchaVerifier;
        var PhoneNumber = "+91" + Mobile;
        signInWithPhoneNumber(auth, PhoneNumber, appVerifier)
        .then((confirmationResult) => {
        // SMS sent. Prompt user to type the code from the message, then sign the
        // user in with confirmationResult.confirm(code).
        document.getElementById("area-a").style.display = "none";
        document.getElementById("area-b").style.display = "block";
        window.confirmationResult = confirmationResult;
        }).catch((error) => {
        // Error; SMS not sent
        console.log("Error Encountered: "+ error)
        });
    }else{
        alert("Invalid Phone")
    }
    // event.preventDefault();
  }

  handleOtpSubmit(event) {
    const code = this.state.otp;
    window.confirmationResult.confirm(code).then((result) => {
    // User signed in successfully.
    
    }).catch((error) => {
    console.log("Error Encountered!");
    this.setState({ error : "invalid otp" });
    });

  }

  configurecaptcha = () =>{
    window.recaptchaVerifier = new RecaptchaVerifier('sign-in-button', {
        'size': 'invisible',
        'callback': (response) => {
          // reCAPTCHA solved, allow signInWithPhoneNumber.
          this.handleSubmit();
        },
        defaultCountry : "IN",
      }, auth);
      
  }

  render() {
    return (
      <section id="varea">
        <div className="verifyemail_section">
          <div style={{ backgroundColor: "#fff", minHeight: "60vh" }}>
            <div style={{ textAlign: "center", padding: "12px" }}>
              <h1 style={{ paddingTop: "5rem" }}>OTP Verification</h1>
              <p>
                We will send you an <strong>One Time Password</strong> on this
                mobile number
              </p>
            </div>

            <div
             id="area-a"
              style={{
                textAlign: "center",
                padding: "12px",
                marginTop: "20px",
              }}
            >
              <label htmlFor="phoneNumber" style={{ fontSize: "16px" }}>
                Enter Mobile Number
              </label>
              <input
                type="number"
                name="phone"
                id="phone"
                style={{
                  width: "100%",
                  maxWidth: "300px",
                  border: "0",
                  borderBottom: "1px solid",
                  marginBottom: "1rem",
                  textAlign: "center",
                  fontSize: "2rem",
                }}
                onChange={this.handleChange}
                value={this.state.phone}
                required
              />
              <button
                style={{
                  color: "#fff",
                  backgroundColor: "rgb(8 152 252)",
                  width: "80%",
                  border: "0",
                  padding: "10px",
                  borderRadius: "3px",
                }}
                id="sign-in-button"
                onClick={this.handleSubmit}
              >Submit</button>
            </div>

            <div
             id="area-b"
              style={{
                textAlign: "center",
                padding: "12px",
                marginTop: "20px",
                display: "none",
              }}
            >
                <p>OTP is been Sent to {this.state.phone}</p>
              <label htmlFor="otp" style={{ fontSize: "16px" }}>
                Enter OTP
              </label>
              <input
                type="number"
                name="otp"
                id="otp"
                style={{
                  width: "100%",
                  maxWidth: "300px",
                  border: "0",
                  borderBottom: "1px solid",
                  marginBottom: "1rem",
                  textAlign: "center",
                  fontSize: "2rem",
                }}
                onChange={this.handleChange}
                value={this.state.otp}
                required
              />
              <span className="text-danger">{this.state.error}</span>
              <button
                style={{
                  color: "#fff",
                  backgroundColor: "rgb(8 152 252)",
                  width: "80%",
                  border: "0",
                  padding: "10px",
                  borderRadius: "3px",
                }}
                onClick={this.handleOtpSubmit}
              >Confirm</button>
            </div>

          </div>

          <svg
            style={{ transform: "translateY(1px)" }}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 320"
          >
            <path
              fill="#0099ff"
              fillOpacity="1"
              d="M0,96L80,133.3C160,171,320,245,480,272C640,299,800,277,960,229.3C1120,181,1280,107,1360,69.3L1440,32L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
            ></path>
          </svg>
          <div
            className="logo"
            style={{ backgroundColor: "#0998fc", minHeight: "25vh" }}
          >
            <h2
              style={{
                textAlign: "center",
                color: "#fff",
                paddingTop: "5rem",
                paddingBottom: "7rem",
                fontSize: "2rem",
              }}
            >
              icannovate
            </h2>
          </div>
        </div>
      </section>
    );
  }
}

export default VerifyPhone;
