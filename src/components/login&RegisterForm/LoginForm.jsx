import './LoginForm.Modules.scss'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'


const LoginForm = (props) => {

    return(
        <div className='bgOpacity'>
            <motion.section className='container' 
            initial={{ scale: 0 }} animate={{ rotate: 360, scale: 1 }}
            transition={{type: "spring", stiffness: 260, damping: 20}}>
                <article className="form">
                    <h1>Mit Email Anmelden</h1>

                    <input onChange={(e) => { props.setusername(e.target.value) }} type="text" placeholder='Username' />

                    <input onChange={(e) => { props.setpassword(e.target.value) }} type="password" placeholder='Password' />

                    <button className="loginBtn" onClick={props.login}>Login</button>

                    <p>Noch kein Mitglied? Dann registriere dich <Link to='/register'>hier</Link> </p>
                </article>
            </motion.section>
        </div>
    )
}

export default LoginForm