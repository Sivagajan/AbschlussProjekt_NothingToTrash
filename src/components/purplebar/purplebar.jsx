
import style from './PurpleBar.module.scss'
import { motion } from 'framer-motion'


const PurpleBar = () => {
    return (
        <section className={style.purplenbarbg}>
            <p>nothingtotrash - eine online Platztform um Müll zu vermeiden.</p>
            <motion.a href="./register" 
            whileTap={{scale: 0.95}}>
                <button className={style.registerBtn}>Registriere Dich </button>
                </motion.a>
            <div>
                <img src="./img/purplebarcircle.png" alt="" />
            </div>
        </section>


    )
}

export default PurpleBar