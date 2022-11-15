import { useEffect } from "react"
import { Outlet, useNavigate } from "react-router-dom"


const Guard = () => {
    const nav = useNavigate()

    useEffect(() => {
        const checkToken = async () => {
            const response = await fetch('http://localhost:9090/api/verify', {
                headers: {
                    Authentication: 'Bearer ' + localStorage.getItem('token')
                }
            })
            const data = await response.json()

            if(!data.state){
                alert('Zurück zu den Schatten! Du kannst nicht vorbei!')
                nav('/')
            }
        }
        checkToken()
    },[])

    return(
        <>
            <Outlet/>
        </>
    )
}

export default Guard