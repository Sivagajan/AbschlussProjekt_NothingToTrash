import './AddArticleButton.Modules.scss'
import {motion} from 'framer-motion'

const AddArticleButton = () => {
    return(
        <motion.button   whileHover={{ scale: 1.2}}
            whileTap={{ scale: 0.8}} className="addArticleBtn"> Artikel Hinzufügen 
        </motion.button>
    )
}

export default AddArticleButton