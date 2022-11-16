import style from './DetailButton.module.scss'
import {motion} from 'framer-motion'

const DetailButton = () => {
    return(
        <motion.button   
        whileTap={{scale: 0.95}}
        className={style.detailBtn}>Details ﹥ 
    </motion.button>
    )
}

export default DetailButton