const ArticleItem = (props) => {


    return(
        <article className="articleItem">
            <div className="articlePic">
                <img src={props.pic} alt="articlePic" />
            </div>
            <div>
                <h3>{props.price}</h3>
                <h3>{props.title}</h3>
                <p>{props.descripton}</p>
                <div >
                    <div>
                        <p>Zustand</p>
                        <p>Marke</p>
                        <p>Lieferung</p>
                        <p>Auf Lager</p>
                    </div>
                    <div>
                        <p>{props.condition}</p>
                        <p>{props.brand}</p>
                        <p>{props.onStock}</p>
                    </div>
                </div>
            </div>
            <div>
                <button>Details</button>{/* Button Details */}
                <button>Auf die Wunschliste</button>{/* Button Auf die Wunschliste*/}
            </div>
        </article>
    )
}

export default ArticleItem