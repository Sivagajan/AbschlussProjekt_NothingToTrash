import DokumentationsButton from "../buttons/dokumentationsButton/DokumentationsButton"
import style from "./Main.module.scss"

const Main = () => {
    return (
        <main>
            <section className={style.section1main}>
                <article className={style.articleleft}>
                    <div className={style.mainImgContainer}>
                        <img className={style.mainImg} src="./img/mennotebook1.png" alt="" />

                        <img className={style.picturez50} src="./img/mobilephone1.png" alt="" />
                    </div>

                    <h3 className={`${style.mainH3} ${style.styleH3}`}>Verkaufen statt wegwerfen</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Risus faucibus egestas neque, quis nunc in turpis cursus eget.</p>
                </article>

                <article className={style.articlemiddle}>
                    <div className={style.mainImgContainer}>
                        <img className={style.middlepicture} src="./img/chairs2middle.png" alt="" />
                    </div>
                    <h3 className={`${style.mainH3} ${style.styleH3}`}>Verschenke und Schütze</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Risus faucibus egestas neque, quis nunc in turpis cursus eget.</p>
                </article>

                <article className={style.articleright}>
                    <div className={style.mainImgContainer}>
                        <img className={style.imgStyle} src="./img/Rectangle225.png" alt="" />
                        <img className={`${style.rightrightpic} ${style.imgStyle}`} src="./img/Rectangle226.png" alt="" />
                        <img className={`${style.topleftpic} ${style.imgStyle}`} src="./img/Rectangle227.png" alt="" />
                        <img className={`${style.toprightpic} ${style.imgStyle}`} src="./img/Rectangle228.png" alt="" />

                    </div>

                    <h3 className={`${style.mainH3} ${style.styleH3}`}>Der Umwelt zuliebe</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Risus faucibus egestas neque, quis nunc in turpis cursus eget. </p>

                </article>

            </section>

            <section className={style.section2main}>
                <article className={style.section2article1}>
                    <div className={style.section2a1d1}>
                        <img className={style.section2a1pic1} src="./img/section2pic1.png" alt="" />
                        <img className={style.section2a1pic1shadow} src="./img/shadowpic1.png" alt="" />
                        <img className={style.section2a1pic2} src="./img/großerkreis.png" alt="" />
                        <img className={style.section2a1pic3} src="./img/ganzkleinerkreis.png" alt="" />
                        <img className={style.section2a1pic4} src="./img/hochkantpunkte.png" alt="" />
                    </div>
                    <div className={style.section2a1d2}>
                        <h3 className={style.mainH3}>Ohne</h3>
                        <h3 className={style.mainH3}>Limits</h3>
                        <p className={style.pTag}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Risus faucibus egestas neque, quis nunc in turpis cursus eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Risus faucibus egestas neque, quis nunc in turpis cursus eget.</p>
                        <DokumentationsButton />
                    </div>
                </article>

                <article className={style.section2article2}>
                    <div className={style.section2a2d1}>
                        <img className={`${style.section2a2pic1} ${style.image}`} src="./img/section2pic2.png" alt="" />
                        <img className={style.section2a1pic2shadow} src="./img/shadowpic2.png" alt="" />
                        <img className={style.section2a2pic2} src="./img/mittelgroßerkreis.png" alt="" />
                        <img className={style.section2a2pic3} src="./img/querpunkte.png" alt="" />
                        <img
                            className={style.section2a2pic4} src="./img/kleinerkreis.png" alt="" />
                    </div>
                    <div className={style.section2a2d2}>
                        <h3 className={style.mainH3}>Kenne deine</h3>
                        <h3 className={style.mainH3}>Community</h3>
                        <p className={style.pTag}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Risus faucibus egestas neque, quis nunc in turpis cursus eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Risus faucibus egestas neque, quis nunc in turpis cursus eget.</p>
                        <DokumentationsButton />
                    </div>
                </article>

            </section>

            <section className={style.section3}>
                <h2 className={style.mainH2}>Von echten Menschen unterstützt</h2>
                <p className={style.section3PTag}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Risus faucibus egestas neque, quis nunc in turpis cursus eget.</p>

                <img className={style.gruppenfoto} src="./img/UnsereGruppe.png" alt="" />
                <div className={style.mainImgContainer}>
                    <img className={`${style.grpdecoration1} ${style.imgStyle}`} src="./img/Ellipse32.png" alt="" />
                    <img className={`${style.grpdecoration2} ${style.imgStyle}`} src="./img/Ellipse34.png" alt="" />
                    <img className={`${style.grpdecoration3} ${style.imgStyle}`} src="./img/Ellipse36.png" alt="" />
                    <img className={`${style.grpdecoration4} ${style.imgStyle}`} src="./img/Group5.png" alt="" />
                    <img className={`${style.grpdecoration5} ${style.imgStyle}`} src="./img/Group13.png" alt="" />
                </div>

            </section>
        </main>
    )
}

export default Main