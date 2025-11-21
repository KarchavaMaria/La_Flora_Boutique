import styles from './CartResults.module.scss';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { QuickOrderForm } from '../../orderPage/quickOrderForm/QuickOrderForm';

const CartResults = () => {
  const totalPrice = useSelector((state) => state.cart.totalPrice);
  const totalCount = useSelector((state) => state.cart.totalCount);

  return (
    <div className={styles.cartResult}>
      <div className={styles.blocksResult}>
        <div className={styles.total}>
          <p>{totalCount} goods worth:</p>

          <p>${totalPrice}</p>
        </div>
        <div className={styles.total}>
          <p style={{ fontWeight: '800', color: '#205529' }}>Total:</p>
          <p style={{ fontWeight: '800', color: '#205529' }}>${totalPrice}</p>
        </div>

        <div className={styles.btnOrder}>
          <Link to="/order">
            <button>Place an order</button>
          </Link>
        </div>
        <div className={styles.btnQuickOrder}>
          <p>Quick order</p>
          <QuickOrderForm
            onSuccess={() => alert('We will call you back soon!')}
          />
        </div>
      </div>
    </div>
  );
};

export default CartResults;
