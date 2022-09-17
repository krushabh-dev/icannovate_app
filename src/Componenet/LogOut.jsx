import React from 'react'
import { auth } from '../config/fire';
import { signOut } from "firebase/auth";


function LogOut() {
    signOut(auth)
    .then(() => {
      // Sign-out successful.
      console.log("Succesfully Logged Out");
      window.location.href = "/";
    })
    .catch((error) => {
      // An error happened.
    });    
}

export default LogOut