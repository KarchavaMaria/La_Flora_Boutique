import styles from './MobileMenu.module.scss';
import { NavLink } from 'react-router-dom';

const MobileMenu = ({ isOpen, isClose }) => {
  if (!isOpen) return null;

  return (
    <div className={styles.mobileMenu}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <div className={styles.categories}>
          <div className={styles.titleCategories}>
            <span>CATEGORIES:</span>
          </div>

          <div className={styles.allCategories}>
            <NavLink to="/products" onClick={isClose}>
              All Bouquets
            </NavLink>
            <NavLink to="/mixed" onClick={isClose}>
              Mixed Blooms
            </NavLink>
            <NavLink to="/mono">Mono Stems</NavLink>
            <NavLink to="/onSale">On Sale</NavLink>
          </div>
        </div>
        <div className={styles.contactInfo}>
          <div className={styles.titleInfo}>
            <span>CONTACT INFO:</span>
          </div>

          <div className={styles.info}>
            <p>+1 (213) 555-0198</p>
            <p>143 Grand Ave, LA, CA</p>
          </div>
        </div>
        <div className={styles.navBar}>
          <div className={styles.navLink}>
            <NavLink to="/" onClick={isClose}>
              Home
            </NavLink>
            <NavLink to="/delivery" onClick={isClose}>
              Delivery
            </NavLink>
            <NavLink to="/about" onClick={isClose}>
              About Us
            </NavLink>
            <NavLink to="/contact" onClick={isClose}>
              Contact
            </NavLink>
          </div>
          <div className={styles.terms}>
            <NavLink to="/refundPolicy" onClick={isClose}>
              Refund Policy
            </NavLink>
            <NavLink to="/terms" onClick={isClose}>
              Terms & Conditions
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};
export default MobileMenu;
