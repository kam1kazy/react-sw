import styles from './ErrorMessage.module.css'; 

const ErrorMessage = () => {
   return (
      <>
         <p className={styles.text}>
            Какое-то сообщение из далекой галактики <br/>
            Что у тебя явно пошло что-то не так <br/>
            Так что ты не получишь никаких данных
         </p>
      </>
   );
}
 
export default ErrorMessage; 