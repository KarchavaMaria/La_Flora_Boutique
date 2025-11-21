import { Link } from 'react-router-dom';
import styles from './ProductsCard.module.scss';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../store/cartSlice';
import BtnFavorites from '../../pages/favoritesPage/btnFavorites/BtnFavorites';

const ProductsCard = ({ product }) => {
  const dispatch = useDispatch();

  const addToCartHandler = () => {
    dispatch(addToCart(product));
  };

  return (
    <section className={styles.allFlowers}>
      <div className={styles.flower}>
        <Link to={`/products/${product.id}`}>
          <img src={`http://localhost:5050${product.image}`} alt={product.title} />
        </Link>
        <div className={styles.flowerInfo}>
          <Link to={`/products/${product.id}`}>{product.title}</Link>
        </div>
        <div className={styles.addToCart}>
          {product.discountPercent > 0 ? (
            <div>
              <span style={{ textDecoration: 'line-through', color: 'gray' }}>
                ${product.price}
              </span>
              <span style={{ marginLeft: '8px', fontWeight: 'bold' }}>
                {' '}
                ${product.finalPrice}
              </span>
              <span style={{ marginLeft: '8px', color: 'red' }}>
                - {product.discountPercent}%
              </span>
            </div>
          ) : (
            <span>${product.price}</span>
          )}

          <BtnFavorites product={product} />
          <button onClick={addToCartHandler} className={styles.btnAddToCart}>
            +
          </button>
        </div>
      </div>
    </section>
  );
};
export default ProductsCard;
