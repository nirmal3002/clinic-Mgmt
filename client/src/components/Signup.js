import React, { useState } from "react";
import { Button, TextField, Typography, Box, Container } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import axios from "axios";

const Signup = () => {
  const [name, setName] = useState(""); // State for name
  const [email, setEmail] = useState(""); // State for email
  const [password, setPassword] = useState(""); // State for password
  const theme = useTheme(); // Use the Solarized theme for styling

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/api/auth/register", {
        name,
        email,
        password,
      });
      alert("Signup successful");
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
      {/* Signup Header */}
      <Typography
        variant="h4"
        align="center"
        sx={{
          marginBottom: "16px",
          color: theme.palette.text.primary,
          fontFamily: theme.typography.h2.fontFamily,
        }}
      >
        Signup
      </Typography>

      {/* Signup Form */}
      <Box
        component="form"
        onSubmit={handleSignup}
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "24px",
        }}
      >
        <TextField
          label="Name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
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
          Signup
        </Button>
      </Box>
    </Container>
  );
};

export default Signup;
