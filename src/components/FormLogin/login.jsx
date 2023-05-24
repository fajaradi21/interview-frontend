import React from "react"
import Button from "react-bootstrap/Button"
import Form from "react-bootstrap/Form"
import style from "./login.module.css"
import Logo from "../../assets/images/logo 16x9.png"

function Login() {
  return (
    <>
      <div className={style.containerLogo}>
        <img className={style.logo} src={Logo} alt="logo" />
      </div>
      <div className={style.h1}>
        Intel® AI Global Impact Festival 2023 Selection Results
      </div>
      <div className={style.h2}>Input your Entry ID and Country</div>

      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Input your email" />
        </Form.Group>

        <div className={style.containerLogo}>
          <Button variant="warning" type="submit" className={style.buttonEntry}>
            Login
          </Button>
        </div>
      </Form>
    </>
  )
}

export default Login
