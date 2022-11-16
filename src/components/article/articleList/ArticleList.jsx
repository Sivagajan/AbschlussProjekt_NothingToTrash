import { useEffect, useState } from 'react';
import { v4 as uuidV4} from 'uuid';
import ArticleItem from '../articleItem/ArticleItem';
import style from './ArticleList.module.scss'
uuidV4();

const ArticelList = () => {

    const [article, setArticle] = useState([])

    useEffect(()=> {

        const fetchData = async () => {

            const response = await fetch(`http://localhost:9090/article/`)

            if(response.status === 200){
                const data = await response.json()
                console.log(data)
                setArticle(data)
            }
        }

        fetchData()
    },[])

    return(
        <section className={style.articleList}>
            {article.map(( article, key) => <ArticleItem key={key} article={article}/>)}

            <h1>hallo</h1>
        </section>
    )
}

export default ArticelList