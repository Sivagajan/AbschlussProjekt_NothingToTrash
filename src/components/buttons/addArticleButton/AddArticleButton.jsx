import style from './AddArticleButton.module.scss'
import {motion} from 'framer-motion'
import { useNavigate } from 'react-router-dom'

const AddArticleButton = (props) => {

    const nav = useNavigate()
    const BACKEND = process.env.REACT_APP_BACKEND_ADRESS


    const article = props.article

    console.log('AAB',article)

    const addArticle = async (props) => {

        console.log(props)

        const response = await fetch(`${BACKEND}article/add`, {
            method:'POST',
            headers :{
                'content-type' : 'application/json',
                Authentication : 'Bearer ' + localStorage.getItem('token')},
            body: JSON.stringify(article,props)
        })


        const data = await response.json()

        console.log(data)

        nav('/market')
    }

    return(
        <motion.button className={style.addArticleBtn} 
            whileTap={{scale: 0.95}} 
            onClick={addArticle}> Artikel Hinzufügen 
        </motion.button>
    )
}

export default AddArticleButton