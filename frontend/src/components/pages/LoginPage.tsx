/* eslint-disable @typescript-eslint/no-unused-vars */

import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import { User } from "@/types/user.type";
import { Controller, useForm } from "react-hook-form";

export default function LoginPage() {
  const initialValue: User = { username: "admin", password: "1234" };

  const { control, handleSubmit } = useForm<User>({
    defaultValues: initialValue,
  });

  const doSubmit = (user: User) => {
    alert(JSON.stringify(user));
  };

  return (
    <Box>
      <Typography variant="h2">Login</Typography>
      <form className="mt-5" onSubmit={handleSubmit(doSubmit)}>
        <Stack direction={"column"} spacing={3}>
          {/* Username */}
          <Controller
            control={control}
            name="username"
            render={({ field }) => (
              <TextField
                {...field}
                id="username"
                label="Username"
                variant="outlined"
              />
            )}
          />

          {/* Password */}
          <Controller
            control={control}
            name="password"
            render={({ field }) => (
              <TextField {...field} label="Password" variant="outlined" />
            )}
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
