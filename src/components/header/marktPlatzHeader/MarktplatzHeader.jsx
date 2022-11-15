
import '../marktPlatzHeader/MarktplatzHeader.Modules.scss'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons"


const MarktplatzHeader = (props) => {
    return (
        <header className='marktPlatz-header'>
            <section className='marktPlatz-headerSection'>
                <h1>Hilf mit die Umwelt zu schützen</h1>
                <p>Abfälle bedrohen Vögel, Delfine und Co. Mehr als zehn Millionen Tonnen Abfälle gelangen jährlich in die Ozeane.
                    Sie kosten Abertausende Meerestiere das Leben Seevögel verwechseln Plastik mit natürlicher Nahrung,</p>
                <p className='paddingBottom'>Delfine verfangen sich in alten Fischernetzen. Hilf mit Müll zu reduzieren und trashnothing.
                </p>

                <div className='searhField'>
                    <input type="search" placeholder='Suche nach Produkt, Kategorie'/>
                    <button type="submit"> <FontAwesomeIcon icon={faMagnifyingGlass} /></button>
                </div>

            </section>
        </header>
    )
}

export default MarktplatzHeader