import { useState } from "react"
import { useNavigate } from "react-router-dom"
import './UserRegister.Modules.scss'
import { motion } from 'framer-motion'
import Navbar from "../../components/navbar/Navbar"


const UserResgister = () => {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const nav = useNavigate()

    /* const [passwordShown, setPasswordShown] = useState(false)

const togglePassword = () => {
    setPasswordShown(!passwordShown);
};
*/

    // type={passwordShown ? "text" : "password"}

    const register = async () => {
        const user = {
            username: username,
            password: password
        }

        const result = await fetch('http://localhost:9090/user/register', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })

        const data = await result.json()

        if (data.state) {
            setUsername('')
            setPassword('')
        }
        nav('/market')
    }

    return (
        <div className="height1">
            <Navbar />
            <section className='registerSection'>
                <article className="registerForm">
                    <h1>Registriere dich mit deinem Namen</h1>

                    <input value={username} onChange={(e) => { setUsername(e.target.value) }} type="text" placeholder='Username' />

                    <input value={password} onChange={(e) => { setPassword(e.target.value) }} type="password" placeholder='Passwort' />
                    {/* <span>icon here</span> */}

                    <motion.button className="registerBtn" onClick={register}
                        whileTap={{ scale: 0.95 }}>Account erstellen</motion.button>

                </article>
            </section>
        </div>
    )
    /*  return (
         <div className="container">
             <div>
                 <RegisterForm register={register} setusername={setUsername} setpassword={setPassword}/>
             </div>
         </div>
     ) */
}

export default UserResgister