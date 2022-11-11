import { useState } from "react"
import Slider from "../slider/Slider"

const Sidebar = () => {

    const [countFurniture, setCountFurniture] = useState('')
    const [countBooks, setCountBooks] = useState('')
    const [countElectronics, setCountElectronics] = useState('')
    const [countClothes, setCountClothes] = useState('')
    const [min, setMin] = useState(0)
    const [max, setMax] = useState(200)


    


    return(
        <section>
            <article>
                <h3>Kategorien</h3>
                <div className="categories">
                    <div>
                        <p>Möbel</p>
                        <p>Bücher</p>
                        <p>Elektronik</p>
                        <p>Kleidung</p>
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
                    
                    <input type="checkbox" name="brand1" id="" /> <label>Marke1</label>
                    <input type="checkbox" name="brand2" id="" /> <label>Marke2</label>
                    <input type="checkbox" name="brand3" id="" /> <label>Marke3</label>
                    <input type="checkbox" name="brand4" id="" /> <label>Marke4</label>
                    <input type="checkbox" name="brand5" id="" /> <label>Marke5</label>
                        
                </div>
            </article>
            <article>
                <h3>Bewertung</h3>
                <div className="div_ratings">
                    <input type="checkbox" name="star5" id="" /><label>XXXXX</label>
                    <input type="checkbox" name="star4" id="" /><label>XXXX</label>
                    <input type="checkbox" name="star3" id="" /><label>XXX</label>
                    <input type="checkbox" name="star2" id="" /><label>XX</label>
                    <input type="checkbox" name="star1" id="" /><label>X</label>
                </div>
            </article>
            <article>
                <h3>Preis</h3>
                <div>
                <Slider min={0} max={200} onChange={(setMin,setMax) => console.log(`min = ${min}, max = ${max}`)}/>
                </div>
                <div>
                    <input type="number" name="" id="" value={min} />
                    <p> - </p>
                    <input type="number" name="" id="" value={max}/>
                </div>
            </article>

        </section>
    )
}

export default Sidebar