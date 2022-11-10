import { useEffect, useState } from 'react';
import { v4 as uuidV4} from 'uuid';
import ArticleItem from './ArticleItem';

const SERVER = process.env.BACKEND_ADRESS

uuidV4();

const ArticelList = () => {

    const [article, setArticle] = useState([])

    /* useEffect(()=> {

        const fetchData = async () => {

            const response = await fetch(`${SERVER}article`,
            {   headers: {
                    Authentication : 'Bearer ' + localStorage.getItem('token')
            }})

            if(response.status === 200){
                const data = await response.json()

                setArticle(data)
            }
        }

        fetchData()
    },[]) */

    return(
        <section className="articleList">
            {article.map(( article, uuidV4) => <ArticleItem key={uuidV4()} article={article}/>)}

            <h1>hallo</h1>
        </section>
    )
}

export default ArticelList