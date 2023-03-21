import React from "react";
import icons from "./Icons"
import Form from "./Form";
// import Header from "./Header";
import Icons from "./Icons";

function Login() {
  return (
    <div className="container">
      <div className="formComp">
        {/* <Header /> */}
        <Form />
        <Icons />
      </div>
    </div>
  )
}

export default Login