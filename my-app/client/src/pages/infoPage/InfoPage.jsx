import styles from './InfoPage.module.scss';

const InfoPage = ({ title, children, style }) => {
  return (
    <div className={styles.section}>
      <div className={styles.title}>
        <h3>{title}</h3>
      </div>
      <div className={styles.content}>
        <p style={style}>{children}</p>
      </div>
    </div>
  );
};
export default InfoPage;
