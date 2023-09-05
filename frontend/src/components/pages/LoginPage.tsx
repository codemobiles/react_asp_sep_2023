import React from "react";

import cmLogo from "@/assets/images/authen_header.jpg";
import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import { User } from "@/types/user.type";

type Props = {};

export default function LoginPage({}: Props) {
  const [user, setUser] = React.useState<User>({ username: "", password: "" });

  const handleSubmit = () => {
    alert(JSON.stringify(user));
  };

  return (
    <Box>
      <Typography variant="h2">Login</Typography>
      <form
        className="mt-5"
        onSubmit={(event) => {
          event.preventDefault();
          handleSubmit();
        }}
      >
        <Stack direction={"column"} spacing={3}>
          {/* Username */}
          <TextField
            id="username"
            label="Username"
            variant="outlined"
            onChange={(event) =>
              setUser({ ...user, username: event.target.value })
            }
          />

          {/* Password */}
          <TextField
            id="passowrd"
            label="Password"
            variant="outlined"
            type="password"
            onChange={(event) =>
              setUser({ ...user, password: event.target.value })
            }
          />

          <span># Debug {JSON.stringify(user)}</span>

          <Button variant="contained" type="submit">
            Login
          </Button>
          <Button variant="text">Don't have an account?</Button>
        </Stack>
      </form>
    </Box>
  );
}
