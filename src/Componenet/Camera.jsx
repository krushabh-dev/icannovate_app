import React, { useState } from "react";

function Camera() {

  const [randomx, setRandomx] = useState(0);
  const [randomy, setRandomy] = useState(0);

  var video = document.querySelector("#videoElement");
  if (navigator.mediaDevices.getUserMedia) {
    navigator.mediaDevices
      .getUserMedia({ video: true })
      .then(function (stream) {
        video.srcObject = stream;
      })
      .catch(function (err0r) {
        console.log("Something went wrong!");
      });
  }

  const myTimeout = setTimeout(change, 3000);

  function change() {
    var a = Math.floor((Math.random() * 180) + 1);
    var b = Math.floor((Math.random() * 180) + 1);
    setRandomx(a);
    setRandomy(b);
  }


  return (
    <>
      <div
        className="logo"
        style={{ backgroundColor: "#fff", minHeight: "10vh" }}
      >
        <h2
          style={{
            textAlign: "center",
            color: "#0998fc",
            paddingTop: "3rem",
            paddingBottom: "1rem",
            fontSize: "1.8rem",
          }}
        >
          icannovate
        </h2>
      </div>

      <div className="values" style={{display: "flex", justifyContent: "space-around"}}>
        <span>x: {randomx}</span>
        <span>y: {randomy}</span>
      </div>

      <div className="cameraarea">
         <video autoplay="true" id="videoElement" width="400" height="400">	</video>
      </div>

      <div style={{textAlign: "center"}}>
        <button style={{color: "#fff", borderRadius: "5px", padding: "10px 30px", background: "linear-gradient(270deg, #0898fc, #9eeaf9)", border: "0"}}>Capture</button>
      </div>
    </>
  );
}

export default Camera;
