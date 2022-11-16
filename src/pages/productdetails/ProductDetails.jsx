import Navbar from "../../components/navbar/Navbar"
import Footer from "../../components/footer/Footer"
import './ProductDetails.Modules.scss'
import { motion } from 'framer-motion'
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import ArticleItem from '../../components/article/articleItem/ArticleItem'

const ProductDetails = () => {

    return (

        < div className="backgroundblue">
            <Navbar />
            <section className="detailssec1 dflex">
                <img className="imgdetails" src="./img/tablet.jpg" alt="" />
                <article>
                    <h2>Couch</h2>
                    <p className="price">45,00 EUR</p>
                    <div className="paddingbottom1 dflex">
                        <div className="zustandmarke">
                            <p>Zustand</p>
                            <p>Marke</p>
                            <p>Lieferung</p>
                            <p>Anzahl</p>
                        </div>
                        <div className="zustandmarke2">
                            <p>Zustand</p>
                            <p>Marke</p>
                            <p>Lieferung</p>
                            <p>Anzahl</p>
                        </div>
                    </div>
                    <h3>Produktbeschreibung</h3>
                    <p className="productdescription">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur illum saepe rem, beatae consequatur maxime incidunt. Nemo voluptatem consequatur non repellendus corporis totam, expedita minus, inventore exercitationem, mollitia dolore aperiam.</p>
                </article>
            </section>

            {/* BUTTON OHNE FUNKTION */}
            <div className="btnbottom">
                <motion.button className="registerBtnreverse" onClick={""}
                    whileTap={{ scale: 0.95 }}>Bearbeiten</motion.button>
                <motion.button className="registerBtn" onClick={""}
                    whileTap={{ scale: 0.95 }}>Verkauft</motion.button>
            </div>
            <div className="footerbottom"><Footer /></div>
        </div >
    )
}

export default ProductDetails