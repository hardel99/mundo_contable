import React, { useRef, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { useAuth } from "../../app/auth/AuthContext";

const SignUp = () => {
    const emailRef = useRef();
    const passwordRef = useRef();
    const confirmPasswordRef = useRef();
    const { signup } = useAuth();
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const history = useHistory();

    async function handleSubmit(e) {
        e.preventDefault();

        if (passwordRef.current.value !== confirmPasswordRef.current.value) {
            return setError("Passwords do not match");
        }

        try {
            setError("");
            setLoading(true);
            await signup(emailRef.current.value, passwordRef.current.value);
            history.push("/");
        } catch {
            setError("Failed to create an account");
        }

        setLoading(false);
    }

    return (
        <>
            <h2>Registrarse</h2>
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
                <fieldset>
                    <label>Confirmar contraseña:</label>
                    <input
                        type="password"
                        ref={confirmPasswordRef}
                        required={true}
                    />
                </fieldset>
                <input disabled={loading} value="Registrarse" type="submit" />
            </form>

            <div>
                Ya tienes una cuenta? <Link to="log-in">Ingresa aqui!</Link>
            </div>
        </>
    );
};

export default SignUp;
