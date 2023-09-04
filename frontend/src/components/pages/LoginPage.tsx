import React from "react";

import cmLogo from "@/assets/images/authen_header.jpg";
import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import { User } from "@/types/user.type";

type Props = {};

export default function LoginPage({}: Props) {
  const [user, setUser] = React.useState<User>({ username: "", password: "" });

  return (
    <Box>
      <Typography variant="h2">Login</Typography>
      <form className="mt-5">
        <Stack direction={"column"} spacing={3}>
          {/* Username */}
          <TextField
            id="username"
            label="Username"
            variant="outlined"
            onChange={(event) =>
              setUser({ username: event.target.value, password: user.password })
            }
          />

          {/* Password */}
          <TextField
            id="passowrd"
            label="Password"
            variant="outlined"
            type="password"
            onChange={(event) =>
              setUser({ username: user.username, password: event.target.value })
            }
          />

          <span># Debug {JSON.stringify(user)}</span>

          <Button variant="contained">Login</Button>
          <Button variant="text">Don't have an account?</Button>
        </Stack>
      </form>
    </Box>
  );
}
