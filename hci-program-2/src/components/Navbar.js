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
            Submit a Ticket
          </NavLink>
          <NavLink to="/view_form">
            View Ticket
          </NavLink>
        </NavMenu>
      </Nav>
    </>
  );
};
  
export default Navbar;