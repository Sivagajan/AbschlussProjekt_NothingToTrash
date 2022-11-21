import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useState } from "react"
import Slider from "../slider/Slider"
import style from './Sidebar.module.scss'
import { faStar } from "@fortawesome/free-solid-svg-icons"
import { motion } from 'framer-motion'

const Sidebar = () => {

    // eslint-disable-next-line react-hooks/exhaustive-deps
const [max, setMax] = useState('')
const [min, setMin] = useState('')

    return (
        <section className={style.sidebarWrap} id={style.sticky1}>
            <div className={style.sidebar}>

                <article className={style.categories}>
                    <h3 className={style.sideBarHeadline}>Kategorien</h3>
                    <div className={style.category}>
                        <div>
                            <p>Möbel</p>
                            <p>Bücher</p>
                            <p>Elektronik</p>
                            <p>Kleidung</p>
                        </div>
                        <div>
                        {/* <p>{countFurniture}</p>
                            <p>{countBooks}</p>
                            <p>{countElectronics}</p>
                            <p>{countClothes}</p> */}
                            <p>1</p>
                            <p>2</p>
                            <p>3</p>
                            <p>4</p>
                        </div>
                    </div>
                </article>
                <article>
                    <h3 className={style.sideBarHeadline}>Marken</h3>

                    <div className={style.brands}>

                        <input type="checkbox" name="brand1" id="" /> <label className={style.labelBrand}>Marke1</label>
                        <input type="checkbox" name="brand2" id="" /> <label className={style.labelBrand}>Marke2</label>
                        <input type="checkbox" name="brand3" id="" /> <label className={style.labelBrand}>Marke3</label>
                        <input type="checkbox" name="brand4" id="" /> <label className={style.labelBrand}>Marke4</label>
                        <input type="checkbox" name="brand5" id="" /> <label className={style.labelBrand}>Marke5</label>

                    </div>
                </article>
                <article>
                    <h3 className={style.sideBarHeadline}>Bewertung</h3>
                    
                    <div className={style.div_ratings}>
                        <input type="checkbox" name="star5" id="" />
                        <label className={style.labelStar}>
                            <FontAwesomeIcon icon={faStar} color={'gold'} />
                            <FontAwesomeIcon icon={faStar} color={'gold'} />
                            <FontAwesomeIcon icon={faStar} color={'gold'} />
                            <FontAwesomeIcon icon={faStar} color={'gold'} />
                            <FontAwesomeIcon icon={faStar} color={'gold'} />
                        </label>
                        <input type="checkbox" name="star4" id="" />
                        <label className={style.labelStar}>
                            <FontAwesomeIcon icon={faStar} color={'gold'} />
                            <FontAwesomeIcon icon={faStar} color={'gold'} />
                            <FontAwesomeIcon icon={faStar} color={'gold'} />
                            <FontAwesomeIcon icon={faStar} color={'gold'} />
                        </label>
                        <input type="checkbox" name="star3" id="" />
                        <label className={style.labelStar}>
                            <FontAwesomeIcon icon={faStar} color={'gold'} />
                            <FontAwesomeIcon icon={faStar} color={'gold'} />
                            <FontAwesomeIcon icon={faStar} color={'gold'} />
                        </label>
                        <input type="checkbox" name="star2" id="" />
                        <label className={style.labelStar}>
                            <FontAwesomeIcon icon={faStar} color={'gold'} />
                            <FontAwesomeIcon icon={faStar} color={'gold'} />
                        </label>
                        <input type="checkbox" name="star1" id="" />
                        <label className={style.labelStar}>
                            <FontAwesomeIcon icon={faStar} color={'gold'} />
                        </label>
                    </div>
                </article>

                <article className={style.articleSlider}>
                    <h3 className={style.sideBarHeadline}>Preis</h3>
                    <div className={style.slider}>
                        <Slider min={0} max={350} onChange={(setMin, setMax) => console.log(`min = ${min}, max = ${max}`)} />
                    </div>
                </article>

                <article className={style.dFlex}>
                    <motion.button className={style.anwendenBtn}
                        whileTap={{ scale: 0.95 }}
                    >Anwenden</motion.button>
                    <motion.button className={style.resetBtn}
                        whileTap={{ scale: 0.95 }}
                    >Reset</motion.button>
                </article>

            </div>

        </section>
    )
}

export default Sidebar