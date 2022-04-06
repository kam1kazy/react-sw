import { useLocation } from "react-router-dom";
import img from "./img/notfound.png";
import styles from './NotFoundPage.module.css'; 

const NotFoundPage = () => {

   const location = useLocation();

   return (
      <>
         <div>
            <h1 className='header__text'>Not Found</h1>
            <img className={styles.img} src={img} alt="Not Found" />
            <p className={styles.text}>No match for <u>{location.pathname}</u></p>
         </div>
      </>
   );
}

export default NotFoundPage; 