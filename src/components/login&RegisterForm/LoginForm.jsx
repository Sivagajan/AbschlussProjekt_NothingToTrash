import './LoginForm.Modules.scss'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'


const LoginForm = (props) => {

    return (

        <motion.section className='container1'
            initial={{ scale: 0 }}
            animate={{ scale: 1, x: 100 }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}>

            <article className="form">
                <button onClick={props.closeUserLogin}>X</button>
                <h1 className='text-align'>Mit Email anmelden</h1>
                <p className='text-align'>Du hast bereits ein Konto? <Link to='/register'>Registrieren</Link> </p>

                <input onChange={(e) => { props.setusername(e.target.value) }} type="text" placeholder='Username' />

                <input onChange={(e) => { props.setpassword(e.target.value) }} type="password" placeholder='Password' />

                <motion.button className="loginBtn" onClick={props.login}
                    whileTap={{ scale: 0.85 }}>Login</motion.button>

            </article>
        </motion.section>

    )
}

export default LoginForm
