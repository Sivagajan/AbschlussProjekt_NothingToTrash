import './AddArticleButton.Modules.scss'
import {motion} from 'framer-motion'
import { useNavigate } from 'react-router-dom'

const AddArticleButton = (props) => {

    const nav = useNavigate()

    const article = props.article

    console.log('AAB',article)

    const addArticle = async () => {

        const response = await fetch('http://localhost:9090/article/add', {
            method:'POST',
            headers :{
                'content-type' : 'application/json',
                Authentication : 'Bearer ' + localStorage.getItem('token')},
            body: JSON.stringify(article)
        })

        const data = await response.json()

        console.log(data)

        nav('/market')
    }

    return(
        <motion.button   
            whileHover={{ scale: 1.2}}
            whileTap={{ scale: 0.8}} 
            className="addArticleBtn" 
            onClick={addArticle}> Artikel Hinzufügen 
        </motion.button>
    )
}

export default AddArticleButton