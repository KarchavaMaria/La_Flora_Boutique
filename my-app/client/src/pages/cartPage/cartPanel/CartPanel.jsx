import styles from './CartPanel.module.scss';

const CartPanel = () => {
  return (
    <div className={styles.CartPanel}>
      <div className={styles.name}>
        <p>Name</p>
      </div>
      <div className={styles.price}>
        <p>Price</p>
      </div>
      <div className={styles.qty}>
        <p>Qty</p>
      </div>
      <div className={styles.sum}>
        <p>Sum</p>
      </div>
    </div>
  );
};
export default CartPanel;
