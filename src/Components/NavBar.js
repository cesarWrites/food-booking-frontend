import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
  <div className="navbar">
    <nav>
      <ul>
        <li>
    <NavLink className="nav_link" to="/">Home</NavLink>
    </li>
    <li><NavLink className="nav_link" to="/login">Login</NavLink>
    </li>
    <li><NavLink className="nav_link" to="/courses">Courses</NavLink>
    </li>
    <li><NavLink className="nav_link" to="/lessons">My Lessons</NavLink>
    </li>
    <li><NavLink className="nav_link" to="/instructors">Instructors</NavLink>
    </li>
    <li><NavLink className="nav_link" to="/students">Students</NavLink>
    </li>
    </ul>
    </nav>
  </div>
  )
}

export default NavBar;