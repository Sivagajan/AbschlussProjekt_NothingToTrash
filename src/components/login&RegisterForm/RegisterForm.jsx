import './RegisterForm.Modules.scss'
import { motion } from 'framer-motion'
import { useState } from 'react'


const RegisterForm = (props) => {

    /* const [passwordShown, setPasswordShown] = useState(false)

    const togglePassword = () => {
        setPasswordShown(!passwordShown);
    };
 */

    // type={passwordShown ? "text" : "password"}

    return(
            <section className='registerSection'>
                <article className="registerForm">
                    <h1>Registriere dich mit deinem Namen</h1>

                    <input onChange={(e) => { props.setusername(e.target.value) }} type="text" placeholder='Username'/>

                    <input onChange={(e) => { props.setpassword(e.target.value) }} type="password"  placeholder='Passwort' />
                    {/* <span>icon here</span> */}

                    <motion.button className="loginBtn" onClick={props.login}
                    whileTap={{scale: 0.85}}>Account erstellen</motion.button>

                </article>
            </section>
    )
}

export default RegisterForm
