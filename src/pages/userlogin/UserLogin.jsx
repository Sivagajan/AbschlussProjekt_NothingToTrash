import { useState } from "react"
import { useNavigate } from "react-router-dom"
import LoginForm from '../../components/login&RegisterForm/LoginForm'

const Userlogin = (props) => {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const nav = useNavigate()

    const BACKEND = process.env.REACT_APP_BACKEND_ADRESS


    const login = async () => {

        console.log(username, password)

        const result = await fetch(`${BACKEND}/user/login`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ username, password })
        })

        if (result.status === 200) {

            const data = await result.json()

            localStorage.setItem('token', data.token)
            nav('/market')
            props.setOpen(false)
            props.setKey(true)
        }else{
            alert('deine Login daten waren fehlerhaft')
        }
    }

    console.log(username, password)

    return (props.open) ? (
        <LoginForm login={login} closeUserLogin={() => props.setOpen(false)} setusername={setUsername} setpassword={setPassword} />
    ) : null

}

export default Userlogin