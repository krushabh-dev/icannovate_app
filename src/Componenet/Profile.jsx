import React, { useState } from 'react';
import { updateProfile } from 'firebase/auth';
import { auth, db } from '../config/fire';
import { ref, set } from "firebase/database";

function Profile() {
    const [userprofile, setUserprofile] = useState(0);

    const inputhandler = (event) => {
        var target = event.target;
        var name = target.name;
        var value = target.value;
        setUserprofile({...userprofile, [name]: value});
    }

    const profileformsubmit = (e) =>{
      e.preventDefault();
      updateProfile(auth.currentUser, {
        displayName: userprofile.firstname + " " + userprofile.lastname
      });
      set(ref(db, 'users/' + auth.currentUser.uid), {
        dateofbirth : userprofile.dateofbirth,
        gender: userprofile.gender,
        name: userprofile.firstname + " " + userprofile.lastname
      });
      return console.log("Form Submitted: ");
    }

  return (
    <>
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="userprofilearea" style={{textAlign: "center", paddingTop: "5rem", paddingBottom: "1rem"}}>
                        <img src="/assets/user.svg" alt="user" className='img-fluid' style={{maxWidth: "75px", border: "0.5px solid", padding: "15px", borderRadius: "50%"}} />

                        <div className="form" style={{textAlign: "left", padding: "40px 20px"}}>
                            <form method='POST' className='row' onSubmit={profileformsubmit}>

                                <div className="col-6">
                                   <label htmlFor="firstname">First Name</label>
                                    <input type="text" className="form-control" id="firstname" name='firstname' placeholder='First Name' value={userprofile.firstname} onChange={inputhandler} required />
                                </div>
                                <div className="col-6">
                                   <label htmlFor="lastname">Last Name</label>
                                    <input type="text" className="form-control" id="lastname" name='lastname' placeholder='Last Name' value={userprofile.lastname} onChange={inputhandler} required />
                                </div>
                                <div className="col-12">
                                   <label htmlFor="gender" style={{paddingTop: "1rem"}}>Gender</label>
                                    <select type="text" className="form-control" id="gender" name='gender' value={userprofile.gender} onChange={inputhandler} required >
                                        <option value="">Gender</option>
                                        <option value="male">Male</option>
                                        <option value="female">Female</option>
                                        <option value="other">other</option>
                                    </select>
                                </div>
                                <div className="col-12" >
                                   <label htmlFor="dateofbirth" style={{paddingTop: "1rem"}}>Date of Birth</label>
                                    <input type="date" className="form-control" id="dateofbirth" name='dateofbirth' placeholder='Date of Birth' value={userprofile.dateofbirth} onChange={inputhandler} required />
                                </div>
                                <div className="col-12" >
                                   <label htmlFor="city" style={{paddingTop: "1rem"}}>City</label>
                                    <input type="text" list="datalistOptions" className="form-control" id="city" name='city' placeholder='City' value={userprofile.city} onChange={inputhandler} required />
                                    <datalist id="datalistOptions">
                                      <option value="Pune"></option>
                                      <option value="Mumbai"></option>
                                      <option value="Nagpur"></option>
                                      <option value="Kolhapur"></option>
                                      <option value="Nanded"></option>
                                    </datalist>                                    
                                </div>
                                <div style={{textAlign: "center"}}>
                                <button type='submit' style={{marginTop: "2rem", borderRadius: "5px", padding: "15px 60px", border: "0", color: "#fff", maxWidth: "250px", width:"100%", background: "linear-gradient(45deg, #0163ad, #3091ce)"}} >Submit</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="col-12" style={{ marginTop: "-5rem", width:"100%" }}>
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
    </>
  )
}

export default Profile