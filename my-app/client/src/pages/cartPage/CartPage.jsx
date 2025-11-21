import styles from './CartPage.module.scss';
import CartList from './cartList/CartList';
import CartResults from './cartResults/CartResults';
import PageHeader from '../pageHeader/PageHeader';
import CartPanel from './cartPanel/CartPanel';

const CartPage = () => {
  return (
    <div className={styles.cartPage}>
      <PageHeader
        style={{ background: '#205529', color: 'white' }}
        label="Cart"
        subtitle="Your local source for fresh, beautifully designed flowers."
      />
      <div className={styles.cartTitle}>
        <p>You have added to cart</p>
      </div>
      <CartPanel />
      <CartList />
      <CartResults />
    </div>
  );
};
export default CartPage;
