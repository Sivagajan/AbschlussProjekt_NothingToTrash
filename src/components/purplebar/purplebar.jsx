
import './PurpleBar.Modules.scss'
import { motion } from 'framer-motion'


const PurpleBar = () => {
    return (
        <section className='purplenbarbg'>
            <p>nothingtotrash - eine online Platztform um Müll zu vermeiden.</p>
            <motion.a href="./register" whileTap={{scale: 0.8}}><button className='registerBtn'>Registriere Dich </button></motion.a>
            <div>
                <img src="./img/purplebarcircle.png" alt="" />
            </div>
        </section>


    )
}

export default PurpleBar