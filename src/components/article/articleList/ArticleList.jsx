import { v4 as uuidV4} from 'uuid';
import ArticleItem from '../articleItem/ArticleItem';
import style from './ArticleList.module.scss'
uuidV4();

const ArticelList = (props) => {
    const article = props.article
    
    return(
        <section className={style.articleList}>
            {article.map(( article, key) => <ArticleItem key={key} article={article}/>)}
        </section>
    )
}

export default ArticelList