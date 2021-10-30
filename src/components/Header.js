import React from "react";
import { Button, Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Link } from 'react-router-dom';
import logo from "../assets/logo.svg";
import useAuth from "../hooks/useAuth";


export default function Header() {
  const { user, logOut } = useAuth();

  return (
    <>
      <Navbar bg="light" collapseOnSelect expand="lg" sticky="top">
        <Container>
          <Navbar.Brand as={Link} to="/">
            <img width="150px" src={logo} alt="Logo" />
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mx-auto">
              {/* <Nav.Link href="#features">Home</Nav.Link>
              <Nav.Link href="#pricing">Pricing</Nav.Link> */}
            </Nav>

            {/* User Login Check */}
            <Nav>
              {user.displayName ? (
                <>
                  <NavDropdown title="Orders" id="collasible-nav-dropdown">
                    <NavDropdown.Item as={Link} to="orders">
                      My Orders
                    </NavDropdown.Item>
                    <NavDropdown.Item as={Link} to="manageOrder">
                      Manage All Orders
                    </NavDropdown.Item>
                    <NavDropdown.Item as={Link} to="addNewProduct">
                      Add A New Service
                    </NavDropdown.Item>
                  </NavDropdown>
                  <span className="m-2">{user.displayName}</span>
                  <Button variant="danger" onClick={logOut}>
                    Log Out
                  </Button>
                </>
              ) : (
                <Link to="/login">
                  <Button>Login</Button>
                </Link>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
