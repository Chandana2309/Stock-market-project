import React from "react";
import ReactDOM from "react-dom/client"; // Use 'react-dom/client' for React 18
import App from "./App";
import { AuthProvider } from "./context/AuthContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <AuthProvider>
        <App />
    </AuthProvider>
);



