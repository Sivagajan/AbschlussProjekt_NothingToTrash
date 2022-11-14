import { useState } from "react"
import { useNavigate } from "react-router-dom"
import RegisterForm from "../../components/login&RegisterForm/RegisterForm"

const UserResgister = (props) => {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const nav = useNavigate()


    const register = async () => {

        const result = await fetch('http://localhost:9090/user/register',{
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({username, password})
        })

        

       /*  if(result.status === 200) {

            const data = await result.json()

            localStorage.setItem('token', data.token)
            nav('/market')
        } */
    }

    
    return (
        <div className="container">
            <div>
                <RegisterForm register={register} setusername={setUsername} setpassword={setPassword}/>
            </div>
        </div>
    )
}

export default UserResgister