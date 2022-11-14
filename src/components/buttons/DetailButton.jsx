import './DetailButton.Modules.scss'
import {motion} from 'framer-motion'

const DetailButton = () => {
    return(
        <motion.button   whileHover={{ scale: 1.2}}
            whileTap={{ scale: 0.8}} className="detailBtn">Details ﹥ </motion.button>
    )
}

export default DetailButton