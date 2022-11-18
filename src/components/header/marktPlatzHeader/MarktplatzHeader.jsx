
import style from '../marktPlatzHeader/MarktplatzHeader.module.scss'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons"
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { useState } from 'react'

const MarktplatzHeader = (props) => {

    const [article, setArticle] = useState([])

    const inputSearch = () => {

        const fetchData = async () => {

            const response = await fetch(`http://localhost:9090/article/`,{
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            }

        })

            if(response.status === 200){
                const data = await response.json()
                console.log(data)
                setArticle(data)
            }
        }

        fetchData()

    }

    return (
        <header className={style.marktPlatzHeader}>

            <section className={style.marktPlatzHeaderSection}>
                <h1 className={style.marktPlatzHeaderHeadline}>
                    Hilf mit die Umwelt zu schützen</h1>
                <p>Abfälle bedrohen Vögel, Delfine und Co. Mehr als zehn Millionen Tonnen Abfälle gelangen jährlich in die Ozeane.
                    Sie kosten Abertausende Meerestiere das Leben Seevögel verwechseln Plastik mit natürlicher Nahrung,</p>
                <p className={style.paddingBottom}>
                Delfine verfangen sich in alten Fischernetzen. Hilf mit Müll zu reduzieren und trashnothing.
                </p>
            </section>

            <section className={style.inputField}>

                <div className={style.searhField}> 
                    <input type="search" onChange={(e) => setArticle(e.target.value)} placeholder='Suche nach Produkt, Kategorie...'/>
                    <button type="submit" onClick={inputSearch}><FontAwesomeIcon icon={faMagnifyingGlass} /></button>
                    {/* input = onChange = befüllen useState / Btn = onClick => arrowFunction mit fech */}
                </div>

            </section>

            <Link to='/productplacement'>
            <motion.button className={style.submitProductBtn} 
                whileTap={{scale: 0.95}}
            > Produkt einstellen </motion.button>
            </Link>
            


        </header>
    )
}

export default MarktplatzHeader