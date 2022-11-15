import './dokumentationsButton.Modules.scss'
import { motion } from 'framer-motion'

const DokumentationsButton = () => {
    return(
        <motion.button className='dokuBtn' 
                /* whileHover={{ scale: 1 }} */
                whileTap={{scale: 0.8}}
            > Zur Dokumentation </motion.button>
    )
}

export default DokumentationsButton