import styles from './PageHeader.module.scss';

const PageHeader = ({ label, subtitle, style }) => {
  return (
    <div className={styles.pageHeader} style={style}>
      <h1 className={styles.label}>{label}</h1>
      <p className={styles.subtitle}>{subtitle}</p>
    </div>
  );
};
export default PageHeader;
