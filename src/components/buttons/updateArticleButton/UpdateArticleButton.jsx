import style from './UpdateArticleButton.module.scss'
import {motion} from 'framer-motion'
import { useNavigate } from 'react-router-dom'

const UpdateArticleButton = (props) => {

    const nav = useNavigate()

    const updateArticle = async () => {

        const referenced = props.article

        console.log('REEEEEFFFFFF',referenced)

        const article = {
                _id : referenced.params,
                user : referenced.userID,
                img : referenced.img,
                title : referenced.titleRef.current.innerText,
                price : referenced.priceRef.current.innerText,
                category : referenced.categoryRef.current.innerText,
                delivery : referenced.deliveryRef.current.innerText,
                description : referenced.descriptionRef.current.innerText,
                amount : referenced.amountRef.current.innerText
        }

        console.log('UA', article)

        const response = await fetch('http://localhost:9090/article/update', {
            method:'PUT',
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
        className={style.registerBtnreverse} 
        onClick={updateArticle}
        whileTap={{ scale: 0.95 }}>Speichern</motion.button>
    )
}

export default UpdateArticleButton