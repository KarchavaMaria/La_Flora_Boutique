import illustrationAbout from '../../../assets/images/img_illustration_about.png';
import styles from './AboutInfo.module.scss';
import { useNavigate } from 'react-router-dom';

const AboutInfo = () => {
  const navigate = useNavigate();

  const contactUsHandler = () => {
    navigate('/contact');
  };

  const browseBouquetsHandler = () => {
    navigate('/products');
  };

  return (
    <div className={styles.aboutInfo}>
      <div className={styles.info}>
        <h4>Who We Are</h4>
        <div className={styles.descriptionAboutInfo}>
          <p>
            We’re a team of passionate florists dedicated to bringing beauty and
            joy to every moment. With years of experience and a deep love for
            fresh, seasonal flowers, we handcraft each bouquet to make it truly
            special and memorable for every occasion.
          </p>
          <p>
            Based in Los Angeles, we’re committed to thoughtful design, premium
            blooms, and warm, personal service. Whether you're celebrating,
            surprising someone special, or sharing a smile, we’re here to help
            you express it beautifully with flowers.
          </p>
        </div>
        <div className={styles.btnsBlock}>
          <button onClick={browseBouquetsHandler} className={styles.btnGreen}>
            Browse Bouquets
          </button>
          <button onClick={contactUsHandler} className={styles.btnClear}>
            Contact Us >
          </button>
        </div>
      </div>
      <div className={styles.imageAbout}>
        <img src={illustrationAbout} alt="Illustration About" />
      </div>
    </div>
  );
};
export default AboutInfo;
