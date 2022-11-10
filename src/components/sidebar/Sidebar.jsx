import { useState } from "react"

const Sidebar = () => {

    const [countFurniture, setCountFurniture] = useState('')
    const [countBooks, setCountBooks] = useState('')
    const [countElectronics, setCountElectronics] = useState('')
    const [countClothes, setCountClothes] = useState('')



    return(
        <section>
            <article>
                <h3>Kategorien</h3>
                <div>
                    <div>
                        <p onClick={setCountFurniture((e) => e.target.innerText)}>Möbel</p>
                        <p onClick={setCountBooks((e) => e.target.innerText)}>Bücher</p>
                        <p onClick={setCountElectronics((e) => e.target.innerText)}>Elektronik</p>
                        <p onClick={setCountClothes((e) => e.target.innerText)}>Kleidung</p>
                    </div>
                    <div>
                        <p>{countFurniture}</p>
                        <p>{countBooks}</p>
                        <p>{countElectronics}</p>
                        <p>{countClothes}</p>
                    </div>
                </div>

            </article>
        </section>
    )
}