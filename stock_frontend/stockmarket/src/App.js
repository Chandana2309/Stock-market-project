import React, { useContext } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { AuthProvider, AuthContext } from "./context/AuthContext"; 
import Home from "./components/Home";
import Dashboard from "./components/Dashboard";
import Market from "./components/Market";
import Budget from "./components/Budget";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Portfolio from "./components/Portfolio/Portfolio"; 
import BuyStocks from "./components/Portfolio/BuyStocks"; 
import CreateDemat from "./components/Portfolio/CreateDemat"; 
import LearningResource from "./components/LearningResource";
const theme = createTheme();

// *Protected Route Component*
const ProtectedRoute = ({ element }) => {
    const authContext = useContext(AuthContext);
    if (!authContext) return <Navigate to="/login" />;  // Prevents null errors

    const { user } = authContext;
    return user ? element : <Navigate to="/login" />;
};

function App() {
    return (
        <ThemeProvider theme={theme}>
            <AuthProvider>  {/* Ensure this wraps everything */}
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/dashboard" element={<ProtectedRoute element={<Dashboard />} />} />
                        <Route path="/market" element={<ProtectedRoute element={<Market />} />} />
                        <Route path="/portfolio" element={<ProtectedRoute element={<Portfolio />} />} />
                        <Route path="/buy-stocks" element={<BuyStocks />} />
                        <Route path="/create-demat" element={<CreateDemat />} />
                        <Route path="/learn" element={<LearningResource />} />
                        <Route path="/budget" element={<ProtectedRoute element={<Budget />} />} />
                        <Route path="/register" element={<Register />} />
                        <Route path="/login" element={<Login />} />
                    </Routes>
                </BrowserRouter>
            </AuthProvider>
        </ThemeProvider>
    );
}

export default App;