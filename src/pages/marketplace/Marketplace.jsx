import ArticelList from "../../components/article/articleList/ArticleList"
import Navbar from "../../components/navbar/Navbar"
import Sidebar from "../../components/sidebar/Sidebar"

const Marketplace = () => {

    

    return(
        <main className="marketplace">
            <div>
                <Navbar />
            </div>
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