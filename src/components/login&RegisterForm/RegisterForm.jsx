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

                    <p className='datenschutz'>Wir senden Ihnen regelmäßig E-Mails mit Angeboten zu unseren Dienstleistungen. Sie können dieser Nutzung zu Werbezwecken jederzeit in Mein Account oder über den Link in den E-Mails oder über <a href="#">diesen Link</a> kostenlos widersprechen.</p>
                    
                    <p className='datenschutz'>Es gelten die <a href="#">nothingtotrash AGB.</a><span>Informationen zur Verarbeitung Ihrer Daten finden Sie in unserer <a href="#">Datenschutzerklärung</a>
                    </span> </p>
                    

                    <motion.button className="loginBtn" onClick={props.login}
                    whileTap={{scale: 0.85}}>Account erstellen</motion.button>

                </article>
            </section>
    )
}

export default RegisterForm
