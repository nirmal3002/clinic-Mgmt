import React, { useState } from "react";
import { Button, TextField, Typography, Box, Container, Link } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState(""); // State for email
  const [password, setPassword] = useState(""); // State for password
  const theme = useTheme(); // Use the Solarized theme for styling
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
      navigate("/"); // Store token in localStorage
    } catch (err) {
      console.error(err.response?.data || "An error occurred");
      alert(err.response?.data?.message || "An error occurred");
    }
  };

  return (
    <Container
      maxWidth="sm"
      sx={{
        backgroundColor: theme.palette.background.paper,
        boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.2)",
        borderRadius: "8px",
        padding: "32px",
        marginTop: "64px",
      }}
    >
      {/* Logo/Header */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          marginBottom: "16px",
        }}
      >
        <img
          src="client/public/pngegg.png" // Replace with the actual path to your logo
          alt="Logo"
          style={{
            width: "80px",
            height: "80px",
            borderRadius: "50%",
            border: `2px solid ${theme.palette.primary.main}`,
          }}
        />
      </Box>

      {/* Login Title */}
      <Typography
        variant="h4"
        align="center"
        sx={{
          marginBottom: "16px",
          color: theme.palette.text.primary,
          fontFamily: theme.typography.h2.fontFamily,
        }}
      >
        Login
      </Typography>

      {/* Login Form */}
      <Box
        component="form"
        onSubmit={handleLogin}
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "24px",
        }}
      >
        <TextField
          label="Email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          fullWidth
          InputLabelProps={{
            style: { color: theme.palette.text.secondary },
          }}
          InputProps={{
            style: { color: theme.palette.text.primary },
          }}
          sx={{
            "& .MuiOutlinedInput-root": {
              "& fieldset": {
                borderColor: theme.palette.primary.main,
              },
              "&:hover fieldset": {
                borderColor: theme.palette.secondary.main,
              },
              "&.Mui-focused fieldset": {
                borderColor: theme.palette.primary.main,
              },
            },
          }}
        />
        <TextField
          label="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          fullWidth
          InputLabelProps={{
            style: { color: theme.palette.text.secondary },
          }}
          InputProps={{
            style: { color: theme.palette.text.primary },
          }}
          sx={{
            "& .MuiOutlinedInput-root": {
              "& fieldset": {
                borderColor: theme.palette.primary.main,
              },
              "&:hover fieldset": {
                borderColor: theme.palette.secondary.main,
              },
              "&.Mui-focused fieldset": {
                borderColor: theme.palette.primary.main,
              },
            },
          }}
        />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{
            backgroundColor: theme.palette.primary.main,
            color: theme.palette.text.primary,
            textTransform: "none",
            "&:hover": {
              backgroundColor: theme.palette.secondary.main,
            },
          }}
        >
          Login
        </Button>
      </Box>

      {/* Forgot Password Link */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          marginTop: "16px",
        }}
      >
        <Link
          href="#"
          underline="hover"
          sx={{
            color: theme.palette.secondary.main,
            fontFamily: theme.typography.h2.fontFamily,
          }}
        >
          Forgot Password?
        </Link>
        <Link
          href="/signup"
          underline="hover"
          sx={{
            color: theme.palette.primary.main,
            fontFamily: theme.typography.h2.fontFamily,
          }}
        >
          Sign Up
        </Link>
      </Box>
    </Container>
  );
};

export default Login;
