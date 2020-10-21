import React, { Fragment } from 'react'
/* import { Link, Redirect } from 'react-router-dom' */
import { db, auth } from '../firebase'
/* import ButtonGF from './ButtonGF'; */
import FormLogin from './FormLogin';

const Login = () => {

    const [email, setEmail] = React.useState('')
    const [pass, setPass] = React.useState('')
    const [error, setError] = React.useState(null)
    const [validation, setValidation] = React.useState(false)

    const procesarDatos = e => {
        e.preventDefault()

        if (!email.trim()) {
            console.log('Datos vacíos email!')
            setError('Datos vacíos email!')
            return
        }
        if (!pass.trim()) {
            console.log('Datos vacíos pass!')
            setError('Datos vacíos pass!')
            return
        }
        if (pass.length < 6) {
            console.log('6 o más carácteres')
            setError('6 o más carácteres en pass')
            return
        }
        console.log('correcto...')
        setError(null)
    }

    const login = React.useCallback(async () => {
        try {
            const res = await auth.signInWithEmailAndPassword(email, pass)
            setEmail('')
            setPass('')
            setError(null)
            db.collection("users").doc(res.user.uid).get().then((snap) => {
                const user = snap.data();
                console.log('entro', user)
                setValidation(true)
            })
        } catch (error) {
            if (error.code === 'auth/user-not-found') {
                setError('Usuario o contraseña incorrecta')
            }
            if (error.code === 'auth/wrong-password') {
                setError('Usuario o contraseña incorrecta')
            }
            console.log(error.code)
            console.log(error.message)
        }
    }, [email, pass])

    return (
/*         <Fragment>
            {
                validation === false ?
                    ( */<Fragment>
                        <FormLogin/>
{/*                         <div className="contenedorMayorLogin">
  
                            <div className="contenedorIngreso">

                                <form onSubmit={procesarDatos} className="formLogin" >
                                    <div className="alert alert-danger">
                                        {error}
                                    </div>
                                    <div>
                                        <input
                                            className="inputIngreso"
                                            placeholder="Correo electronico"
                                            type="email"
                                            onChange={e => setEmail(e.target.value)}
                                            value={email} />
                                    </div>
                                    <div>
                                        <input
                                            className="inputIngreso"
                                            placeholder="Contraseña"
                                            type="password"
                                            onChange={e => setPass(e.target.value)}
                                            value={pass} />
                                    </div>
                                    <div>
                                        <button
                                            className="botonInputIngreso"
                                            onClick={() => login()}
                                        >Iniciar sesion</button>
                                    </div>

                                    <div>
                                    <Link to="/password"> <p id="textoOlvido">¿Olvidó su Contraseña? </p></Link>
                                    </div>
                                    <div className="botontesGoogle">
                                        <ButtonGF />
                                    </div>
                                    <div>
                                        <p id="pTres">¿Aún no eres parte?</p>

                                        <Link to='/registro' ><button id="botonRegistrate" className="botonInputIngreso "> Registrate</button></Link>
                                    </div>
                                </form>
                            </div>
                        </div> */}

                    </Fragment>
/*                     )
                    : <Redirect push to="/muro" />
            }
        </Fragment> */
    )
}

export default Login
