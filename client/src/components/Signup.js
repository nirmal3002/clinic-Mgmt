import React, { useState } from "react";
import {
  Button,
  TextField,
  Typography,
  Box,
  Container,
  Link,
} from "@mui/material";

import { useTheme } from "@mui/material/styles";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const theme = useTheme();
  const navigate = useNavigate();

  const URL = process.env.REACT_APP_API_URL;

  const handleSignup = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(`${URL}/api/auth/register`, {
        name,
        email,
        password,
      });

      alert(response.data.message);

      navigate("/login");
    } catch (err) {
      console.error(err.response?.data || "An error occurred");
      alert(err.response?.data?.message || "Signup failed");
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
      <Typography
        variant="h4"
        align="center"
        sx={{
          marginBottom: "16px",
          color: theme.palette.text.primary,
        }}
      >
        Signup
      </Typography>

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
        />

        <TextField
          label="Email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          fullWidth
        />

        <TextField
          label="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          fullWidth
        />

        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{
            textTransform: "none",
            paddingY: 1.5,
            fontWeight: "bold",
          }}
        >
          Signup
        </Button>

        <Typography align="center">
          Already have an account?{" "}
          <Link
            component="button"
            variant="body2"
            onClick={() => navigate("/login")}
          >
            Login
          </Link>
        </Typography>
      </Box>
    </Container>
  );
};

export default Signup;