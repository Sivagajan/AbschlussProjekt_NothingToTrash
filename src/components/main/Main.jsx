import "./Main.Modules.scss"

const Main = () => {
    return (
        <main>
            <section className="section1main">
                <article className="articleleft">
                    <div>
                        <img src="./img/mennotebook1.png" alt="" />

                        <img className="picturez50" src="./img/mobilephone1.png" alt="" />
                    </div>
                    <h3>Verkaufen statt wegwerfen</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Risus faucibus egestas neque, quis nunc in turpis cursus eget.</p>
                </article>
                <article className="articlemiddle">
                    <div>
                        <img className="middlepicture" src="./img/chairs2middle.png" alt="" />
                    </div>
                    <h3>Verschenke und Schütze</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Risus faucibus egestas neque, quis nunc in turpis cursus eget.</p>
                </article>

                <article className="articleright">
                    <div>
                        <img src="./img/Rectangle225.png" alt="" />
                        <img className="rightrightpic" src="./img/Rectangle226.png" alt="" />
                        <img className="topleftpic" src="./img/Rectangle227.png" alt="" />
                        <img className="toprightpic" src="./img/Rectangle228.png" alt="" />


                    </div>
                    <h3>Der Umwelt zuliebe</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Risus faucibus egestas neque, quis nunc in turpis cursus eget. </p>
                </article>

            </section>

            <section className="section2main">
                <article className="section2article1">
                    <div className="section2a1d1">
                        <img className="section2a1pic1" src="./img/section2pic1.png" alt="" />
                        <img className="section2a1pic1shadow" src="./img/shadowpic1.png" alt="" />
                        <img className="section2a1pic2" src="./img/großerkreis.png" alt="" />
                        <img className="section2a1pic3" src="./img/ganzkleinerkreis.png" alt="" />
                        <img className="section2a1pic4" src="./img/hochkantpunkte.png" alt="" />
                    </div>
                    <div className="section2a1d2">
                        <h3>Ohne</h3>
                        <h3>Limits</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Risus faucibus egestas neque, quis nunc in turpis cursus eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Risus faucibus egestas neque, quis nunc in turpis cursus eget.</p>
                        <button>Zur Dokumentation</button>
                    </div>
                </article>

                <article className="section2article2">
                    <div className="section2a2d1">
                        <img className="section2a2pic1" src="./img/section2pic2.png" alt="" />
                        <img className="section2a1pic2shadow" src="./img/shadowpic2.png" alt="" />
                        <img className="section2a2pic2" src="./img/mittelgroßerkreis.png" alt="" />
                        <img className="section2a2pic3" src="./img/querpunkte.png" alt="" />
                        <img
                            className="section2a2pic4" src="./img/kleinerkreis.png" alt="" />
                    </div>
                    <div className="section2a2d2">
                        <h3>Kenne deine</h3>
                        <h3>Community</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Risus faucibus egestas neque, quis nunc in turpis cursus eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Risus faucibus egestas neque, quis nunc in turpis cursus eget.</p>
                        <button>Zur Dokumentation</button>
                    </div>
                </article>

            </section>

            <section className="section3">
                <h2>Von echten Menschen unterstützt</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Risus faucibus egestas neque, quis nunc in turpis cursus eget.</p>

                <img className="gruppenfoto" src="./img/gruppenfoto.png" alt="" />
                <div>
                    <img className="grpdecoration1" src="./img/Ellipse32.png" alt="" />
                    <img className="grpdecoration2" src="./img/Ellipse34.png" alt="" />
                    <img className="grpdecoration3" src="./img/Ellipse36.png" alt="" />
                    <img className="grpdecoration4" src="./img/Group5.png" alt="" />
                    <img className="grpdecoration5" src="./img/Group13.png" alt="" />
                </div>

            </section>
        </main>
    )
}

export default Main