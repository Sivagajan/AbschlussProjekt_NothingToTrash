import Navbar from "../../components/navbar/Navbar"
import Footer from "../../components/footer/Footer"
import style from './ProductDetails.module.scss'
import { motion } from 'framer-motion'
import { useEffect, useState, useRef, useLayoutEffect } from "react"
import { useParams } from "react-router-dom"
import UpdateArticleButton from "../../components/buttons/updateArticleButton/UpdateArticleButton"
import WunschButton from "../../components/buttons/wishButton/WunschButton"
import { counter } from "@fortawesome/fontawesome-svg-core"


const ProductDetails = () => {
    
    const [detailedArticle, setdetailedArticle] = useState([])
    const [cache, setCache] = useState([])
    const [userID, setUserID] =useState('')
    const [edit,setEdit] = useState(false)
    const [newfile, setFile] = useState(null)
    const [newbase64, setNewBase64] = useState('')
    const params = useParams()

    const [title,setTitle] = useState('')

    const handleReaderLoaded = (event) => {

        setNewBase64(event.target.result) 

        setdetailedArticle(prev => { return { ...prev, img: event.target.result}})
    }

    const checkToken = async () => {
        const response = await fetch('http://localhost:9090/api/verify', {
            headers: {
                Authentication: 'Bearer ' + localStorage.getItem('token')
            }
        })
        const data = await response.json()
        console.log('addArticle', data.result.user)

        setUserID(data.result.user)

        console.log(userID)

    }
    checkToken()

    useEffect(() => {
        if (newfile) {
            console.log(newfile.size)
            const reader = new FileReader()
            reader.onload = handleReaderLoaded
            reader.readAsDataURL(newfile)
            console.log(newfile)
        }
    }, [newfile])

    const letsEdit = () => {
        setEdit(!edit)
    }

    const newPic = (e) => {
        setFile(e)
    }

    useEffect(() => {  // daten holen


        console.log('im fetch')
        const fetchdata = async () => {
            
            const result = await fetch('http://localhost:9090/article/article', {
                method : 'POST',
                headers:{
                    'content-type' : 'application/json',
                    Authentication : 'Bearer ' + localStorage.getItem('token')
                },
                body: JSON.stringify(params)
            })
            
            if(result.status === 200){
                
                const data = await result.json()
                setdetailedArticle(data)
                setCache(data)

                console.log('cache', cache)
            }
            
        }
        fetchdata()
    },[])
    
    const abort = () => {
        letsEdit()
        setdetailedArticle(cache)
    }

    console.log(title)

    const newTitle = (e) => {
        setTitle(e)
        setdetailedArticle(prev => { return{ ...prev, title: title}})
    }
//--------------------------------------------------anfang versuchsfeld
    const count = useRef(0)

    useEffect(() => {
        counter.current = count.current +1

    })
//--------------------------------------------------ende Versuchsfeld
    console.log(detailedArticle.title)

    return (

        < div className={style.backgroundblue}>  {/* Userabfrage mit token */}
            <Navbar />
            <section className={`${style.detailssec1} ${style.dflex}`}>
                <img className={style.imgdetails} src={detailedArticle.img ? detailedArticle.img : 'Kein Bild '} alt="" />
                {edit === true ?<input
                    type="file" id="image-input"
                    accept="image/jpeg, image/png, image/jpg"
                    onChange={(e) => newPic(e.target.files[0])}/>:""}

                <article className={style.productInfo}>
                    <h2 contentEditable={edit} onInput={(e) => {newTitle(e.target.innerText)}}>{detailedArticle.title}</h2>
                    <p contentEditable={edit} onInput={(e) => {setdetailedArticle(prev => { return{ ...prev, price: e.target.innerText}})}} className={style.price}>{`${detailedArticle.price} EUR`}</p>
                    <div className={`${style.paddingbottom1} ${style.dflex}`}>
                        <div className={style.zustandmarke}>
                            <p className={style.pTag}>Kategorie</p>
                            <p className={style.pTag}>Lieferung</p>
                            <p className={style.pTag}>Anzahl</p>
                        </div>
                        <div className={style.zustandmarke}>

{/* ------------------------------------------- */}

                            <p  contentEditable={edit} 
                                onInput={(e)=>{setdetailedArticle( prev => { 
                                    return {...prev, category: e.target.innerText}})}} 
                                className={style.pTag}> {detailedArticle.category ? detailedArticle.category : ' bitte vorher erfragen'} </p>


{/* ------------------------------------------- */}
                            <p contentEditable={edit} onInput={(e) =>{setdetailedArticle(prev => { return{ ...prev,delivery: e.target.innerText}})}} className={style.pTag}>{detailedArticle.delivery ? detailedArticle.delivery : ' bitte vorher erfragen'}</p>
                            <p contentEditable={edit} onInput={(e)=>{setdetailedArticle(prev => { return{ ...prev, amount:e.target.innerText}})}} className={style.pTag}>{detailedArticle.amount ? detailedArticle.amount : '1'}</p>
                        </div>
                    </div>
                    <WunschButton />
                    <h3>Produktbeschreibung</h3>
                    <p contentEditable={edit} onInput={(e) => {setdetailedArticle(prev => { return{ ...prev, description: e.target.innerText}})}} className={style.productdescription}>{detailedArticle.description ? detailedArticle.description : 'kein Bild'}</p>
                </article>

                <p contentEditable={edit}>hallo</p>
            </section>

            {userID === detailedArticle.user ? <div className={style.btnbottom}>

            {edit === false ?<motion.button 
                className={style.registerBtnreverse} 
                onClick={letsEdit}
                whileTap={{ scale: 0.95 }}>Bearbeiten</motion.button>
                : <UpdateArticleButton article = {detailedArticle} params={params}/>
            }
            
            {edit === true ? <motion.button 
                    className={style.registerBtn} 
                    onClick={abort}
                    whileTap={{ scale: 0.95 }}>Abbrechen</motion.button>:""}
                
                <motion.button 
                    className={style.registerBtn} 
                    onClick={""}
                    whileTap={{ scale: 0.95 }}>Verkauft</motion.button>
            </div>:""}

            <div className={style.footerbottom}><Footer /></div>
        </div >
    )
}

export default ProductDetails