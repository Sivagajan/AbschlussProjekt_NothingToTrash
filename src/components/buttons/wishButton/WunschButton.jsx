import style from './WunschButton.module.scss'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHeart } from "@fortawesome/free-regular-svg-icons"

const WunschButton = () => {
    return(
        <>
            <button className={style.wunschBtn}> <span><FontAwesomeIcon icon={faHeart}/></span>Auf Wunschliste</button>
        </>
    )
}


export default WunschButton