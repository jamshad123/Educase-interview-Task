import React from 'react'
import { NavLink } from "react-router-dom";

function Nav() {
  return (
    
        <div className="navbar d-flex">
      <NavLink to="/">Login</NavLink>
      <NavLink to="/signup">Signup</NavLink>
    </div>
  )
}

export default Nav