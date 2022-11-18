import StartButton from '../buttons/startButton/StartButton'
import style from './Header.module.scss'
import Navbar from '../navbar/Navbar'


const Header = (props) => {
    return (
        <header className={style.header}>
            <Navbar />
            <section className={style.headersection}>
                <img className={style.headerImg} src="./img/headerpicture.png" alt="cartoon men on field" />

                <h1 className={style.H1}>Hilf mit die Umwelt zu schützen</h1>

                <p className={style.headerPTag}>Abfälle bedrohen Vögel, Delfine und Co. Mehr als zehn Millionen Tonnen Abfälle gelangen jährlich in die Ozeane.
                Sie kosten Abertausende Meerestiere das Leben Seevögel verwechseln Plastik mit natürlicher Nahrung,</p>

                <p className={style.paddingbottom}>Delfine verfangen sich in alten Fischernetzen. Hilf mit Müll zu reduzieren und trashnothing.
                </p>

                <StartButton />

            </section>
            <h2 className={style.H2}>Lebe eCommerce mal anders </h2>

        </header>
    )
}

export default Header