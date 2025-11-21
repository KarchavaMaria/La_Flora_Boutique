import styles from './Pledge.module.scss';
import data from './data';

const Pledge = () => {
  return (
    <div className={styles.pledge}>
      <div className={styles.pledgeInfo}>
        <h4>Our Promise</h4>
        <div className={styles.valueBlocks}>
          {data.map((item, index) => (
            <div key={index} className={styles.valueBlock}>
              <img src={item.img} alt={item.title} />
              <p style={{ fontSize: '22px' }}>{item.title}</p>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Pledge;
