import "./Main.Modules.scss"

const Main = () => {
    return (
        <main>
            <section>
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
                    <h3>Verkaufen statt wegwerfen</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Risus faucibus egestas neque, quis nunc in turpis cursus eget.</p>
                </article>

                <article className="articleright">
                    <div>
                        <img src="./img/Rectangle225.png" alt="" />
                        <img className="rightrightpic" src="./img/Rectangle226.png" alt="" />
                        <img className="topleftpic" src="./img/Rectangle227.png" alt="" />
                        <img className="toprightpic" src="./img/Rectangle228.png" alt="" />


                    </div>
                    <h3>Verkaufen statt wegwerfen</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Risus faucibus egestas neque, quis nunc in turpis cursus eget. </p>
                </article>

            </section>
        </main>
    )
}

export default Main