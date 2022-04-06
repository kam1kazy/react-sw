import PropType from 'prop-types';
import { useParams } from 'react-router';
import styles from './PersonPage.module.css';

const PersonPage = () => {

	console.log(useParams());
 
    const {id} = useParams();

    return (
        <>
            <h1 className={styles.title}>Person Page - {id} </h1>
        </>
    )
}

PersonPage.prototype = {
    // 
}

export default PersonPage;