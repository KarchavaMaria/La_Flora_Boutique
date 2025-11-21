import styles from './AboutLaFlora.module.scss';
import bgImage from '../../../assets/images/img_background_about_laFlora.png';
import illustration from '../../../assets/images/img_illustration_about.png';
import { useNavigate } from 'react-router-dom';

const AboutLaFlora = () => {
  const navigate = useNavigate();

  function aboutMoreHandler() {
    navigate('/about');
  }

  return (
    <div
      className={styles.aboutLaFlora}
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
      }}
    >
      <div className={styles.container}>
        <div className={styles.containerAboutLaFlora}>
          <div className={styles.flag}>About La Flora</div>
          <div className={styles.contentInfo}>
            <h2>
              Locally Crafted. <br /> Lovingly Delivered
            </h2>
            <p>
              At La Flora Boutique, we believe flowers do more than decorate –
              they connect, comfort, and celebrate life’s most meaningful
              moments. Based in the heart of Los Angeles, we create elegant,
              handcrafted bouquets designed to leave a lasting impression.
            </p>
            <p>
              Each bouquet is carefully handcrafted by local florists using the
              freshest seasonal blooms. Whether you're sending love, thanks, or
              simply brightening a space – every petal holds purpose.
            </p>
          </div>
          <button onClick={aboutMoreHandler}>Learn More</button>
        </div>
        <div className={styles.image}>
          <img src={illustration} alt="LA FLORA BOUTIQUE" />
        </div>
      </div>
    </div>
  );
};
export default AboutLaFlora;
