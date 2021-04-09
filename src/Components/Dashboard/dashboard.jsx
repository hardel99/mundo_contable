import React, { useState } from "react";
import { useAuth } from "../../app/auth/AuthContext";
import { Link, useHistory } from "react-router-dom";

export default function Dashboard() {
    const [error, setError] = useState("");
    const { currentUser, logout } = useAuth();
    const history = useHistory();

    async function handleLogout() {
        setError("");

        try {
            await logout();
            history.push("/");
        } catch {
            setError("Algo salio mal, espera un poco mientras lo resolvemos");
        }
    }

    return (
        <>
            <h1>Dashboard</h1>
            <h2>Profile:</h2>
            {error && <alert>{error}</alert>}
            <strong>Email: </strong> {currentUser.email}
            <br />
            <Link to="/update-profile">Update profile</Link>
            <br />
            <button onClick={handleLogout}>Logout</button>
        </>
    );
}
