/* eslint-disable @typescript-eslint/no-unused-vars */

import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import { User } from "@/types/user.type";
import { Controller, useForm } from "react-hook-form";

export default function LoginPage() {
  const initialValue: User = { username: "admin", password: "" };

  const { control, handleSubmit } = useForm<User>({
    defaultValues: initialValue,
  });

  return (
    <Box>
      <Typography variant="h2">Login</Typography>
      <form className="mt-5">
        <Stack direction={"column"} spacing={3}>
          {/* Username */}
          <Controller
            control={control}
            name="username"
            render={(obj) => (
              <TextField
                {...obj.field}
                id="username"
                label="Username"
                variant="outlined"
              />
            )}
          />

          {/* Password */}
          <TextField
            id="passowrd"
            label="Password"
            variant="outlined"
            type="password"
          />

          <Button variant="contained" type="submit">
            Login
          </Button>
          <Button variant="text">Don't have an account?</Button>
        </Stack>
      </form>
    </Box>
  );
}
