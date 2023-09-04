import React from "react";

import cmLogo from "@/assets/images/authen_header.jpg";
import { Box, Button, Stack, TextField, Typography } from "@mui/material";

type Props = {};

export default function LoginPage({}: Props) {
  const [user, setUser] = React.useState({ username: "", password: "" });

  return (
    <Box>
      <Typography variant="h2">Login</Typography>
      <form className="mt-5">
        <Stack direction={"column"} spacing={3}>
          {/* Username */}
          <TextField id="username" label="Username" variant="outlined" />

          {/* Password */}
          <TextField
            id="passowrd"
            label="Password"
            variant="outlined"
            type="password"
          />

          <span># Debug {JSON.stringify(user)}</span>

          <Button variant="contained">Login</Button>
          <Button variant="text">Don't have an account?</Button>
        </Stack>
      </form>
    </Box>
  );
}
