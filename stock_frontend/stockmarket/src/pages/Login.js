import React, { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { TextField, Button, Container, Typography, Paper, Box } from "@mui/material";
import "../styles/auth.css";

const Login = () => {
    const { login } = useContext(AuthContext);
    const [formData, setFormData] = useState({ email: "", password: "" }); // Updated to email
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post("http://localhost:8080/api/auth/login", formData);
            localStorage.setItem("token", response.data.token);
            login(response.data.token);
            alert("Login successful!");
            navigate("/");
        } catch (error) {
            console.log("Login error:", error);
            alert(error.response?.data?.message || "Login failed!");
        }
    };

    return (
        <div className="auth-container">
            <Paper elevation={3} className="auth-box">
                <Typography variant="h5">Welcome Back</Typography>
                <form onSubmit={handleSubmit}>
                    <TextField label="Email" name="email" fullWidth margin="normal" onChange={handleChange} required /> {/* Updated to email */}
                    <TextField label="Password" name="password" type="password" fullWidth margin="normal" onChange={handleChange} required />
                    <Button type="submit" fullWidth variant="contained" color="primary" className="auth-btn">Login</Button>
                </form>
                <Box mt={2}>
                    <Typography variant="body2">
                        Don't have an account?{" "}
                        <span className="auth-link" onClick={() => navigate("/register")}>Register</span>
                    </Typography>
                </Box>
            </Paper>
        </div>
    );
};

export default Login;