import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import AddArticleButton from "../../components/buttons/addArticleButton/AddArticleButton"
import Navbar from "../../components/navbar/Navbar"
import Footer from "../../components/footer/Footer"
import "./ProductPlacement.Modules.scss"


const ProductPlacement = () => {


    const [classiefieds, setClassifieds] = useState('')
    const [category, setCategory] = useState('')
    const [delivery, setDelivery] = useState(false)
    const [title, setTitle] = useState('')
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
    const [rating, setRating] = useState('')

    const randomRating = () => {

        const rating = Math.floor((Math.random() * 6) + 1)
        console.log(rating)
        setRating(rating)
    }

    const article = {
        'classiefieds': classiefieds,
        'category': category,
        'delivery': delivery,
        'title': title,
        'description': description,
        'amount': amount,
        'price': price,
        'priceType': priceType,
        'img': base64,
        'postCode': postCode,
        'city': city,
        'street': street,
        'name': name,
        'phone': phone,
        'rating': rating
    }

    useEffect(() => {
        if (file) {
            console.log(file.size)
            const reader = new FileReader()
            reader.onload = handleReaderLoaded
            reader.readAsDataURL(file)
            console.log(file)

            randomRating()
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

    const handlePriceType = (e) => {
        setPriceTyp(e.target.value)
    }

    const handleCategories = (e) => {
        setCategory(e.target.value)
    }


    return (
        <div className="backgroundblue">
            < Navbar />
            <section className="productplacementsec1">

                <div className="dflex">

                    <p className="width200">Anzeigetyp:</p>
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

                </div>

                <div className="inputjanein dflex">
                    <p className="width200">Lieferung:</p>

                    <input
                        type="radio" value={true}
                        name="neinja" id="radiobtn"
                        onClick={() => handleDelivery} />
                    <p className="radiodescript">Ja</p>
                    <input
                        type="radio" value={false}
                        name="neinja" id="radiobtn"
                        onClick={() => handleDelivery} />
                    <p className="radiodescript">Nein</p>
                </div>

                <div className="inputtitel dflex">
                    <p className="width200">Titel der Anzeige:</p>

                    <input
                        type="text" id="inputtextfield"
                        onChange={(e) => setTitle(e.target.value)} />

                </div>

                <div className="inputbeschreibung dflex">
                    <p className="width200">Beschreibung:</p>
                    <input type="text" id="inputtextbeschreibung"
                        onChange={(e) => setDescription(e.target.value)} />
                </div>

                <div className="inputanzahl dflex">
                    <p className="width200">Anzahl:</p>
                    <input type="text" id="inputtextsmall" onChange={(e) => setAmount(e.target.value)} />
                </div>

                <div className="inputpreis dflex">
                    <p className="width200">Preis:</p>
                    <input type="number" id="inputtextsmall" onChange={(e) => setPrice(e.target.value)} />

                    <p className="radiodescript">EUR</p>

                    <input
                        type="radio" value="Festpreis"
                        name="preis" id="radiobtn"
                        onChange={(e) => handlePriceType}
                    />
                    <p className="radiodescript">Festpreis</p>

                    <input
                        type="radio" value="VB"
                        name="preis" id="radiobtn"
                        onChange={(e) => handlePriceType} />
                    <p className="radiodescript">VB</p>

                    <input
                        type="radio" value="Zu Verschenken"
                        name="preis" id="radiobtn"
                        onChange={(e) => handlePriceType} />
                    <p className="radiodescript">Zu Verschenken</p>

                </div>

                <div className="inputpicture dflex">
                    <p className="width200">Bilder:</p>
                    <div>
                        <div id="display-image">
                            <img className="image" src={`${base64}`} /> </div>
                        <input
                            type="file" id="image-input"
                            accept="image/jpeg, image/png, image/jpg"
                            onChange={(e) => setFile(e.target.files[0])} />

                    </div>
                </div>

                {/* Hier müssen wir noch props einfügen für die kategorien */}
                <div className="kategorie dflex">
                    <p className="width200">Kategorie:</p>
                    <select id="categorys" name="categorys" onChange={handleCategories}>
                        <option value="furniture">Möbel</option>
                        <option value="fashion">Fashion</option>
                        <option value="electronics">Elektronik</option>
                        <option value="books">Bücher</option>
                    </select>
                </div>

                <div className="inputplzort dflex">
                    <p className="width200">Adresse:</p>
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
                    <p className="width200">Strasse:</p>
                    <input
                        type="text" id="inputtextfield"
                        onChange={(e) => setStreet(e.target.value)} />
                </div>
                <div className="inputname dflex">
                    <p className="width200">Name:</p>
                    <input
                        type="text" id="inputtextfield"
                        onChange={(e) => setName(e.target.value)} />
                </div>
                <div className="inputtelefonnummer dflex">
                    <p className="width200">Telefonnumer:</p>
                    <input
                        type="text" id="inputtextfield"
                        onChange={(e) => setPhone(e.target.value)} />
                </div>
            </section>

            <section className="artikelhinzufuegenbtn">
                < AddArticleButton article={article} />

            </section>
            <Footer />
        </div>

    )
}

export default ProductPlacement