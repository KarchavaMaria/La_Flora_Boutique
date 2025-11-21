import styles from './Customers.module.scss';
import customers from './data';

const Customers = () => {
  return (
    <div className={styles.customers}>
      <div className={styles.customersTitle}>
        <p>What Customers Say</p>
        <button>View All > </button>
      </div>
      <div className={styles.customersBlocks}>
        {customers.map((customer, index) => (
          <div key={index} className={styles.customerBlock}>
            <div className={styles.customerBlockTitle}>
              <span className={styles.bouquet}>
                Bouquet: {customer.bouquet}
              </span>
              <div className={styles.review}>
                <p>{customer.review}</p>
              </div>
              <div className={styles.name}>
                <span>{customer.name}</span>
                <span>★{customer.start}</span>
              </div>
            </div>
            <div className={styles.image}>
              <img src={customer.img} alt={customer.name} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Customers;
