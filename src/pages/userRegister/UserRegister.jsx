import { useState } from "react"
import { useNavigate } from "react-router-dom"
import style from './UserRegister.module.scss'
import { motion } from 'framer-motion'
import Navbar from "../../components/navbar/Navbar"


const UserResgister = () => {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const nav = useNavigate()

    const BACKEND = process.env.REACT_APP_BACKEND_ADRESS

    const register = async () => {
        const user = {
            username: username,
            password: password
        }

        const result = await fetch(`${BACKEND}/user/register`, {
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
        <div className={style.height1}>
            <Navbar />

            <div className={style.headlineDiv}>

                <h1 className={`${style.headlineOne} ${style.hedalineStyle}`}>Registriere dich</h1>
                <h1 className={`${style.headlineTwo} ${style.hedalineStyle}`}>& nimm Teil</h1>
            </div>


            <section className={style.registerSection}>

                <article className={style.registerFaces}>

                    <div className={style.gerrit}>
                        <img src="./img/Gerrit.png" alt="face" />
                    </div>
                    <div className={`${style.potato} ${style.avatar}`}>
                        <img src="./img/potato.png" alt="face" />
                    </div>
                    <div className={style.stefan}>
                        <img src="./img/Stefan.png" alt="face" />
                    </div>
                    <div className={style.siva}>
                        <img src="./img/Siva.png" alt="face" />
                    </div>
                    <div className={style.magda}>
                        <img src="./img/Magda.png" alt="face" />
                    </div>
                    <div className={style.chris}>
                        <img src="./img/Christian.png" alt="face" />
                    </div>
                    <div className={style.dottsRed}>
                        <img src="./img/DottsRed.svg" alt="dotts" />
                    </div>
                    <div className={style.dottsGreen}>
                        <img src="./img/DottsGreen.svg" alt="dotts" />
                    </div>

                </article>

                <article className={style.registerForm}>
                    <h1 className={style.headlineThree}>Mit Namen Registrieren</h1>

                    <input value={username} onChange={(e) => { setUsername(e.target.value) }} type="text" placeholder='Username' />

                    <input value={password} onChange={(e) => { setPassword(e.target.value) }} type="password" placeholder='Passwort' />

                    <motion.button className={style.registerBtn} onClick={register}
                        whileTap={{ scale: 0.95 }}>Account erstellen</motion.button>

                </article>
            </section>
        </div >
    )
}

export default UserResgister