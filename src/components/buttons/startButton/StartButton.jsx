import './StartButton.Modules.scss'
import { motion } from 'framer-motion'
import { useState } from 'react'
import Userlogin from '../../../pages/userlogin/UserLogin'

const StartButton = () => {

    const [open, setOpen] = useState(false)

    return(
        <>
            <Userlogin open={open} setOpen={setOpen}/>
            <motion.button className='startBtn' 
                /* whileHover={{ scale: 1 }} */
                whileTap={{scale: 0.8}}
            onClick={() => setOpen(true)}> Starte jetzt! </motion.button>
        
        </>
    )
    
}
export default StartButton