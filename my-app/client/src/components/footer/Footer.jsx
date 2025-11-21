import styles from './Footer.module.scss';
import { Link, NavLink } from 'react-router-dom';
import tel from '../../assets/icons/icon_tel.svg';
import address from '../../assets/icons/icon_address.svg';
import daily from '../../assets/icons/icon_daily.svg';
import FooterLegal from './footerLegal/FooterLegal';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.logoContainer}>
          <div className={styles.logo}>
            <Link to="/">
              <p>
                La Flora <br />
                Boutique
              </p>
            </Link>
            <span>
              We create handcrafted flower bouquets with same-day delivery
              across Los Angeles. Fresh, elegant, and made with care.
            </span>
          </div>
          <div className={styles.contacts}>
            <div className={styles.contact}>
              <img src={tel} alt="tel:" />
              <p>+1 (213) 555-0198</p>
            </div>
            <div className={styles.contact}>
              <img src={address} alt="address:" />
              <p>143 Grand Ave, LA, CA</p>
            </div>
            <div className={styles.contact}>
              <img src={daily} alt="daily:" />
              <p>Daily: 9AM–6PM</p>
            </div>
          </div>
        </div>
        <div className={styles.categories}>
          <span>CATEGORIES:</span>
          <NavLink to="/products">All Bouquets</NavLink>
          <NavLink to="/mixed">Mixed Blooms</NavLink>
          <NavLink to="/mono">Mono Stems</NavLink>
          <NavLink to="/onSale">On Sale</NavLink>
        </div>
        <div className={styles.company}>
          <span>COMPANY:</span>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/delivery">Delivery</NavLink>
          <NavLink to="/about">About Us</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </div>
        <div className={styles.followUs}>
          <span>FOLLOW US:</span>
          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Instagram
          </a>
          <a
            href="https://x.com/?lang=ru"
            target="_blank"
            rel="noopener noreferrer"
          >
            X (Twitter)
          </a>
          <a
            href="https://ru.pinterest.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Pinterest
          </a>
        </div>
        <div className={styles.legal}>
          <span>LEGAL:</span>
          <NavLink to="/refundPolicy">Refund Policy</NavLink>
          <NavLink to="/terms">Terms & Conditions</NavLink>
        </div>
      </div>
      <FooterLegal />
    </footer>
  );
};
export default Footer;
