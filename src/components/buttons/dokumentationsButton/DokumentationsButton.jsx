import style from './dokumentationsButton.module.scss'
import { motion } from 'framer-motion'

const DokumentationsButton = () => {
    return(
        <motion.button className={style.dokuBtn} 
            whileTap={{scale: 0.95}}
            > Zur Dokumentation </motion.button>
    )
}

export default DokumentationsButton