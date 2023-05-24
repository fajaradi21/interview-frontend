import React from "react"
import { Routes, Route } from "react-router-dom"
import LoginParticipants from "../pages/auth/participant"
import Login from "../pages/auth/login"

function router() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/participants" element={<LoginParticipants />} />
    </Routes>
  )
}

export default router
