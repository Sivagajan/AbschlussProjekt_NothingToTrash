import RegisterButton from '../buttons/registerButton/RegisterButton'
import './Navbar.Modules.scss'
import { motion } from 'framer-motion'
import { useState } from 'react'
import Userlogin from '../../pages/userlogin/UserLogin'



const Navbar = () => {

    const [open, setOpen] = useState(false)

    return (
        <nav>
            <p>nothingtotrash</p>
            <div className="dflex">
                <div className='div1'>
                    <a className='underline-animation link' href="/market">Marktplatz</a>
                    <a className='underline-animation link' href="/">Über uns</a>
                </div>
                <div className='div2'>
                    <Userlogin open={open} setOpen={setOpen}/>
                    <motion.a className='link' 
                    whileTap={{scale: 0.8,}}
                    onClick={() => setOpen(true)}
                    >Log In</motion.a>
                    <RegisterButton/>
                </div>
            </div>
        </nav>
    )

}

export default Navbar