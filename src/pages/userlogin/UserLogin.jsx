import { useState } from "react"
import { useNavigate } from "react-router-dom"
import LoginForm from '../../components/login&RegisterForm/LoginForm'

const Userlogin = (props) => {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const nav = useNavigate()


    const login = async () => {
        const result = await fetch('http://localhost:9090/user/login',{
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({username, password})
        })
        if(result.status === 200) {

            const data = await result.json()

            localStorage.setItem('token', data.token)
            nav('/market')
        }
    }

    console.log(username, password)
    
    return (props.open)?(
        <div className="container">
            <div>
                <LoginForm login={login} setusername={setUsername} setpassword={setPassword}/>
            </div>
        </div>
    ):""
}

export default Userlogin