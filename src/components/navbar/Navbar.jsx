import RegisterButton from '../buttons/registerButton/RegisterButton'
import './Navbar.Modules.scss'
import { motion } from 'framer-motion'
import { useState } from 'react'
import Userlogin from '../../pages/userlogin/UserLogin'



const Navbar = () => {
    
    const [open, setOpen] = useState(false)

    const openForm = () => {
        setOpen(!open)
    }

    const logout = () =>{

        const result = localStorage.removeItem('token')
        console.log(result)
    }

    return (
        <nav>
            <p>nothingtotrash</p>
            <div className="aligneitems1 dflex">
                <div className='div1'>
                    <a className='underline-animation link textdeconone' href="/market">Marktplatz</a>
                    <a className='underline-animation link textdeconone' href="/">Über uns</a>
                </div>
                <div className='div2'>

                    <Userlogin open={open} setOpen={setOpen}/>
                    {open === true ? <motion.a className='underline-animation link textdeconone' 
                    whileTap={{scale: 0.8,}}
                    onClick={logout}
                    >Log Out</motion.a>:<motion.a className='underline-animation link textdeconone' 
                    whileTap={{scale: 0.8,}}
                    onClick={openForm}
                    >Log In</motion.a>}
                    <RegisterButton/>
                </div>
            </div>
        </nav>
    )

}

export default Navbar