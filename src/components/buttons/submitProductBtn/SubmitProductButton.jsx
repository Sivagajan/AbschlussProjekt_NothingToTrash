import style from './SubmitProductButton.module.scss'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const SubmitProductButton = (props) => {
    return (
        <Link to='/productplacement'>
                <motion.button className={style.submitProductBtn} 
                    whileTap={{scale: 0.95}}
                > Produkt einstellen </motion.button>
                </Link>
    )
}

export default SubmitProductButton