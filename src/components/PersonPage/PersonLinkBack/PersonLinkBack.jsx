import PropTypes from 'prop-types'
import { useNavigate } from 'react-router-dom';
import iconBack from './img/back.png'
import styles from './PersonLinkBack.module.css'

const PersonLinkBack = () => {

    const navigate = useNavigate();

    return (
        <a href='#' onClick={() => navigate(-1)} className={styles.link}>
            <img src={iconBack} alt="Go Back" className={styles.link__img} />
            <span>Go Back</span>
        </a>
    )
}

PersonLinkBack.propTypes = {
    // text: PropTypes.string
}

export default PersonLinkBack;