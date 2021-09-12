import React, { useRef, useState } from "react";
import { useHistory } from "react-router-dom";
import { useAuth } from "../../app/auth/AuthContext";
import { FcGoogle } from "react-icons/fc";
import './login.css';

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
            history.push("/app/home");
        } catch {
            setError("Parece que hubo un error, por favor intenta de nuevo");
        }

        setLoading(false);
    }

    return (
        <div className='content-login'>
            {error && <div className='alert'>{error}</div>}
            <form onSubmit={handleSubmit}>
                <fieldset>
                    <div className= 'fields'>
                        <i class="fas fa-user"/>
                        <label >E-mail:</label>
                    </div>
                    <input type="email" ref={emailRef} required={true} className='field' placeholder={'Ejemplo@gmail.com'}/>
                </fieldset>
                <fieldset>
                    <div className= 'fields'>
                        <i class="fas fa-lock"/>
                        <label>Contraseña:</label>
                    </div>
                    <input type="password" ref={passwordRef} required={true} className='field' />
                </fieldset>
                <div><a className='btn-forge'> ¿Olvidaste tu contraseña?</a></div>
                <input disabled={loading} value="Iniciar sesion" type="submit" className='btn-log' />
            </form>
            <h2 class="linea"><span>O ingresar con</span></h2>
            <div className='btn-google'><FcGoogle className='icon-google'/>
                <p id='txt-google'>Continuar con Google</p>
            </div>
            <div className="log-coment">
                ¿Aun no tienes una cuenta? <a className="btn-s"> Creala aqui</a>
            </div>
        </div>
    );
};

export default Login;
