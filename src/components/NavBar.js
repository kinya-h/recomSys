import React, { useState, Component } from "react";
import './../css/NavBar.css';
// import "./../css/NavBar.css";
import { navItems } from "./NavItems";
import { Link } from "react-router-dom";
// import { ProfileDropdownMenu } from "./Dropdown";
// import AccountDropDown from "./AccountDropDown";

export default function NavBar({ name}) {
  
  const handleSubmit = () => {};

  
  return (
    <div className="nav">
      <ul className="nav-items">
        {navItems.map((item) => {
          
          return (
            <li  key={item.id} className={item.cName}>
              <Link to={{
                pathname : item.path,
                 state :{name: name}}}>
                {item.title}
              </Link>
            </li>
          );
        })}
      </ul>

      {/* <form onSubmit={handleSubmit}>
        <label>
          Pick your favorite flavor:
          <select >
            <option value="grapefruit">Grapefruit</option>
            <option value="lime">Lime</option>
            <option value="coconut">Coconut</option>
            <option value="mango">Mango</option>
          </select>
        </label>
        <input type="submit" value="Submit" />
      </form> */}
    </div>
    // <Navbar>
    //   <Navbar.Header>
    //     <Navbar.Brand>
    //       <a href="/">React-Bootstrap</a>
    //     </Navbar.Brand>
    //   </Navbar.Header>
    //   <Nav>
    //     <NavItem eventKey={1} href="/">Home</NavItem>
    //     <NavItem eventKey={2} href="/login">Login</NavItem>
    //   </Nav>
    // </Navbar>
  );
}
