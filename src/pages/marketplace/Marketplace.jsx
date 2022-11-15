import ArticelList from "../../components/article/articleList/ArticleList"
import Sidebar from "../../components/sidebar/Sidebar"

const Marketplace = () => {

    

    return(
        <main className="marketplace">
            <div>
                < ArticelList />
            </div>
            <div>
                <Sidebar />
            </div>
        </main>
    )
}

export default Marketplace