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
                    <input type="radio" value="Ich biete" name="anzeigetyp" id="radiobtn" />
                    <p className="radiodescript">Ich biete</p>
                    <input type="radio" value="Ich suche" name="anzeigetyp" id="radiobtn" />
                    <p className="radiodescript">Ich suche</p>
                </div>

                <div className="inputjanein dflex">
                    <p>Lieferung:</p>
                    <input type="radio" value="Ja" name="neinja" id="radiobtn" />
                    <p className="radiodescript">Ja</p>
                    <input type="radio" value="Nein" name="neinja" id="radiobtn" />
                    <p className="radiodescript">Nein</p>
                </div>

                <div className="inputtitel dflex">
                    <p>Titel der Anzeige:</p>
                    <input type="text" id="inputtextfield" />
                </div>

                <div className="inputbeschreibung dflex">
                    <p>Beschreibung:</p>
                    <input type="text" id="inputtextbeschreibung" />
                </div>

                <div className="inputanzahl dflex">
                    <p>Anzahl:</p>
                    <input type="text" id="inputtextsmall" />
                </div>

                <div className="inputpreis dflex">
                    <p>Preis:</p>
                    <input type="number" id="inputtextsmall" />
                    <p className="radiodescript">EUR</p>
                    <input type="radio" value="Festpreis" name="preis" id="radiobtn" />
                    <p className="radiodescript">Festpreis</p>
                    <input type="radio" value="VB" name="preis" id="radiobtn" />
                    <p className="radiodescript">VB</p>
                    <input type="radio" value="Zu Verschenken" name="preis" id="radiobtn" /> <p className="radiodescript">Zu Verschenken</p>
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
                    <p>Kategorie:</p>
                    <select id="categorys" name="categorys">
                        <option value="volvo">Volvo</option>
                        <option value="saab">Saab</option>
                        <option value="fiat">Fiat</option>
                        <option value="audi">Audi</option>
                    </select>
                </div>

                <div className="inputplzort dflex">
                    <p>Adresse:</p>
                    <input type="text" id="inputtextsmall" className="marginrightsmall" placeholder="  PLZ" />
                    <input type="text" id="inputtextfieldort" placeholder="  Ort" />
                </div>
                <div className="inputstraße dflex">
                    <p>Strasse:</p>
                    <input type="text" id="inputtextfield" />
                </div>
                <div className="inputname dflex">
                    <p>Name:</p>
                    <input type="text" id="inputtextfield" />
                </div>
                <div className="inputtelefonnummer dflex">
                    <p>Telefonnumer:</p>
                    <input type="text" id="inputtextfield" />
                </div>
            </section>
        </>

    )
}

export default ProductPlacement