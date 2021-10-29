import React from "react";
import { Button, Container, Nav, Navbar, Offcanvas } from "react-bootstrap";
import useFirebase from "../hooks/useFirebase";

export default function Header() {
    const { signInUsingGoogle,user, logOut } = useFirebase()
  return (
    <>
      <Navbar bg="light" expand={false} sticky="top">
        <Container>
          <Navbar.Brand href="#">Navbar</Navbar.Brand>

          {/* User Login Check */}
          {
              user.displayName ? <>
                <span>{user.displayName}</span>
                <Button onClick={logOut}>Log Out</Button>
              </> : <Button onClick={signInUsingGoogle}>Login</Button>
          }

          <Navbar.Toggle aria-controls="offcanvasNavbar" />
          <Navbar.Offcanvas
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
            placement="end"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id="offcanvasNavbarLabel">
                Navbar
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3">
                <Nav.Link href="#action1">Home</Nav.Link>
                <Nav.Link href="#action2">Link</Nav.Link>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </>
  );
}
