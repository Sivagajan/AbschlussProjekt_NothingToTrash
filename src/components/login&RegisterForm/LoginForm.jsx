import './LoginForm.Modules.scss'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'


const LoginForm = (props) => {

    return(
        <div>
            <motion.section className='container' 
            initial={{ scale: 0 }} 
            animate={{ scale: 1 , x: 100}}
            transition={{type: "spring", stiffness: 260, damping: 20}}>
                <article className="form">
                    <h1 className='text-align'>Mit Email anmelden</h1>
                    <p className='text-align'>Du hast bereits ein Konto? <Link to='/register'>Registrieren</Link> </p>

                    <input onChange={(e) => { props.setusername(e.target.value) }} type="text" placeholder='Username' />

                    <input onChange={(e) => { props.setpassword(e.target.value) }} type="password" placeholder='Password' />

                    <motion.button className="loginBtn" onClick={props.login}
                    whileTap={{scale: 0.85}}>Login</motion.button>

                </article>
            </motion.section>
        </div>
    )
}

export default LoginForm
