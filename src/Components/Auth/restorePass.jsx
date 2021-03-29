import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../app/auth/AuthContext";

const ForgotPassword = () => {
    const emailRef = useRef();
    const { resetPassword } = useAuth();
    const [error, setError] = useState("");
    const [message, setMessage] = useState("");
    const [loading, setLoading] = useState(false);

    async function handleSubmit(e) {
        e.preventDefault();

        try {
            setMessage("");
            setError("");
            setLoading(true);
            await resetPassword(emailRef.current.value);
            setMessage("Revisa tu correo para el resto de las indicaciones");
        } catch {
            setError(
                "Parece que hubo un error y no podemos restaurar la contraseña"
            );
        }

        setLoading(false);
    }

    return (
        <>
            <h2>Restaurar Contraseña</h2>
            {error && <alert>{error}</alert>}
            {message && <alert>{message}</alert>}
            <form onSubmit={handleSubmit}>
                <fieldset>
                    <label>E-mail:</label>
                    <input type="email" ref={emailRef} required={true} />
                </fieldset>
                <input
                    disabled={loading}
                    value="Restaurar contraseña"
                    type="submit"
                />
            </form>
            <div>
                Aun no te registras? <Link to="/sign-up">Registrate aqui </Link>
                gratis
            </div>
            <div>
                <Link to="/log-in">Iniciar sesion</Link>
            </div>
        </>
    );
};

export default ForgotPassword;
