import React from "react"
import { Container } from "react-bootstrap"
import style from "./auth.module.css"
import Header from "../../components/Header/header"
import Footer from "../../components/Footer/footer"
import FormLogin from "../../components/FormLogin/participants"

function LoginParticipants() {
  return (
    <>
      <Header />
      <Container className={style.container}>
        <FormLogin />
      </Container>
      <Footer />
    </>
  )
}

export default LoginParticipants
