import React from 'react'
import { auth } from "../config/fire";
import { sendEmailVerification } from 'firebase/auth';

const sucess = () =>{
sendEmailVerification(auth.currentUser)
  .then(() => {
    alert("Verification Mail Sent!")
    document.getElementById("mailsendbtn").disabled = true;
    document.getElementById("note").style.display = "block";
    console.log("Button disabled");
  });
}

function MailVerify() {
  return (
    <>
    <div className="container" style={{background: "linear-gradient(45deg, #0163ad, #3091ce)"}}>
        <div className="row justify-content-center">
            <div className="col-md-6 col-12">
                <div className="verifymailarea" style={{textAlign: "center", color: "#fff", padding: "45px"}}>
                    <div className="img">
                        <img src="/assets/email-verify.svg" alt="" srcset="" className="img-fluid" style={{maxWidth: "350px"}} />
                    </div>
                    <div className="verifymail-tect">
                        <h2 style={{color: "#fff", fontWeight: "300", marginTop: "2rem"}}>Verify Your Email Address</h2>
                        <h4 style={{color: "#fff", fontWeight: "300"}}>We will send you an Verification link to { auth.currentUser.email}</h4>
                    </div>
                    <div className="verifymail-button">
                        <span id="note" style={{display: "none"}}>you can send another request after 5 Minutes</span>
                        <button onClick={sucess} id="mailsendbtn" style={{borderRadius: "5px", margin: "2.5rem 0rem", padding: "15px 60px", border: "0", background: "white"}}>Continue</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default MailVerify