import React, { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { TextField, Button, Container, Typography, Paper, Box } from "@mui/material";
import "../styles/auth.css";


const Register = () => {
  const{login}=useContext(AuthContext);
  const [formData, setFormData] = useState({ username: "", email: "", password: "" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:8080/api/auth/register", formData);
      localStorage.setItem("token",response.data.token);
      login(response.data.token);
      alert("Registration Successful!");
      navigate("/");
    } catch (error) {
      alert(error.response?.data?.message || "Registration failed!");
    }
  };

  return (
    <div className="auth-container">
      <Paper elevation={3} className="auth-box">
        <Typography variant="h5">Create Your Account</Typography>
        <form onSubmit={handleSubmit}>
          <TextField label="Username" name="username" fullWidth margin="normal" onChange={handleChange} required />
          <TextField label="Email" name="email" type="email" fullWidth margin="normal" onChange={handleChange} required />
          <TextField label="Password" name="password" type="password" fullWidth margin="normal" onChange={handleChange} required />
          <Button type="submit" fullWidth variant="contained" color="primary" className="auth-btn">Register</Button>
        </form>
        <Box mt={2}>
          <Typography variant="body2">
            Already have an account?{" "}
            <span className="auth-link" onClick={() => navigate("/login")}>Login</span>
          </Typography>
        </Box>
      </Paper>
    </div>
  );
};

export default Register;