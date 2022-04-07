import PropType from 'prop-types';
import { useParams } from 'react-router';
import styles from './PersonPage.module.css';

const PersonPage = ( {id} ) => {

    return (
        <>
            <h1 className={styles.title}>Person Page -  {useParams().id} </h1>
        </>
    )
}

PersonPage.prototype = {
    // 
}

export default PersonPage;