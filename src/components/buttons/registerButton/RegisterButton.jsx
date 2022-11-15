import './RegisterButton.Modules.scss'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const RegisterButton = () => {
    return(

            <Link to={'/register'}><motion.button className='registerBtn' 
                whileHover={{ scale: 1 }}
                whileTap={{scale: 0.8}}
            > Registriere Dich </motion.button></Link>
    )
}
export default RegisterButton