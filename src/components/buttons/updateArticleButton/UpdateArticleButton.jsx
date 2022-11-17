import style from './UpdateArticleButton.module.scss'
import {motion} from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'


const UpdateArticleButton = (props) => {

    const nav = useNavigate()

    const article = props.article

    console.log('UAB',article)

    const updateArticle = async (props) => {

        console.log(props)

        const response = await fetch('http://localhost:9090/article/update', {
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
        <motion.button 
        className={style.registerBtnreverse} 
        onClick={''}
        whileTap={{ scale: 0.95 }}>Speichern</motion.button>
    )
}

export default UpdateArticleButton