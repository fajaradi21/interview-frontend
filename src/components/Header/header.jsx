import React from "react"
import Container from "react-bootstrap/Container"
import Nav from "react-bootstrap/Nav"
import Navbar from "react-bootstrap/Navbar"
import style from "./header.module.css"
import Logo from "../../assets/svg/logo-16x9.svg"

function Header() {
  return (
    <>
      <Navbar bg="light" variant="light" className={style.nav} fixed="top">
        <Container>
          <Navbar.Brand href="/">
            <img className={style.logo} src={Logo} alt="logo" />
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="participants">Participants</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  )
}

export default Header
