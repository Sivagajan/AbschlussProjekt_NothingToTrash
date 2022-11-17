import Navbar from "../../components/navbar/Navbar"
import Footer from "../../components/footer/Footer"
import style from './ProductDetails.module.scss'
import { motion } from 'framer-motion'
import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import ArticleItem from '../../components/article/articleItem/ArticleItem'
import UpdateArticleButton from "../../components/buttons/updateArticleButton/UpdateArticleButton"

const ProductDetails = () => {
    
    const [detailedArticle, setdetailedArticle] = useState([])
    const params = useParams()
    const [edit,setEdit] = useState(false)

    const [title,setTitle] = useState(detailedArticle.title)
    const [price, setPrice] = useState(detailedArticle.price)
    const [category,setCategory] = useState(detailedArticle.category)
    const [delivery,setDelivery] = useState(detailedArticle.delivery)
    const [amount, setAmount] = useState(detailedArticle.amount)
    const [description, setDescription] = useState(detailedArticle.description)
    const [file, setFile] = useState(null)
    const [base64, setBase64] = useState(detailedArticle.base64)

    const handleReaderLoaded = (event) => {

        setBase64(event.target.result)
    }

    useEffect(() => {
        if (file) {
            console.log(file.size)
            const reader = new FileReader()
            reader.onload = handleReaderLoaded
            reader.readAsDataURL(file)
            console.log(file)
        }
    }, [file])

    const article = {
        'category': category,
        'delivery': delivery,
        'title': title,
        'description': description,
        'amount': amount,
        'price': price,
        'img': base64,
    }

    console.log(category)

    const letsEdit = () => {
        setEdit(!edit)
    }


    useEffect(() => {  // daten holen

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
            }
            
        }
        fetchdata()
    },[])

    console.log(detailedArticle)


    return (

        < div className={style.backgroundblue}>
            <Navbar />
            <section className={`${style.detailssec1} ${style.dflex}`}>
                <img className={style.imgdetails} src={detailedArticle.img ? detailedArticle.img : 'Kein Bild '} alt="" />
                {edit === true ?<input
                    type="file" id="image-input"
                    accept="image/jpeg, image/png, image/jpg"
                    onChange={(e) => setFile(e.target.files[0])}/>:""}

                <article className={style.productInfo}>
                    <h2 contentEditable={edit} onInput={(e) => {setTitle(e.target.innerText)}}>{detailedArticle.title}</h2>
                    <p contentEditable={edit} onInput={(e) => {setPrice(e.target.innerText)}} className={style.price}>{`${detailedArticle.price} EUR`}</p>
                    <div className={`${style.paddingbottom1} ${style.dflex}`}>
                        <div className={style.zustandmarke}>
                            <p className={style.pTag}>Kategorie</p>
                            <p className={style.pTag}>Lieferung</p>
                            <p className={style.pTag}>Anzahl</p>
                        </div>
                        <div className={style.zustandmarke}>
                            <p contentEditable={edit} onChange={(e)=>{setCategory(e.target.innerText)}} className={style.pTag}>{detailedArticle.category ? detailedArticle.category : ' bitte vorher erfragen'}</p>
                            <p contentEditable={edit} onInput={(e) =>{setDelivery(e.target.innerText)}} className={style.pTag}>{detailedArticle.delivery ? detailedArticle.delivery : ' bitte vorher erfragen'}</p>
                            <p contentEditable={edit} onInput={(e)=>{setAmount(e.target.innerText)}} className={style.pTag}>{detailedArticle.amount ? detailedArticle.amount : '1'}</p>
                        </div>
                    </div>
                    <h3>Produktbeschreibung</h3>
                    <p contentEditable={edit} onInput={(e) => {setDescription(e.target.innerText)}} className={style.productdescription}>{detailedArticle.description ? detailedArticle.description : 'Manchmal sagt ein Bild mehr aus, als 1000 worte'}</p>
                </article>
            </section>

            <div className={style.btnbottom}>

            {edit === false ?<motion.button 
                className={style.registerBtnreverse} 
                onClick={letsEdit}
                whileTap={{ scale: 0.95 }}>Bearbeiten</motion.button>:
            <UpdateArticleButton article = {article} letsedit={letsEdit} params={params}/>
            }

            <p>abrechen</p>
                
                <motion.button 
                    className={style.registerBtn} 
                    onClick={""}
                    whileTap={{ scale: 0.95 }}>Verkauft</motion.button>
            </div>

            <div className={style.footerbottom}><Footer /></div>
        </div >
    )
}

export default ProductDetails