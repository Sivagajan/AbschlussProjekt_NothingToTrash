import { useState, useEffect } from "react"
import AddArticleButton from "../../components/buttons/addArticleButton/AddArticleButton"
import Navbar from "../../components/navbar/Navbar"
import Footer from "../../components/footer/Footer"
import style from "./ProductPlacement.module.scss"
import { useNavigate } from "react-router-dom"


const ProductPlacement = () => {

    const nav = useNavigate()

    const BACKEND = process.env.REACT_APP_BACKEND_ADRESS

        const checkToken = async () => {
            const response = await fetch(`${BACKEND}/api/verify`, {
                headers: {
                    Authentication: 'Bearer ' + localStorage.getItem('token')
                }
            })
            const data = await response.json()
            if(data.state === false){
                nav('/market')
            }
            console.log('addArticle', data.state)
            
            setUserID(data.result.user)
            console.log('wir checken den token')

           
        }

        checkToken()
    
    const [userID, setUserID] = useState('')
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
        'rating': rating,
        'user': userID
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
        <div>
            < Navbar />
            <section className={style.productplacementsec1}>

                <div className={style.dflex}>

                    <p className={style.width200}>Anzeigetyp:</p>
                    <input
                        type="radio" value="offer"
                        name="anzeigetyp" id={style.radiobtn}
                        onChange={handleClassifieds} />
                    <p className={style.radiodescript}>Ich biete</p>
                    <input
                        type="radio" value="search"
                        name="anzeigetyp" id={style.radiobtn}
                        onChange={handleClassifieds}
                    />
                    <p className={style.radiodescript}>Ich suche</p>

                </div>

                <div className={`${style.inputjanein} ${style.dflex}`}>
                    <p className={style.width200}>Lieferung:</p>

                    <input
                        type="radio" value={true}
                        name="neinja" id={style.radiobtn}
                        onClick={() => handleDelivery} />
                    <p className={style.radiodescript}>Ja</p>
                    <input
                        type="radio" value={false}
                        name="neinja" id={style.radiobtn}
                        onClick={() => handleDelivery} />
                    <p className={style.radiodescript}>Nein</p>
                </div>

                <div className={`${style.inputtitel} ${style.dflex}`}>
                    <p className={style.width200}>Titel der Anzeige:</p>

                    <input
                        type="text" id={style.inputtextfield}
                        onChange={(e) => setTitle(e.target.value)} />

                </div>

                <div className={`${style.inputbeschreibung} ${style.dflex}`}>
                    <p className={style.width200}>Beschreibung:</p>
                    <input type="text" id={style.inputtextbeschreibung}
                        onChange={(e) => setDescription(e.target.value)} />
                </div>

                <div className={`${style.inputanzahl} ${style.dflex}`}>
                    <p className={style.width200}>Anzahl:</p>
                    <input type="text" id={style.inputtextsmall} onChange={(e) => setAmount(e.target.value)} />
                </div>

                <div className={`${style.inputpreis} ${style.dflex}`}>
                    <p className={style.width200}>Preis:</p>
                    <input type="number" id={style.inputtextsmall} onChange={(e) => setPrice(e.target.value)} />

                    <p className={style.radiodescript}>EUR</p>

                    <input
                        type="radio" value="Festpreis"
                        name="preis" id={style.radiobtn}
                        onChange={(e) => handlePriceType}
                    />
                    <p className={style.radiodescript}>Festpreis</p>

                    <input
                        type="radio" value="VB"
                        name="preis" id={style.radiobtn}
                        onChange={(e) => handlePriceType} />
                    <p className={style.radiodescript}>VB</p>

                    <input
                        type="radio" value="Zu Verschenken"
                        name="preis" id={style.radiobtn}
                        onChange={(e) => handlePriceType} />
                    <p className={style.radiodescript}>Zu Verschenken</p>

                </div>

                <div className={`${style.inputpicture} ${style.dflex}`}>
                    <p className={style.width200}>Bilder:</p>
                    <div>
                        <div id={style.displayimage}>
                            <img className={style.image} src={`${base64}`} alt="bild vom artikel"/> </div>
                        <input
                            type="file" id="image-input"
                            accept="image/jpeg, image/png, image/jpg"
                            onChange={(e) => setFile(e.target.files[0])} />

                    </div>
                </div>

                <div className={`${style.kategorie} ${style.dflex}`}>
                    <p className={style.width200}>Kategorie:</p>
                    <select id={style.categorys} name="categorys" onChange={handleCategories}>
                        <option value="furniture">Möbel</option>
                        <option value="fashion">Fashion</option>
                        <option value="electronics">Elektronik</option>
                        <option value="books">Bücher</option>
                    </select>
                </div>

                <div className={`${style.inputplzort} ${style.dflex}`}>
                    <p className={style.width200}>Adresse:</p>
                    <input
                        type="text" id={style.inputtextsmall}
                        className={style.marginrightsmall} placeholder="  PLZ"
                        onChange={(e) => setPostCode(e.target.value)} />
                    <input
                        type="text" id={style.inputtextfieldort}
                        placeholder="  Ort"
                        onChange={(e) => setCity(e.target.value)} />
                </div>
                <div className={`${style.inputstraße} ${style.dflex}`}>
                    <p className={style.width200}>Strasse:</p>
                    <input
                        type="text" id={style.inputtextfield}
                        onChange={(e) => setStreet(e.target.value)} />
                </div>
                <div className={`${style.inputname} ${style.dflex}`}>
                    <p className={style.width200}>Name:</p>
                    <input
                        type="text" id={style.inputtextfield}
                        onChange={(e) => setName(e.target.value)} />
                </div>
                <div className={`${style.inputtelefonnummer} ${style.dflex}`}>
                    <p className={style.width200}>Telefonnumer:</p>
                    <input
                        type="text" id={style.inputtextfield}
                        onChange={(e) => setPhone(e.target.value)} />
                </div>
            </section>

            <section className={style.artikelhinzufuegenbtn}>
                < AddArticleButton article={article} />

            </section>
            <div className={style.divrelativ}>
                <img className={style.imggrp95} src="./img/Group95.png" alt="" />
                <img className={style.imggrp96} src="./img/Group96.png" alt="" />
                <img className={style.imggrp97} src="./img/Group97.png" alt="" />
            </div>
            <Footer />
        </div>

    )
}

export default ProductPlacement