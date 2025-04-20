// import React, { useState } from "react";
// import { Button, TextField, Typography, Box, Container, Link } from "@mui/material";
// import { useTheme } from "@mui/material/styles";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";

// const Login = () => {
//   const [email, setEmail] = useState(""); // State for email
//   const [password, setPassword] = useState(""); // State for password
//   const theme = useTheme(); // Use the Solarized theme for styling
//   const navigate = useNavigate();
//   const URL = process.env.REACT_APP_API_URL;

//   const handleLogin = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post(`${URL}/api/auth/login`, {
//         email,
//         password,
//       });
//       alert("Login successful");
//       localStorage.setItem("token", response.data.token);
//       navigate("/");
//     } catch (err) {
//       console.error(err.response?.data || "An error occurred");
//       alert(err.response?.data?.message || "An error occurred");
//     }
//   };

//   return (
//     <Box
//       sx={{
//         minHeight: "100vh",
//         display: "flex",
//         justifyContent: "center",
//         alignItems: "center",
//         backgroundImage: `url(background.jpg)`,
//         backgroundSize: "cover",
//         backgroundPosition: "center",
//         backgroundRepeat: "no-repeat",
//         padding: "16px",
//       }}
//     >
//      <Container
//     maxWidth="sm"
//     sx={{
//       backgroundColor: "rgba(255, 255, 255, 0.6)", // Semi-transparent white
//       boxShadow: "0px 8px 24px rgba(0, 0, 0, 0.3)",
//       borderRadius: "16px",
//       padding: "40px",
//       textAlign: "center",
//       backdropFilter: "blur(50px)", // Frosted glass effect
//     }}
//   >
//     {/* Logo/Header */}
//     <Box
//       sx={{
//         display: "flex",
//         justifyContent: "center",
//         marginBottom: "24px",
//       }}
//     >
//       <img
//         src="pngegg.png" // Replace with the actual path to your logo
//         alt="Logo"
//         style={{
//           width: "100px",
//           height: "100px",
//           borderRadius: "50%",
//           boxShadow: `0px 4px 12px ${theme.palette.primary.main}`,
//         }}
//       />
//     </Box>

//     {/* Welcome Back Message */}
//     <Typography
//       variant="h4"
//       align="center"
//       sx={{
//         marginBottom: "24px",
//         color: theme.palette.text.primary,
//         fontWeight: "bold",
//         fontFamily: theme.typography.h2.fontFamily,
//       }}
//     >
//       Welcome Back
//     </Typography>

//     {/* Login Form */}
//     <Box
//       component="form"
//       onSubmit={handleLogin}
//       sx={{
//         display: "flex",
//         flexDirection: "column",
//         gap: "16px",
//       }}
//     >
//       <TextField
//         label="Email"
//         type="email"
//         value={email}
//         onChange={(e) => setEmail(e.target.value)}
//         required
//         fullWidth
//         InputLabelProps={{
//           style: { color: theme.palette.text.secondary },
//         }}
//         InputProps={{
//           style: { color: theme.palette.text.primary },
//         }}
//         sx={{
//           "& .MuiOutlinedInput-root": {
//             "& fieldset": {
//               borderColor: theme.palette.primary.main,
//             },
//             "&:hover fieldset": {
//               borderColor: theme.palette.secondary.main,
//             },
//             "&.Mui-focused fieldset": {
//               borderColor: theme.palette.primary.main,
//             },
//           },
//           transition: "all 0.3s ease",
//         }}
//       />
//       <TextField
//         label="Password"
//         type="password"
//         value={password}
//         onChange={(e) => setPassword(e.target.value)}
//         required
//         fullWidth
//         InputLabelProps={{
//           style: { color: theme.palette.text.secondary },
//         }}
//         InputProps={{
//           style: { color: theme.palette.text.primary },
//         }}
//         sx={{
//           "& .MuiOutlinedInput-root": {
//             "& fieldset": {
//               borderColor: theme.palette.primary.main,
//             },
//             "&:hover fieldset": {
//               borderColor: theme.palette.secondary.main,
//             },
//             "&.Mui-focused fieldset": {
//               borderColor: theme.palette.primary.main,
//             },
//           },
//           transition: "all 0.3s ease",
//         }}
//       />
//       <Button
//         type="submit"
//         fullWidth
//         variant="contained"
//         sx={{
//           background: `linear-gradient(45deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
//           color: "#fff",
//           fontWeight: "bold",
//           textTransform: "none",
//           boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.2)",
//           "&:hover": {
//             background: `linear-gradient(45deg, ${theme.palette.secondary.main}, ${theme.palette.primary.main})`,
//           },
//           transition: "all 0.3s ease",
//         }}
//       >
//         Login
//       </Button>
//     </Box>
//   </Container>
// </Box>
//   );
// };

// export default Login;


import React, { useState } from "react";
import {
  Box,
  Button,
  Container,
  Grid,
  Paper,
  TextField,
  Typography,
  Link,
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
      navigate("/");
    } catch (err) {
      console.error(err.response?.data || "An error occurred");
      alert(err.response?.data?.message || "An error occurred");
    }
  };

  return (
    <Grid container component="main" sx={{ height: "100vh" }}>
      {/* Left Side with background and text overlay */}
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
        {/* Overlay for better readability */}
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            zIndex: 1,
          }}
        />
        {/* Centered Text */}
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            zIndex: 2,
            textAlign: "center",
          }}
        >
          <Typography
            variant="h3"
            sx={{
              color: "#fff",
              fontWeight: "bold",
              textShadow: "0 0 10px #00e5ff, 0 0 20px #00e5ff",
              fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
              letterSpacing: 2,
              padding: "16px",
              borderRadius: "12px",
            }}
          >
            Sai Shakti Diagnostic
          </Typography>
        </Box>
      </Grid>

      {/* Right Side Form */}
      <Grid item xs={12} sm={6} md={5} component={Paper} elevation={6} square>
        <Container
          maxWidth="xs"
          sx={{
            mt: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Box sx={{ mb: 2 }}>
            <img src="/pngegg.png" alt="logo" width={80} height={80} />
          </Box>
          <Typography component="h1" variant="h5" sx={{ fontWeight: "bold" }}>
            Sign in to your account
          </Typography>

          <Box component="form" onSubmit={handleLogin} sx={{ mt: 3, width: "100%" }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{
                mt: 3,
                mb: 2,
                paddingY: 1.5,
                textTransform: "none",
                fontWeight: "bold",
              }}
            >
              Sign In
            </Button>
            <Box sx={{ textAlign: "center" }}>
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </Box>
          </Box>
        </Container>
      </Grid>
    </Grid>
  );
};

export default Login;
