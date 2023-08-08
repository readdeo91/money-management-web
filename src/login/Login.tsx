import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';
import {AuthenticateUserApiArg, useAuthenticateUserMutation} from "../store/moneyManagementApiGenerated";

function Copyright(props: any) {
  return (
      <Typography variant="body2" color="text.secondary" align="center" {...props}>
        {'Copyright © '}
        <Link color="inherit" href="https://mui.com/">
          Your Website
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
  );
}

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

interface loginData {
  accessToken: string,
  tokenType: string
}

export default function LogIn() {
  const navigate = useNavigate();
  const [authenticateUser, {data: authData, isLoading, isSuccess, error, isError }] = useAuthenticateUserMutation();

  let loginRequest: AuthenticateUserApiArg = { loginRequest: {
      usernameOrEmail: "",
      password: ""
    }}

  if (isLoading) {
  } else if (isSuccess) {
    if (authData !== undefined) {
      let authDataContainer = authData as loginData
      localStorage.setItem("auth", authDataContainer.accessToken);
      setTimeout(() => {
        navigate('/dashboard')
      }, 500)
    }
  } else if (isError) {
    // TODO error toast
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    loginRequest.loginRequest.usernameOrEmail = data.get('usernameOrEmail') as string
    loginRequest.loginRequest.password = data.get('password') as string

    authenticateUser(loginRequest)

    // let loginRequestBody = {
    //   usernameOrEmail: data.get('usernameOrEmail'),
    //   password: data.get('password')
    // };
    // console.log(loginRequestBody);

    // axios
    //     .post("http://localhost:8080/api/auth/signin", loginRequestBody, {
    //       headers: {
    //         'Content-Type': 'application/json',
    //         Accept: 'application/json',
    //         'Access-Control-Allow-Origin': '*',
    //         'Access-Control-Allow-Headers': '*',
    //         'Access-Control-Allow-Credentials': 'true'
    //       },
    //     })
    //     .then(function (response) {
    //       console.log(response);
    //       if (response.data.success === false) {
    //         toast.error(response.data.error, {
    //           position: "top-right",
    //           autoClose: 3000,
    //           hideProgressBar: true,
    //           closeOnClick: true,
    //           pauseOnHover: true,
    //           draggable: false,
    //           progress: 0,
    //           toastId: "my_toast",
    //         });
    //       } else {
    //         toast.success(response.data.message, {
    //           position: "top-right",
    //           autoClose: 3000,
    //           hideProgressBar: true,
    //           closeOnClick: true,
    //           pauseOnHover: true,
    //           draggable: false,
    //           progress: 0,
    //           toastId: "my_toast",
    //         });
    //         localStorage.setItem("auth", response.data.accessToken);
    //
    //         setTimeout(() => {
    //           navigate('/dashboard');
    //         }, 3000);
    //       }
    //     })
    //     .catch(function (error) {
    //       console.error(error);
    //     });
  }

  return (
      <ThemeProvider theme={defaultTheme}>
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <Box
              sx={{
                marginTop: 8,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
          >
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign up
            </Typography>
            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField
                      required
                      fullWidth
                      id="usernameOrEmail"
                      label="Email Address"
                      name="usernameOrEmail"
                      autoComplete="email"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                      required
                      fullWidth
                      name="password"
                      label="Password"
                      type="password"
                      id="password"
                      // autoComplete="new-password"
                  />
                </Grid>
                <Grid item xs={12}>
                  <FormControlLabel
                      control={<Checkbox value="allowExtraEmails" color="primary" />}
                      label="I want to receive inspiration, marketing promotions and updates via email."
                  />
                </Grid>
              </Grid>
              <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
              >
                Sign Up
              </Button>
              <Grid container justifyContent="flex-end">
                <Grid item>
                  <Link href="#" variant="body2">
                    Already have an account? Sign in
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
          <Copyright sx={{ mt: 5 }} />
        </Container>
      </ThemeProvider>
  );
}