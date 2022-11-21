import ArticelList from "../../components/article/articleList/ArticleList"
import MarktplatzHeader from "../../components/header/marktPlatzHeader/MarktplatzHeader"
import Navbar from "../../components/navbar/Navbar"
import Sidebar from "../../components/sidebar/Sidebar"
import style from "./Marketplace.module.scss"
import { useState, useEffect } from "react"
import SearchBar from "../../components/searchbar/SearchBar"
import SubmitProductButton from "../../components/buttons/submitProductBtn/SubmitProductButton"

const Marketplace = () => {

    const [article, setArticle] = useState([])
    const BACKEND = process.env.REACT_APP_BACKEND_ADRESS


    const [fix, setFix] = useState(false)
    function setFixedSidebar() {
        if (window.scrollY >= 670) {
            setFix(true)
        } else {
            setFix(false)
        }
    }


    useEffect(() => {

        const fetchData = async () => {

            const response = await fetch(`${BACKEND}article`)

            if (response.status === 200) {
                const data = await response.json()
                console.log(data)
                setArticle(data)
            }
        }

        fetchData()
    }, [])

    window.addEventListener("scroll", setFixedSidebar)

    return (
        <main className={style.marketplace}>

            <div>
                <Navbar />
            </div>

            <div >
                <MarktplatzHeader />
            </div>
            <div className={style.dflex}>

                <div className={style.search_submit_container}>
                    <SearchBar setArticle={setArticle} />
                    <SubmitProductButton />
                </div>

                <div className={fix ? `${style.sidebar} ${style.fixed}` : `${style.sidebar}`}>< Sidebar /></div>
                < ArticelList article={article} />
            </div>
        </main >
    )
}

export default Marketplace