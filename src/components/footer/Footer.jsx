import style from './Footer.module.scss'
import { faRss } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faInstagramSquare, faFacebook, faTwitter } from "@fortawesome/free-brands-svg-icons"

const Footer = () => {
    return (
        <footer>
            <div className={style.footerdiv1}>
                <a href="https://twitter.com/supercodegmbh"><FontAwesomeIcon icon={faTwitter} /></a>
                <a href="https://de-de.facebook.com/supercodegmbh/"><FontAwesomeIcon icon={faFacebook} /></a>
                <a href="https://www.super-code.de/"><FontAwesomeIcon icon={faRss} /></a>
                <a href="https://www.instagram.com/supercodegmbh/?hl=de"><FontAwesomeIcon icon={faInstagramSquare} /></a>
            </div>
            <div className={style.footerdiv2}>
                <p className={style.fontSize}>COPYRIGHT nothingtotrash 2021 － </p>
                <a className={style.fontSize} href="https://www.super-code.de/impressum"><span className={style.span}>TERMS & CONDITIONS</span></a>
                <a className={style.fontSize} href="https://www.super-code.de/impressum"><span className={style.span}> PRIVACY POLICY</span></a>
            </div>
        </footer >
    )
}

export default Footer