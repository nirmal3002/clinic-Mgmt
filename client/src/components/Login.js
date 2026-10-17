import React, { useState } from "react";
import {
  Box,
  Button,
  Container,
  Grid,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const theme = useTheme();
  const navigate = useNavigate();
  const URL = process.env.REACT_APP_API_URL;

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(`${URL}/api/auth/login`, {
        email,
        password,
      });

      alert("Login successful");

      localStorage.setItem("token", response.data.token);

      navigate("/dashboard");
    } catch (err) {
      console.error(err.response?.data || "An error occurred");
      alert(err.response?.data?.message || "Invalid credentials");
    }
  };

  return (
    <Grid container component="main" sx={{ minHeight: "100vh" }}>
      {/* Left Side */}
      <Grid
        item
        xs={false}
        sm={6}
        md={7}
        sx={{
          position: "relative",
          backgroundImage: "url('/background.jpg')",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            zIndex: 1,
          }}
        />

        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            zIndex: 2,
            textAlign: "center",
            width: "90%",
          }}
        >
          <Typography
            variant="h3"
            sx={{
              color: "#fff",
              fontWeight: "bold",
              textShadow: "0 0 10px #00e5ff",
            }}
          >
            Sai Shakti Diagnostic
          </Typography>
        </Box>
      </Grid>

      {/* Right Side */}
      <Grid
        item
        xs={12}
        sm={6}
        md={5}
        component={Paper}
        elevation={6}
        square
      >
        <Container
          maxWidth="xs"
          sx={{
            mt: 8,
            mb: 4,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Box sx={{ mb: 2 }}>
            <img src="/pngegg.png" alt="logo" width={80} height={80} />
          </Box>

          <Typography component="h1" variant="h5" sx={{ fontWeight: "bold" }}>
            Sign In
          </Typography>

          <Box
            component="form"
            onSubmit={handleLogin}
            sx={{ mt: 3, width: "100%" }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              label="Email Address"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <TextField
              margin="normal"
              required
              fullWidth
              label="Password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            {/* SIGN IN BUTTON */}
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{
                mt: 3,
                mb: 2,
                py: 1.5,
                textTransform: "none",
                fontWeight: "bold",
              }}
            >
              Sign In
            </Button>

            {/* SIGN UP BUTTON FOR NEW USERS */}
            <Box sx={{ mt: 2, textAlign: "center" }}>
              <Typography variant="body2" sx={{ mb: 1 }}>
                New user? Create an account here.
              </Typography>

              <Button
                type="button"
                fullWidth
                variant="outlined"
                onClick={() => navigate("/Signup")}
                sx={{
                  py: 1.5,
                  textTransform: "none",
                  fontWeight: "bold",
                  borderWidth: 2,
                  borderColor: theme.palette.primary.main,
                  color: theme.palette.primary.main,
                  "&:hover": {
                    borderWidth: 2,
                    backgroundColor: theme.palette.action.hover,
                    borderColor: theme.palette.primary.dark,
                  },
                }}
              >
                Sign Up
              </Button>
            </Box>
          </Box>
        </Container>
      </Grid>
    </Grid>
  );
};

export default Login;
