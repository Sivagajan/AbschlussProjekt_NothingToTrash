import './ArticleItem.Modules.scss'

const ArticleItem = (props) => {

    const article = props.article
    console.log(article)

    let delivery = article.delivery

    if(delivery){
        if(delivery === false){
            delivery = 'Nein'
        }else{
            delivery = 'Ja'
        }
    }else{
        delivery = 'bitte erfragen'
    }

    return(
        <article className="articleItem">
            <div className="articlePic">
                <img className='displayImg' src={article.img} alt="displayImg" />
            </div>
            <div className='articlDescription'>
                <h4>{!article.category ? 'Kein Preis':`${article.price} EUR`}</h4>
                <h3>{!article.title ? 'Kein Titel':article.title}</h3>
                <h5>{!article.description ? 'Keine Beschreibung' : article.description}</h5>

                <div className='articleDetails'>
                    <div>
                        <p>Kategorie</p>
                        <p>Lieferung</p>
                        <p>Auf Lager</p>
                    </div>
                    <div>
                        <p>{!article.category ? 'Keine Kategorie':article.category}</p>
                        <p>{delivery}</p>
                        <p>{!article.amount ? 'Keine Anzahl':article.category}</p>
                    </div>
                </div>
            </div>
            <div className='buttons'>
                <button>Details</button>{/* Button Details */}
                <button>Auf die Wunschliste</button>{/* Button Auf die Wunschliste*/}
            </div>
        </article>
    )
}

export default ArticleItem