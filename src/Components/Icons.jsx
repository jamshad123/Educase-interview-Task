import React from "react";
import facebook from "../Images/FB.png";
import google from "../Images/google.png";
import twitter from "../Images/twitter.png";



function Icons() {
  return (
    <>
    <div className="icons">
      <div className="icon">
        <img src={google} alt="google" />
      </div>
      <div className="icon">
        <img src={facebook} alt="facebook" />
      </div>
      <div className="icon">
        <img src={twitter} alt="twitter" />
      </div>
    </div>
    <h6>
      Don't have an Account? <b>Create new now!</b>
    </h6>
    <h6>
      By signing up, you are agree with our <b>Term & Conditions</b>
    </h6>
  </>
  )
}

export default Icons