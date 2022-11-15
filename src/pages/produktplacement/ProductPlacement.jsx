import { getByTitle } from "@testing-library/react"
import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import AddArticleButton from "../../components/buttons/addArticleButton/AddArticleButton"
import Navbar from "../../components/navbar/Navbar"
import "./ProductPlacement.Modules.scss"

const ProductPlacement = () => {


    const [classiefieds, setClassifieds] = useState('')
    const [delivery, setDelivery] = useState(false)
    const [getByTitle, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [amount, setAmount] = useState(0)
    const [price, setPrice] = useState('')
    const [priceType, setPriceTyp] = useState('')
    const [file, setFile] = useState(null)
    const [base64, setBase64] = useState('')
    const [postCode, setPostCode] = useState('')
    const [city, setCity] = useState('')
    const [street, setStreet] = useState('')
    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')


    useEffect(() => {
        if (file) {
            console.log(file.size)
            const reader = new FileReader()
            reader.onload = handleReaderLoaded
            reader.readAsDataURL(file)
        }
    }, [file])

    const handleReaderLoaded = (event) => {
        setBase64(event.target.result)
    }

    const handleClassifieds = (e) => {
        setClassifieds(e.target.value)
    }

    const handleDelivery = (e) => {
        setDelivery(e.target.value)
    }



    return (
        <>
            < Navbar />
            <section className="productplacementsec1">

                <div className="inputbietesuche dflex">

                    <form>
                        <p>Anzeigetyp:</p>
                        <input
                            type="radio" value="offer"
                            name="anzeigetyp" id="radiobtn"
                            onChange={handleClassifieds} />
                        <p className="radiodescript">Ich biete</p>
                        <input
                            type="radio" value="search"
                            name="anzeigetyp" id="radiobtn"
                            onChange={handleClassifieds}
                        />
                        <p className="radiodescript">Ich suche</p>
                    </form>
                </div>

                <div className="inputjanein dflex">
                    <p>Lieferung:</p>

                    <input
                        type="radio" value={true}
                        name="neinja" id="radiobtn"
                        checked={delivery === true}
                        onClick={() => setDelivery(true)} />
                    <p className="radiodescript">Ja</p>
                    <input
                        type="radio" value={false}
                        name="neinja" id="radiobtn"
                        checked={delivery === false}
                        onClick={() => setDelivery(false)} />
                    <p className="radiodescript">Nein</p>
                </div>

                <div className="inputtitel dflex">
                    <p>Titel der Anzeige:</p>
                    <input type="text" id="inputtextfield" onChange={(e) => setTitle(e.target.value)} />
                </div>

                <div className="inputbeschreibung dflex">
                    <p>Beschreibung:</p>
                    <input type="text" id="inputtextbeschreibung"
                        onChange={(e) => setDescription(e.target.value)} />
                </div>

                <div className="inputanzahl dflex">
                    <p>Anzahl:</p>
                    <input type="text" id="inputtextsmall" onChange={(e) => setAmount(e.target.value)} />
                </div>

                <div className="inputpreis dflex">
                    <p>Preis:</p>
                    <input type="number" id="inputtextsmall" onChange={(e) => setPrice(e.target.value)} />

                    <p className="radiodescript">EUR</p>
                    <input
                        type="radio" value="Festpreis"
                        name="preis" id="radiobtn"
                        checked={priceType === 'fixedPrice'}
                        onClick={(e) => setPriceTyp('fixedPrice')}
                    />
                    <p className="radiodescript">Festpreis</p>

                    <input
                        type="radio" value="VB"
                        name="preis" id="radiobtn"
                        checked={priceType === 'negotiable'}
                        onClick={(e) => setPriceTyp('negotiable')} />
                    <p className="radiodescript">VB</p>

                    <input
                        type="radio" value="Zu Verschenken"
                        name="preis" id="radiobtn"
                        checked={priceType === 'forFree'}
                        onClick={(e) => setPriceTyp('forFree')} />
                    <p className="radiodescript">Zu Verschenken</p>
                </div>

                <div className="inputpicture dflex">
                    <p>Bilder:</p>
                    <div>
                        <div id="display-image"></div>
                        <input
                            type="file" id="image-input"
                            accept="image/jpeg, image/png, image/jpg"
                            onChange={(e) => setFile(e.target.files[0])} />

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
                    <input
                        type="text" id="inputtextsmall"
                        className="marginrightsmall" placeholder="  PLZ"
                        onChange={(e) => setPostCode(e.target.value)} />
                    <input
                        type="text" id="inputtextfieldort"
                        placeholder="  Ort"
                        onChange={(e) => setCity(e.target.value)} />
                </div>
                <div className="inputstraße dflex">
                    <p>Strasse:</p>
                    <input
                        type="text" id="inputtextfield"
                        onChange={(e) => setStreet(e.target.value)} />
                </div>
                <div className="inputname dflex">
                    <p>Name:</p>
                    <input
                        type="text" id="inputtextfield"
                        onChange={(e) => setName(e.target.value)} />
                </div>
                <div className="inputtelefonnummer dflex">
                    <p>Telefonnumer:</p>
                    <input
                        type="text" id="inputtextfield"
                        onChange={(e) => setPhone(e.target.value)} />
                </div>
            </section>
            <section>
                < AddArticleButton />
            </section>
        </>

    )
}

export default ProductPlacement