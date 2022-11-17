import Navbar from "../../components/navbar/Navbar"
import Footer from "../../components/footer/Footer"
import style from './ProductDetails.module.scss'
import { motion } from 'framer-motion'
import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import ArticleItem from '../../components/article/articleItem/ArticleItem'
import WunschButton from "../../components/buttons/wishButton/WunschButton"

const ProductDetails = () => {


    const params = useParams()

    console.log(params)

    const [detailedArticle, setdetailedArticle] = useState([])

    useEffect(() => {

        const fetchdata = async () => {
            
            const result = await fetch('http://localhost:9090/article/article', {
                method : 'POST',
                headers:{
                    'content-type' : 'application/json',
                    Authentication : 'Bearer ' + localStorage.getItem('token')
                },
                body: JSON.stringify(params)
            })
            
            if(result.status === 200){
                
                const data = await result.json()
                setdetailedArticle(data)
            }
            
        }
        fetchdata()
    },[])

    console.log(detailedArticle)

    return (

        < div className={style.backgroundblue}>
            <Navbar />
            <section className={`${style.detailssec1} ${style.dflex}`}>
                <img className={style.imgdetails} src={detailedArticle.img ? detailedArticle.img : 'Kein Bild '} alt="" />

                <article className={style.productInfo}>
                    <h2>{detailedArticle.title}</h2>
                    <p className={style.price}>{`${detailedArticle.price} EUR`}</p>
                    <div className={`${style.paddingbottom1} ${style.dflex}`}>
                        <div className={style.zustandmarke}>
                            <p className={style.pTag}>Kategorie</p>
                            <p className={style.pTag}>Lieferung</p>
                            <p className={style.pTag}>Anzahl</p>
                        </div>
                        <div className={style.zustandmarke}>
                            <p className={style.pTag}>{detailedArticle.category ? detailedArticle.category : ' bitte vorher erfragen'}</p>
                            <p className={style.pTag}>{detailedArticle.delivery ? detailedArticle.delivery : ' bitte vorher erfragen'}</p>
                            <p className={style.pTag}>{detailedArticle.amount ? detailedArticle.amount : '1'}</p>
                        </div>
                    </div>
                    <WunschButton />
                    <h3>Produktbeschreibung</h3>
                    <p className={style.productdescription}>{detailedArticle.description ? detailedArticle.description : 'Manchmal sagt ein Bild mehr aus, als 1000 worte'}</p>
                </article>
            </section>

            <div className={style.btnbottom}>
                
                    <motion.button className={style.registerBtnreverse} onClick={""}
                    whileTap={{ scale: 0.95 }}>Bearbeiten</motion.button>
                
                <motion.button className={style.registerBtn} onClick={""}
                    whileTap={{ scale: 0.95 }}>Verkauft</motion.button>
            </div>

            <div className={style.footerbottom}><Footer /></div>
        </div >
    )
}

export default ProductDetails