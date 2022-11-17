import style from './WunschButton.module.scss'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHeart } from "@fortawesome/free-regular-svg-icons"
import {motion} from 'framer-motion'


const WunschButton = () => {
    return(
        <>
            <motion.button 
            whileTap={{scale: 0.95}} className={style.wunschBtn}> <span><FontAwesomeIcon icon={faHeart}/></span>Auf Wunschliste</motion.button>

        </>
    )
}


export default WunschButton