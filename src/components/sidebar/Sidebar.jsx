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
                <div className="categories">
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
            <article>
                <h3>Marken</h3>
                <div className="brands">
                        <select name="brands" id="">
                            <option value="brand1">Marke1</option>
                            <option value="brand2">Marke2</option>
                            <option value="brand3">Marke3</option>
                            <option value="brand4">Marke4</option>
                            <option value="brand5">Marke5</option>
                        </select>
                </div>
            </article>
            <article>
                <h3>Bewertung</h3>
                <div className="div_ratings">
                    <select name="ratings" id="">
                        <option value="star5">XXXXX</option>
                        <option value="star4">XXXX</option>
                        <option value="star3">XXX</option>
                        <option value="star2">XX</option>
                        <option value="star1">X</option>
                    </select>
                </div>
            </article>
            <article>
                <h3>Preis</h3>
                <div>
                    
                </div>
            </article>
        </section>
    )
}

export default Sidebar