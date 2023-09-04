import React from "react";

import cmLogo from "@/assets/images/authen_header.jpg";
import { Box, Stack, TextField, Typography } from "@mui/material";

type Props = {};

export default function LoginPage({}: Props) {
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
        </Stack>
      </form>
    </Box>
  );
}
