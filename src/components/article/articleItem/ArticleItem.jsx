import WunschButton from '../../buttons/wishButton/WunschButton'
import DetailButton from '../../buttons/detailButton/DetailButton'
import style from './ArticleItem.module.scss'

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
        <article className={style.articleItem}>
            <div className={style.articlePic}>
                <img className={style.displayImg} src={article.img} alt="displayImg" />
            </div>
            <div className={style.articlDescription}>
                <h4>{!article.category ? 'Kein Preis':`${article.price} EUR`}</h4>
                <h3>{!article.title ? 'Kein Titel':article.title}</h3>
                <h5>{!article.description ? 'Keine Beschreibung' : article.description}</h5>

                <div className={style.articleDetails}>
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
            <div className={style.buttons}>
                <DetailButton article={article} />
                <WunschButton/>
            </div>
        </article>
    )
}

export default ArticleItem