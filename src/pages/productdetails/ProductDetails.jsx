import Navbar from "../../components/navbar/Navbar"
import Footer from "../../components/footer/Footer"
import style from './ProductDetails.module.scss'
import { motion } from 'framer-motion'
import { useEffect, useState, useRef } from "react"
import { useParams } from "react-router-dom"
import UpdateArticleButton from "../../components/buttons/updateArticleButton/UpdateArticleButton"
import WunschButton from "../../components/buttons/wishButton/WunschButton"


const ProductDetails = () => {
    
    const [detailedArticle, setdetailedArticle] = useState([])
    const [cache, setCache] = useState([])
    const [userID, setUserID] =useState('')
    const [edit,setEdit] = useState(false)
    const [newfile, setFile] = useState(null)
    const [newbase64, setNewBase64] = useState('')
    const params = useParams()

    const img = detailedArticle.img

    const handleReaderLoaded = (event) => {

        setNewBase64(event.target.result) 

        setdetailedArticle(prev => { return { ...prev, img: newbase64}})

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

        // eslint-disable-next-line react-hooks/exhaustive-deps
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
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])
    
    const abort = () => {
        letsEdit()
        setdetailedArticle(cache)
    }

//--------------------------------------------------anfang versuchsfeld
    const titleRef = useRef()
    const priceRef = useRef()
    const categoryRef = useRef()
    const deliveryRef = useRef()
    const amountRef = useRef()
    const descriptionRef = useRef()


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

                    <h2 contentEditable={edit} 
                            ref={titleRef}>{detailedArticle.title}
                    </h2>

                    <p contentEditable={edit} 
                            ref={priceRef} 
                            className={style.price}>
                                {edit === true ? detailedArticle.price:
                                `${detailedArticle.price} EUR`}
                    </p>

                    <div className={`${style.paddingbottom1} ${style.dflex}`}>
                        
                        <div className={style.zustandmarke}>
                            <p className={style.pTag}>Kategorie</p>
                            <p className={style.pTag}>Lieferung</p>
                            <p className={style.pTag}>Anzahl</p>
                        </div>
                        
                        <div className={style.zustandmarke}>

                            <p  contentEditable={edit} 
                                    ref={categoryRef}
                                    className={style.pTag}> {detailedArticle.category ? detailedArticle.category : ' bitte vorher erfragen'} </p>

                            <p contentEditable={edit}  
                                    ref={deliveryRef}
                                    className={style.pTag}>{detailedArticle.delivery ? detailedArticle.delivery : ' bitte vorher erfragen'}</p>

                            <p contentEditable={edit}  
                                    ref={amountRef}
                                    className={style.pTag}>{detailedArticle.amount ? detailedArticle.amount : '1'}</p>
                        </div>
                    </div>

                    <WunschButton />

                    <h3>Produktbeschreibung</h3>

                    <p contentEditable={edit}  
                            ref={descriptionRef}
                            className={style.productdescription}>{detailedArticle.description ? detailedArticle.description : 'Keine beschreibung'}
                    </p>
                </article>
            </section>

            {userID === detailedArticle.user ? <div className={style.btnbottom}>

                {edit === false ?<motion.button 
                    className={style.registerBtnreverse} 
                    onClick={letsEdit}
                    whileTap={{ scale: 0.95 }}>Bearbeiten</motion.button>
                    : <UpdateArticleButton 
                        article={{
                            params,
                            userID,
                            titleRef,
                            img,
                            priceRef,
                            categoryRef,
                            deliveryRef,
                            descriptionRef,
                            amountRef
                        }}/>
                }
                
                {edit === true ? <motion.button 
                        className={style.registerBtn} 
                        onClick={abort}
                        whileTap={{ scale: 0.95 }}>Abbrechen</motion.button>
                :""}
                    
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