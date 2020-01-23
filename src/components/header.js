import React from "react"
import { Navbar, Nav, NavDropdown } from "react-bootstrap"
import logo from "../images/logoinv.png"
import style from "../styles/headerStyle.module.css"
// import 'bootstrap/dist/css/bootstrap.min.css'

//TRIBA SAM NAZVAT NAVBAR A NE HEADER AL JBG SAD

const Header = props => (
  <Navbar
    sticky="top"
    className={style.container}
    collapseOnSelect
    expand="lg"
    bg="dark"
    variant="dark"
  >
    {/*###### LOGO ######*/}
    <Navbar.Brand href="../">
      <img
        src={logo}
        width="55"
        height="50"
        className="d-inline-block align-top"
        alt="CR logo"
      />
    </Navbar.Brand>

    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
      {/*###### BOTUNI ######*/}
      <Nav className="mr-auto">
        <Nav.Link
          className="botuni"
          size="large"
          href="../"
          style={
            props.activePage === "./"
              ? { borderBottom: "2px solid #0069d9", color: "white" }
              : {}
          }
        >
          Home
        </Nav.Link>
        <Nav.Link
          className="botuni"
          href="../Blog"
          style={
            props.activePage === "./Blog"
              ? { borderBottom: "2px solid #0069d9", color: "white" }
              : {}
          }
        >
          Blog
        </Nav.Link>
        <Nav.Link
          className="botuni"
          href="../AboutUs"
          style={
            props.activePage === "./AboutUs"
              ? { borderBottom: "2px solid #0069d9", color: "white" }
              : {}
          }
        >
          About
        </Nav.Link>
        <Nav.Link
          className="botuni"
          href="../Contact"
          style={
            props.activePage === "./Contact"
              ? { borderBottom: "2px solid #0069d9", color: "white" }
              : {}
          }
        >
          Contact
        </Nav.Link>
        {/* <Nav.Link className="botuni" href="../MyGallery">
          My Gallery
        </Nav.Link>
        <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
          <NavDropdown.Item href="#">Action1</NavDropdown.Item>
          <NavDropdown.Item href="#">Action2</NavDropdown.Item>
          <NavDropdown.Item href="#">Action3</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#">Separated link</NavDropdown.Item>
        </NavDropdown> */}
      </Nav>

      {/*###### LOGIN/REGISTER ######*/}
      <Nav>
        <Nav.Link href="#">Login</Nav.Link>
        <Nav.Link href="#">Register</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
)

export default Header
