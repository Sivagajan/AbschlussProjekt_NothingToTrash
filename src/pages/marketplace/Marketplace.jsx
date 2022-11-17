import ArticelList from "../../components/article/articleList/ArticleList"
import MarktplatzHeader from "../../components/header/marktPlatzHeader/MarktplatzHeader"
import Navbar from "../../components/navbar/Navbar"
import Sidebar from "../../components/sidebar/Sidebar"
import style from "./Marketplace.module.scss"
import { useState } from "react"
const Marketplace = () => {

    const [fix, setFix] = useState(false)
    function setFixedSidebar() {
        if (window.scrollY >= 630) {
            setFix(true)
        } else {
            setFix(false)
        }
    }

    window.addEventListener("scroll", setFixedSidebar)

    return (
        <main className={style.marketplace}>

            <div>
                <Navbar />
            </div>

            <div className={style.marginbottom}>
                <MarktplatzHeader />
            </div>
            <div className={style.dflex}>
                <div className={fix ? `${style.sidebar} ${style.fixed}` : `${style.sidebar}`}>< Sidebar /></div>
                < ArticelList />
            </div>
        </main >
    )
}

export default Marketplace