import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Container,
} from "reactstrap";

const AppNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="dark" dark expand="sm" className="mb-5">
        <Container className="d-flex justify-content-between align-items-center">
          <NavbarBrand href="/">ShoppingList</NavbarBrand>

          <NavbarToggler onClick={toggle} className="ms-auto" />

          <Collapse isOpen={isOpen} navbar>
            <Nav className="ms-auto d-flex align-items-center" navbar>
              <NavItem>
                <NavLink href="https://github.com/Saya1206">GitHub</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default AppNavbar;
