import PropTypes from 'prop-types'
import { useEffect, useState } from 'react'
import cn from 'classnames'

import loaderBlack from './img/loader-black.svg'
import loaderWhite from './img/loader-white.svg'
import loaderBlue from './img/loader-blue.svg'

import styles from './UILoading.module.css'

const UILoading = ({
        theme='white',
        isShadow=true,
        classes 
    }) => {
    const [loaderIcon, setLoaderIcon] = useState()

    useEffect(()=> {
        switch (theme) {
            case 'black': setLoaderIcon(loaderBlack); break;
            case 'white': setLoaderIcon(loaderWhite); break;
            case 'blue': setLoaderIcon(loaderBlue); break;
            default: setLoaderIcon(loaderWhite);
        }
    })

    return (
        <img 
            className={cn(styles.lodaer, isShadow && styles.shadow, classes)}
            src={loaderIcon}
            alt="Loader"
        />
    )
}

UILoading.propTypes = {
    theme: PropTypes.string,
    isShadow: PropTypes.bool,
    classes: PropTypes.string
}

export default UILoading;