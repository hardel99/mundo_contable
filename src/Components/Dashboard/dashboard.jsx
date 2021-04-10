import React, { useRef, useState } from "react";
import { useAuth } from "../../app/auth/AuthContext";
import { Link, useHistory } from "react-router-dom";

export default function Dashboard() {
    const [error, setError] = useState("");
    const [phone, setPhone] = useState("");
    const { currentUser, logout } = useAuth();
    const history = useHistory();
    const number = useRef("");
    const message = useRef("");

    async function handleLogout() {
        setError("");

        try {
            await logout();
            history.push("/");
        } catch {
            setError("Algo salio mal, espera un poco mientras lo resolvemos");
        }
    }

    function sendMessage() {
        //Meanwhile it could be in the terminal
        if (number.current.value !== 11) {
            setError("Ingrese un numero valido porfavor");
        }
        console.log("A message");
    }

    function getFormatted(e) {
        if (e.target.value.length < 16) {
            var cleaned = ("" + e.target.value).replace(/\D/g, "");

            let normValue = `(${cleaned.substring(0, 3)}${
                cleaned.length > 3 ? ") " : ""
            }${cleaned.substring(3, 7)}${
                cleaned.length > 7 ? "-" : ""
            }${cleaned.substring(7, 11)}`;

            setPhone(normValue);
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
            <br />
            <br />
            <h2>Send message</h2>
            <form onSubmit={sendMessage} id="sendMessage">
                <fieldset>
                    <label>Numero:(debe incluir la extension de pais)</label>
                    <input
                        type="phone"
                        required={true}
                        placeholder="(###) ####-####"
                        onChange={getFormatted}
                        value={phone}
                    />
                </fieldset>
                <fieldset>
                    <label>Mensaje:</label>
                    <textarea
                        ref={message}
                        required={true}
                        maxLength={100}
                        rows={4}
                        cols={50}
                        placeholder="Ingrese su mensaje aqui"
                    />
                </fieldset>
                <input value="Mandar SMS" type="submit" />
            </form>
            <br />
            <button onClick={handleLogout}>Logout</button>
        </>
    );
}
