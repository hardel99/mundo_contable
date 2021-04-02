import React, { useRef, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { useAuth } from "../../app/auth/AuthContext";

const Login = () => {
    const emailRef = useRef();
    const passwordRef = useRef();
    const { login } = useAuth();
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const history = useHistory();

    async function handleSubmit(e) {
        e.preventDefault();

        try {
            setError("");
            setLoading(true);
            await login(emailRef.current.value, passwordRef.current.value);
            history.push("/dashboard");
        } catch {
            setError("Parece que hubo un error :/, por favor intenta de nuevo");
        }

        setLoading(false);
    }

    return (
        <>
            <h2>Iniciar sesion</h2>
            {error && <alert>{error}</alert>}
            <form onSubmit={handleSubmit}>
                <fieldset>
                    <label>E-mail:</label>
                    <input type="email" ref={emailRef} required={true} />
                </fieldset>
                <fieldset>
                    <label>Contraseña:</label>
                    <input type="password" ref={passwordRef} required={true} />
                </fieldset>
                <input
                    disabled={loading}
                    value="Iniciar sesion"
                    type="submit"
                />
            </form>
            <div>
                Aun no te registras? <Link to="/sign-up">Registrate aqui </Link>
                gratis
            </div>
            <div>
                <Link to="/forgotPassword">Olvidaste tu contraseña?</Link>
            </div>
        </>
    );
};

export default Login;