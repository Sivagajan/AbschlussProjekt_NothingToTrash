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

            <div className="headlineDive">
                <h1 className="headlineOne">Registriere dich</h1>
                <h1 className="headlineTwo">& nimm Teil</h1>
            </div>


            <section className='registerSection'>

                <article className="registerFaces">
                    
                    <div className="faceB">
                        <img src="./img/Group1b.svg" alt="face" />
                    </div>
                    <div className="faceC avatar ">
                        <img src="./img/Group1c.svg" alt="face" />
                    </div>
                    <div className="faceF avatarTwo">
                        <img src="./img/Group1f.svg" alt="face" />
                    </div>
                    <div className="faceE">
                        <img src="./img/Group1e.svg" alt="face" />
                    </div>
                    <div className="faceD">
                        <img src="./img/Group1d.svg" alt="face" />
                    </div>
                    <div className="faceA avatarTwo">
                        <img src="./img/Group1a.svg" alt="face" />
                    </div>
                    <div className="dottsRed">
                        <img src="./img/DottsRed.svg" alt="dotts" />
                    </div>
                    <div className="dottsGreen">
                        <img src="./img/DottsGreen.svg" alt="dotts" />
                    </div>

                </article>

                <article className="registerForm">
                    <h1>Mit Namen Registrieren</h1>

                    <input value={username} onChange={(e) => { setUsername(e.target.value) }} type="text" placeholder='Username' />

                    <input value={password} onChange={(e) => { setPassword(e.target.value) }} type="password" placeholder='Passwort' />
                    {/* <span>icon here</span> */}

                    <motion.button className="registerBtn" onClick={register}
                        whileTap={{ scale: 0.95 }}>Account erstellen</motion.button>

                </article>
            </section>
        </div>
    )
}

export default UserResgister