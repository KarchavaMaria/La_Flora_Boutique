import styles from './Banner.module.scss';

const Banner = ({
  background,
  badge,
  heading,
  article,
  btnBanner,
  onClick,
}) => {
  return (
    <div
      className={styles.banner}
      style={{
        backgroundImage: `url(${background})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className={styles.bannerContent}>
        <div className={styles.badge}>{badge}</div>
        <div className={styles.heading}>{heading}</div>
        <div className={styles.article}>{article}</div>
        <button onClick={onClick} className={styles.btnBanner}>
          {btnBanner}
        </button>
      </div>
    </div>
  );
};
export default Banner;
