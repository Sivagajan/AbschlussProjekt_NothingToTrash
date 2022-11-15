import ArticelList from "../../components/article/articleList/ArticleList"
import MarktplatzHeader from "../../components/header/marktPlatzHeader/MarktplatzHeader"
import Navbar from "../../components/navbar/Navbar"
import Sidebar from "../../components/sidebar/Sidebar"

const Marketplace = () => {

    

    return(
        <main className="marketplace">
            <div>
                <Navbar />
            </div>
            <div>
                <MarktplatzHeader/>
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