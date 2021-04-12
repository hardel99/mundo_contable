import React, { useRef, useState } from "react";
import { useHistory } from "react-router-dom";
import { useAuth } from "../../app/auth/AuthContext";
import { FcGoogle } from "react-icons/fc";
import './signup.css';

const SignUp = () => {
    const nombreRef = useRef();
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
        <div className='content-signup'>
            {error && <alert>{error}</alert>}
            <form onSubmit={handleSubmit}>
                <fielset>
                    <div className='fields-signup'>
                        <i class="fas fa-user"/>
                        <label>Nombre:</label>
                    </div>
                    <input type="nombre" ref={nombreRef} required={true} className='field-signup' placeholder={'Pedro Ramirez'}/>
                </fielset>
                <fieldset>
                    <div className='fields-signup'>
                        <i class="fas fa-user"/>
                        <label>E-mail:</label>
                    </div>
                    <input type="email" ref={emailRef} required={true} className='field-signup' placeholder={'Ejemplo@gmail.com'}/>
                </fieldset>
                <fieldset>
                    <div className='fields-signup'>
                        <i class="fas fa-lock"/>
                        <label>Contraseña:</label>
                    </div>
                    <input type="password" ref={passwordRef} required={true} className='field-signup' />
                </fieldset>
                <fieldset>
                    <div className='fields-signup'>
                        <i class="fas fa-lock"/>
                        <label>Confirmar contraseña:</label>
                    </div>
                    <input type="password" ref={confirmPasswordRef} required={true} className='field-signup'/>
                </fieldset>
                <label class="container"> 
                    <input type="checkbox" required={true}/>
                    <span class="checkmark"/>
                    <a id='terms-conditions'>Acepto terminos y condiciones</a> 
                </label>
                <input disabled={loading} value="Registrarse" type="submit" className='btn-register' />
            </form>
            <h2 id='sign-linea' class="linea"><span>O ingresar con</span></h2>
            <div className='btn-google-s'><FcGoogle className='icon-google-s'/>
                <p id='txt-google-s'>Continuar con Google</p>
            </div>
            <div className= 'sign-coment'>
                Ya tienes una cuenta? <a className='btn-l'>Ingresa aqui!</a>
            </div>
        </div>
    );
};

export default SignUp;
