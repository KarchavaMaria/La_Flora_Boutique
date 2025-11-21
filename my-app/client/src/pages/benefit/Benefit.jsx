import styles from './Benefit.module.scss';

const Benefit = ({ data }) => {
  return (
    <div className={styles.benefitBox}>
      {data.map((item, index) => (
        <div key={index} className={styles.benefit}>
          <img src={item.img} alt={item.description} />
          <p>{item.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Benefit;
