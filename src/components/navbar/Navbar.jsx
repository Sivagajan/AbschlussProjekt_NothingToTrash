import RegisterButton from '../buttons/registerButton/RegisterButton'
import style from './Navbar.module.scss'
import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import Userlogin from '../../pages/userlogin/UserLogin'



const Navbar = () => {
    
    const [open, setOpen] = useState(false)
    const [key, setKey] = useState(false)
    

    const openForm = () => {
        setOpen(!open)
    }

    useEffect(() => {
        const loginKey = localStorage.getItem('token')

        console.log(loginKey)
        if(loginKey){
            setKey(true)
        }
    },[])

    const logout = () =>{
        const result = localStorage.removeItem('token')
        console.log(result)

        setKey(false)
        setOpen(false)
    }

    return (
        <nav>
            <p>nothingtotrash</p>
            <div className={`${style.aligneitems1} ${style.dflex}`}>
                <div className={style.div1}>
                    <a className={`${style.underlineAnimation} ${style.link} ${style.textdeconone}`} href="/market">Marktplatz</a>
                    <a className={`${style.underlineAnimation} ${style.link} ${style.textdeconone}`} href="/">Über uns</a>
                </div>
                <div className={style.div2}>

                    <Userlogin open={open} setOpen={setOpen} setKey={setKey}/>
                    {key === true ? <motion.a className={`${style.underlineAnimation} ${style.link} ${style.textdeconone}`} 
                    whileTap={{scale: 0.95}}
                    onClick={logout}
                    >Log Out</motion.a>:<motion.a className={`${style.underlineAnimation} ${style.link} ${style.textdeconone}`} 
                    whileTap={{scale: 0.95}}
                    onClick={openForm}
                    >Log In</motion.a>}
                    <RegisterButton/>
                </div>
            </div>
        </nav>
    )

}

export default Navbar