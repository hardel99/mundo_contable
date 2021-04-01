import React, { useRef, useState} from "react";
import { useAuth } from "../../app/auth/AuthContext";

const Login = () => {
    const emailRef = useRef();
    const passwordRef = useRef();
    const { signup } = useAuth();
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    function handleSubmit(e) {
        e.preventDefault();

        try {
            setError("");
            setLoading(true);
            //await signup(emailRef.current.value, passwordRef.current.value); <----Idk why this don't work, but it dont so...
            signup(emailRef.current.value, passwordRef.current.value);
        } catch {
            setError(
                "Parece que hubo un error :/, por favor intenta mas tarde"
            );
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
            <input disabled={loading} value="Iniciar sesion" type="submit"/>
        </form>
        <div className='log-coment'>Ya tienes una cuenta? Ingresa aqui!</div>
    </>
    );
};

export default Login;