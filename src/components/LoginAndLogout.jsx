import { Button, Grid, TextField, Typography } from "@material-ui/core"
import React from "react"

const LoginAndLogout = () => {
  return (
    <Grid container direction="column" spacing={2}>
      <Grid item container spacing={2}>
        <Grid item sm={6}>
          <Typography variant="h5" paragraph>
            Login
          </Typography>
          <Typography variant="subtitle2" gutterBottom>
            Username:
          </Typography>
          <TextField fullWidth placeholder="username" />
          <Typography variant="subtitle2" gutterBottom>
            Password:
          </Typography>
          <TextField fullWidth placeholder="password" />
        </Grid>
        <Grid item sm={6}>
          <Typography variant="h5" paragraph>
            Register
          </Typography>
          <Typography variant="subtitle2" gutterBottom>
            Username:
          </Typography>
          <TextField fullWidth placeholder="username" />
          <Typography variant="subtitle2" gutterBottom>
            Password:
          </Typography>
          <TextField fullWidth placeholder="password" />
        </Grid>
      </Grid>
      <Grid item container spacing={2}>
        <Grid item sm={6}>
          <Button fullWidth variant="contained">
            Login
          </Button>
        </Grid>
        <Grid item sm={6}>
          <Button fullWidth variant="contained">
            Register
          </Button>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default LoginAndLogout
