import styles from './NotFoundPage.module.scss';
import { useNavigate } from 'react-router-dom';

const NotFoundPage = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.notFound}>
      <div className={styles.container}>
        <div className={styles.flag}>404</div>
        <h1>Not Found</h1>
        <p>Page not found. Let’s get you back on track.</p>
        <button onClick={() => navigate('/')}>Back to Home</button>
      </div>
    </div>
  );
};
export default NotFoundPage;
