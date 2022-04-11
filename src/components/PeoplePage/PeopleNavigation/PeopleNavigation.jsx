import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styles from './PeopleNavigation.module.css'; 
import UIButton from '@UI/UIButton';

const PeopleNavigation = ({ getResource, prevPage, nextPage, counterPage }) => {

   const handleChangeNext = () => getResource(nextPage);
   const handleChangePrev = () => getResource(prevPage);

   return (
      <>
         <div className={styles.container}>
            <Link to={`?page=${counterPage-1}`} className={styles.buttons}>
               <UIButton 
                  text="Preious" 
                  onClick={handleChangePrev} 
                  disabled={!prevPage}
               />
            </Link>
            <Link to={`?page=${counterPage+1}`} className={styles.buttons}>
               <UIButton 
                  text="Next" 
                  onClick={handleChangeNext} 
                  disabled={!nextPage}
               />
            </Link>
         </div>
      </>
   );
}

PeopleNavigation.propTypes = {
   getResource: PropTypes.func,
   prevPage: PropTypes.string,
   nextPage: PropTypes.string,
   counterPage: PropTypes.number
}

export default PeopleNavigation; 