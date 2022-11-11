import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import './Footer.Modules.scss'
import { faInstagramSquare, faFacebook, faTwitter } from "@fortawesome/free-brands-svg-icons"
import { faRss } from "@fortawesome/free-solid-svg-icons"



const Footer = () => {
    return (
        <footer>
            <div className="footerdiv1">
                <a href="#"><FontAwesomeIcon icon={faTwitter} /></a>
                <a href="#"><FontAwesomeIcon icon={faFacebook} /></a>
                <a href="#"><FontAwesomeIcon icon={faRss} /></a>
                <a href="#"><FontAwesomeIcon icon={faInstagramSquare} /></a>
            </div>
            <div className="footerdiv2">
                <p>COPYRIGHT nothingtotrash 2021 -
                </p>
                <p><span>TERMS & CONDITIONS</span></p>
                <p><span> PRIVACY POLICY</span></p>
            </div>
        </footer >
    )
}

export default Footer