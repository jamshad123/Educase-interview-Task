import React, { useState } from "react";

function Form() {
    const [form, setForm] = useState(true);

  return (
    <>
    <div className="formCompChild">
      <div
        className={ form && "formCompChild_active"}
        onClick={() => setForm(true)}
      >
        Login
      </div>
      <div
        className={!form && "formCompChild_active"}
        onClick={() => setForm(false)}
      >
        Signup
      </div>
    </div>
    <form>
      {!form && <input type="text" placeholder="Enter name" />}
      <input type="email" placeholder="Email Address" />
      <input type="password" placeholder="Password" />
      <button type="submit">{form ? "LOGIN" : "SIGNUP"}</button>
    </form>
    {form && <h4>Forgot Password?</h4>}
    {<h5>or {form ? "login" : "signup"} with</h5>}
  </>
  )
}

export default Form