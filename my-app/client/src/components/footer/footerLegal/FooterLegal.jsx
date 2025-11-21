import styles from './FooterLegal.module.scss';
import { NavLink } from 'react-router-dom';

const FooterLegal = () => {
  return (
    <div className={styles.footerLegal}>
      <div className={styles.content}>
        <div className={styles.logo}>
          <p>© 2025, La Flora Boutique</p>
        </div>
        <div className={styles.licenses}>
          <NavLink to="/">Licenses</NavLink>
        </div>
      </div>
    </div>
  );
};
export default FooterLegal;
