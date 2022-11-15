const ArticleItem = (props) => {

    const article = props.article

    return(
        <article className="articleItem">
            <div className="articlePic">
                <img src={article.img} alt="articlePic" />
            </div>
            <div>
                <h3>{article.price}</h3>
                <h3>{article.title}</h3>
                <p>{article.descripton}</p>
                <div >
                    <div>
                        <p>Kategorie</p>
                        <p>Lieferung</p>
                        <p>Auf Lager</p>
                    </div>
                    <div>
                        <p>{article.category}</p>
                        <p>{article.brand}</p>
                        <p>{article.amount}</p>
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