import { useState } from "react"
import { useNavigate } from "react-router-dom"
import Navbar from "../../components/navbar/Navbar"
import "./ProductPlacement.Modules.scss"

const ProductPlacement = () => {


    return (
        <>
            < Navbar />
            <section className="productplacementsec1">

                <div className="inputbietesuche dflex">
                    <p>Anzeigetyp:</p>
                    <input type="radio" value="Ich biete" name="anzeigetyp" /> Ich biete
                    <input type="radio" value="Ich suche" name="anzeigetyp" /> Ich suche
                </div>

                <div className="inputjanein dflex">
                    <p>Lieferung:</p>
                    <input type="radio" value="Ja" name="anzeigetyp" /> Ja
                    <input type="radio" value="Nein" name="anzeigetyp" /> Nein
                </div>

                <div className="inputtitel dflex">
                    <p>Titel der Anzeige:</p>
                    <input type="text" />
                </div>

                <div className="inputbeschreibung dflex">
                    <p>Beschreibung:</p>
                    <input type="text" />
                </div>

                <div className="inputanzahl dflex">
                    <p>Anzahl:</p>
                    <input type="text" />
                </div>

                <div className="inputpreis dflex">
                    <p>Preis:</p>
                    <input type="text" /> Euro
                    <input type="radio" value="Festpreis" name="anzeigetyp" /> Festpreis
                    <input type="radio" value="VB" name="anzeigetyp" /> VB
                    <input type="radio" value="Zu Verschenken" name="anzeigetyp" /> Zu Verschenken
                </div>

                <div className="inputpicture dflex">
                    <p>Bilder:</p>
                    <div>
                        <div id="display-image"></div>
                        <input type="file" id="image-input" accept="image/jpeg, image/png, image/jpg" />

                        {/* const image_input = document.querySelector("#image-input");
                        image_input.addEventListener("change", function() {
                        const reader = new FileReader();
                        reader.addEventListener("load", () => {
                        const uploaded_image = reader.result;
                        document.querySelector("#display-image").style.backgroundImage = `url(${uploaded_image})`; });
                        reader.readAsDataURL(this.files[0]);}); */}
                    </div>
                </div>

                {/* Hier müssen wir noch props einfügen für die kategorien */}
                <div className="kategorie dflex">
                    <p>Anzahl:</p>
                    <select id="cars" name="cars">
                        <option value="volvo">Volvo</option>
                        <option value="saab">Saab</option>
                        <option value="fiat">Fiat</option>
                        <option value="audi">Audi</option>
                    </select>
                </div>

                <div className="inputplzort dflex">
                    <p>Adresse:</p>
                    <input type="text" />
                </div>
                <div className="inputstraße dflex">
                    <p>Strasse:</p>
                    <input type="text" />
                </div>
                <div className="inputname dflex">
                    <p>Name:</p>
                    <input type="text" />
                </div>
                <div className="inputtelefonnummer dflex">
                    <p>Telefonnumer:</p>
                    <input type="text" />
                </div>
            </section>
        </>

    )
}

export default ProductPlacement