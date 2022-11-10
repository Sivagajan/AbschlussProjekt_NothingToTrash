import StartButton from './buttons/StartButton'
import './Header.Modules.scss'
import DetailButton from './buttons/DetailButton'
import WunschButton from './buttons/WunschButton'

const Header = () => {
    return (
        <header>
            <img src="./img/headerpicture.png" alt="cartoon men on field" />

            <h1>Hilf mit die Umwelt zu schützen</h1>
            <p>Abfälle bedrohen Vögel, Delfine und Co. Mehr als zehn Millionen Tonnen Abfälle gelangen jährlich in die Ozeane.
                Sie kosten Abertausende Meerestiere das Leben Seevögel verwechseln Plastik mit natürlicher Nahrung,</p>
            <p>Delfine verfangen sich in alten Fischernetzen. Hilf mit Müll zu reduzieren und trashnothing.
            </p>
            <StartButton />
            <h2>Lebe eCommerce mal anders</h2>

        </header>
    )
}

export default Header