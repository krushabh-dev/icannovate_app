import React from 'react';
import { auth } from '../config/fire';

function Dashboard() {
  return (
    <>
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className="dasharea" style={{marginTop: "4rem"}}>
            <h2 className="welcomename" style={{paddingLeft: "0.5rem"}}>Hi <br /> <span>{auth.currentUser.displayName}</span></h2>
            <div style={{display: "flex"}} >
        
            <div className="camera-card" style={{marginTop: "2rem", padding: "28px 32px", background: "linear-gradient(150deg, rgb(44 98 214), rgb(58 138 211) 100%)", width: "46%",margin: "2rem 2%" , borderRadius: "25px", maxWidth: "16rem", boxShadow: "5px 5px 10px #ccc"}}>
              <img src="/assets/plusicon.svg" alt="plus" className='img-fluid' style={{padding: "16px", borderRadius: "50%", background: "white", maxWidth: "65px"}} />
              <h4 className="addcamera" style={{paddingTop: "1.5rem", color: "white"}}>Add New Image</h4>
            </div>
            <div className="camera-card" style={{marginTop: "2rem", padding: "28px 32px", background: "linear-gradient(150deg, #8c7ad9, #0a5995 100%)", width: "46%",margin: "2rem 2%" , borderRadius: "25px", maxWidth: "16rem", boxShadow: "5px 5px 10px #ccc"}}>
              <img src="/assets/report.svg" alt="plus" className='img-fluid' style={{padding: "16px", borderRadius: "50%", background: "white", maxWidth: "65px"}} />
              <h4 className="addcamera" style={{paddingTop: "1.5rem", color: "white"}}>Check Reports</h4>
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <span style={{textAlign: "center"}}><a href='/logout'>Logout</a></span>
    </>
  )
}

export default Dashboard