import style from './DetailButton.module.scss'
import {motion} from 'framer-motion'
import { Link } from 'react-router-dom'

const DetailButton = (props) => {

    const articleId = props.article._id

    console.log(articleId)
    return(
        <Link to={`/productdetails/${articleId}`}>
            <motion.button   
                whileTap={{scale: 0.95}}
                className={style.detailBtn}>Details ﹥ 
            </motion.button>
        </Link>
    )
}

export default DetailButton