import style from './StartButton.module.scss'
import { motion } from 'framer-motion'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'


const StartButton = () => {

    const nav = useNavigate()

    const check = () => {
        nav('/market')
    }

    return(
        <>
            {/* <Userlogin open={open} setOpen={setOpen}/> */}

            <motion.button className={style.startBtn} 
            whileTap={{scale: 0.98}}
            onClick={check}> Starte jetzt! </motion.button>
        
        </>
    )
    
}
export default StartButton