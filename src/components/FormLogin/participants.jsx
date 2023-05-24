import React from "react"
import Button from "react-bootstrap/Button"
import Form from "react-bootstrap/Form"
import style from "./login.module.css"
import Logo from "../../assets/images/logo 16x9.png"

function ParticipantsLogin() {
  return (
    <>
      <div className={style.containerLogo}>
        <img className={style.logo} src={Logo} alt="logo" />
      </div>
      <div className={style.h1}>
        Intel® AI Global Impact Festival 2023 Global & Intel Judge
      </div>
      <div className={style.h2}>Login to your account</div>

      <Form>
        <Form.Group className="mb-3" controlId="formEntryId">
          <Form.Label>Entry ID</Form.Label>
          <Form.Control type="entryId" placeholder="Input your Entry ID" />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Choose your country</Form.Label>
          <Form.Select>
            <option>Choose your country</option>
          </Form.Select>
        </Form.Group>

        <div className={style.containerLogo}>
          <Button variant="warning" type="submit" className={style.buttonEntry}>
            See Results
          </Button>
        </div>
      </Form>
    </>
  )
}

export default ParticipantsLogin
