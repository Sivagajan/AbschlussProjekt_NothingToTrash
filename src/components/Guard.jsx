import { useEffect } from "react"
import { Outlet, useNavigate } from "react-router-dom"


const Guard = () => {
    const nav = useNavigate()

    const BACKEND = process.env.REACT_APP_BACKEND_APP

    useEffect(() => {
        const checkToken = async () => {
            const response = await fetch(`${BACKEND}api/verify`, {
                headers: {
                    Authentication: 'Bearer ' + localStorage.getItem('token')
                }
            })
            const data = await response.json()
            console.log(data)

            if(!data.state){
                alert('Zurück zu den Schatten! Du kannst nicht vorbei!')
                nav('/')
            }
        }
        checkToken()

    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

    return(
        <>
            <Outlet/>
        </>
    )
}

export default Guard