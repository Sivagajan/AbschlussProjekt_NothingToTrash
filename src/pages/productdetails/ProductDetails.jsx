import Navbar from "../../components/navbar/Navbar"
import Footer from "../../components/footer/Footer"
import './ProductDetails.Modules.scss'

const ProductDetails = () => {

    return (

        < div className="completepage" >
            <Navbar />
            <section className="detailssec1 dflex">
                <img className="imgdetails" src="./img/tablet.jpg" alt="" />
                <article>
                    <h2>Couch</h2>
                    <p className="price">45,00 EUR</p>
                    <div className="paddingbottom dflex">
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
            <div className="btnbottom">
                <button>Bearbeiten</button>
                <button>Verkauft</button>
            </div>
            <div className="footerbottom"><Footer /></div>
        </div >
    )
}

export default ProductDetails