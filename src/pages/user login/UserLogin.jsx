import { useState } from "react"
import { useNavigate } from "react-router-dom"
import LoginForm from '../../components/login&Register From/'

SERVER = process.env.BACKEND_ADRESS

const Userlogin = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const nav = useNavigate()

    const login = async () => {
        const fetchData = await fetch(`${SERVER}article`,{
            method: 'POST',
            headers: {
                'content-ype': 'application/json'
            },
            body: JSON.stringify({username, password})
        })
        if(fetchData.status === 200) {
            const data = await fetchData.json()

            localStorage.setItem('token', data.token)
            nav('/login/marktplatz')
        }
    }
    
    return(
        <div className="container">
            <div>
                <LoginForm login={login} setusername={setUsername} setpassword={setPassword}/>
            </div>
        </div>
    )
}

export default Userlogin