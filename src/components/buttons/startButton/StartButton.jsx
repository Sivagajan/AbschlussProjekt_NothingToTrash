import './StartButton.Modules.scss'
import { motion } from 'framer-motion'
import LoginForm from '../../login&RegisterForm/LoginForm'
import { useState } from 'react'

const StartButton = (props) => {

    const [open, setOpen] = useState(false)


    return(
        <>
            <LoginForm open={open} setOpen={setOpen}/>
            <motion.button className='startBtn' 
                whileHover={{ scale: 1.2 }}whileTap={{scale: 0.8,}}
            onClick={() => setOpen(true) && props.setbg(true)}> Starte jetzt! </motion.button>
        
        </>
    )
}
export default StartButton