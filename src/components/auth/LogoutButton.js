import React from "react";
import { useNavigate } from "react-router-dom";

function LogoutButton() {
    const navigate = useNavigate()

    const handleLogout = () => {
        sessionStorage.clear();

        navigate("/");
    };

    return (
        <button onClick={handleLogout} style={{ backgroundColor: 'red', color: 'white' }}>Logout</button>
    )


}

export default LogoutButton;