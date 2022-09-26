import React from "react";
import { Nav, NavLink, NavMenu } 
    from "./NavbarElements";
  
const Navbar = () => {
  return (
    <>
      <Nav>
        <NavMenu>
          <NavLink to="/home">
            Home
          </NavLink>
          <NavLink to="/input_form">
            Input form
          </NavLink>
          <NavLink to="/view_form">
            View form
          </NavLink>
        </NavMenu>
      </Nav>
    </>
  );
};
  
export default Navbar;