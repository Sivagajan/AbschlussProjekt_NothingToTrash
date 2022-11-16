import Navbar from "../../components/navbar/Navbar"
import Footer from "../../components/footer/Footer"
import style from './ProductDetails.module.scss'
import { motion } from 'framer-motion'
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import ArticleItem from '../../components/article/articleItem/ArticleItem'

const ProductDetails = () => {

    return (

        < div className={style.backgroundblue}>
            <Navbar />
            <section className={`${style.detailssec1} ${style.dflex}`}>
                <img className={style.imgdetails} src="./img/tablet.jpg" alt="" />
                <article className={style.productInfo}>
                    <h2>iPad</h2>
                    <p className={style.price}>45,00 EUR</p>
                    <div className={`${style.paddingbottom1} ${style.dflex}`}>
                        <div className={style.zustandmarke}>
                            <p className={style.pTag}>Zustand</p>
                            <p className={style.pTag}>Marke</p>
                            <p className={style.pTag}>Lieferung</p>
                            <p className={style.pTag}>Anzahl</p>
                        </div>
                        <div className={style.zustandmarke}>
                            <p className={style.pTag}>Wie neu</p>
                            <p className={style.pTag}>iPad</p>
                            <p className={style.pTag}>Ja</p>
                            <p className={style.pTag}>1 stk.</p>
                        </div>
                    </div>
                    <h3>Produktbeschreibung</h3>
                    <p className={style.productdescription}>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur illum saepe rem, beatae consequatur maxime incidunt. Nemo voluptatem consequatur non repellendus corporis totam, expedita minus, inventore exercitationem, mollitia dolore aperiam.</p>
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