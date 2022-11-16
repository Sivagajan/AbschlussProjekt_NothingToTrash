import style from './RegisterButton.module.scss'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const RegisterButton = () => {
    return(

            <Link to={'/register'}><motion.button className={style.registerBtn}
                whileTap={{scale: 0.95}}
            > Registriere Dich </motion.button></Link>
    )
}
export default RegisterButton