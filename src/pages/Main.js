import { Box, Button, Grid, TextField, Typography } from "@material-ui/core"
import React from "react"
import Header from "../components/Header"
import Images from "../components/Images"
import LoginAndLogout from "../components/LoginAndLogout"

const Main = () => {
  return (
    <Box minHeight="100vh" px={10} py={5} className="app">
      <Header />
      <LoginAndLogout />
      <Images />
    </Box>
  )
}

export default Main
