/* eslint-disable @typescript-eslint/no-unused-vars */

import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import { User } from "@/types/user.type";
import { Controller, useForm } from "react-hook-form";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import {httpClient} from "@/utils/HttpClient";
import { useSelector } from "react-redux";
import { RootState, useAppDispatch } from "@/store/store";
import {
  add,
  addWithDelay,
  authSelector,
  login,
  remove,
  removeWithDelay,
} from "@/store/slices/authSlice";

const formValidateSchema = Yup.object().shape({
  username: Yup.string()
    .required("Username must be more than 3 letters")
    .min(4),
  password: Yup.string().required("Password is required"),
});

export default function LoginPage() {
  const initialValue: User = { username: "admin", password: "12341234" };
  const authReducer = useSelector(authSelector);
  const dispatch = useAppDispatch();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<User>({
    defaultValues: initialValue,
    resolver: yupResolver(formValidateSchema),
  });

  const doSubmit = async (user: User) => {
    dispatch(login(user))
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
          {/* Redux Counter */}
          <Stack direction="row" justifyContent="space-around">
            <Button variant="contained" onClick={() => dispatch(remove())}>
              --
            </Button>
            <Typography variant="h2">{authReducer.count}</Typography>
            <Button variant="contained" onClick={() => dispatch(add())}>
              ++
            </Button>
          </Stack>

          {/* Redux Counter with Delay */}
          <Stack direction="row" justifyContent="space-around">
            <Button
              variant="contained"
              onClick={() => dispatch(removeWithDelay())}
            >
              delay(-)
            </Button>
            <Typography variant="h2">{authReducer.count}</Typography>
            <Button
              variant="contained"
              onClick={() => dispatch(addWithDelay())}
            >
              delay(+)
            </Button>
          </Stack>
        </Stack>
      </form>
    </Box>
  );
}
