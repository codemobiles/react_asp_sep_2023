/* eslint-disable @typescript-eslint/no-unused-vars */

import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import { User } from "@/types/user.type";
import { Controller, useForm } from "react-hook-form";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { authSelector } from "@/store/slices/authSlice";

const formValidateSchema = Yup.object().shape({
  username: Yup.string()
    .required("Username must be more than 3 letters")
    .min(4),
  password: Yup.string().required("Password is required"),
});

export default function LoginPage() {
  const initialValue: User = { username: "admin", password: "1234" };
  const authReducer = useSelector(authSelector)

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<User>({
    defaultValues: initialValue,
    resolver: yupResolver(formValidateSchema),
  });

  const doSubmit = async (user: User) => {
    const result = await axios.post(
      "https://localhost:8081/api/Auth/login",
      user
    );

    alert(JSON.stringify(result.data));
  };

  return (
    <Box>
      <Typography variant="h2">Login {authReducer.count}</Typography>
      <form className="mt-5" onSubmit={handleSubmit(doSubmit)}>
        <Stack direction={"column"} spacing={3}>
          {/* Username */}
          <Controller
            control={control}
            name="username"
            render={({ field }) => (
              <TextField
                {...field}
                error={Boolean(errors.username?.message)}
                helperText={errors.username?.message}
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
              <TextField
                {...field}
                label="Password"
                variant="outlined"
                error={Boolean(errors.password?.message)}
                helperText={errors.password?.message}
              />
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
