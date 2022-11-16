import style from './Footer.module.scss'
import { faRss } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faInstagramSquare, faFacebook, faTwitter } from "@fortawesome/free-brands-svg-icons"



const Footer = () => {
    return (
        <footer>
            <div className={style.footerdiv1}>
                <a href="#"><FontAwesomeIcon icon={faTwitter} /></a>
                <a href="#"><FontAwesomeIcon icon={faFacebook} /></a>
                <a href="#"><FontAwesomeIcon icon={faRss} /></a>
                <a href="#"><FontAwesomeIcon icon={faInstagramSquare} /></a>
            </div>
            <div className={style.footerdiv2}>
                <p className={style.fontSize}>COPYRIGHT nothingtotrash 2021 － </p>
                <a className={style.fontSize} href="#"><span>TERMS & CONDITIONS</span></a>
                <a className={style.fontSize} href="#"><span> PRIVACY POLICY</span></a>
            
            </div>
        </footer >
    )
}

export default Footer