import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchProductById } from '../../../store/productsSlice';
import styles from './ProductItemPage.module.scss';
import TabPanel from './tabPanel/TabPanel';
import { addToCart } from '../../../store/cartSlice';
import BtnFavorites from '../../../pages/favoritesPage/btnFavorites/BtnFavorites';

const ProductItemPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const product = useSelector((state) => state.products.selected.item);
  const status = useSelector((state) => state.products.selected.status);
  const error = useSelector((state) => state.products.selected.error);

  useEffect(() => {
    dispatch(fetchProductById(id));
  }, [dispatch, id]);

  if (status === 'loading') return <p>Loading...</p>;
  if (status === 'error') return <p>Error: {error}</p>;
  if (status === 'failed') return <p>Error...</p>;
  if (!product) return <p>Product not found or loading...</p>;

  return (
    <div className={styles.productItemPage}>
      <div className={styles.containerLeft}>
        <img
          src={`http://localhost:5050${product.image}`}
          alt={product.title}
        />
      </div>
      <div className={styles.containerRight}>
        <p className={styles.id}>#100{product.id}</p>
        <div className={styles.productTitle}>
          <h2>{product.title}</h2>
        </div>
        <div className={styles.order}>
          <p>${product.price}</p>

          <BtnFavorites product={product} />
          <button
            onClick={() => dispatch(addToCart(product))}
            className={styles.btnOrder}
          >
            Order Now
          </button>
        </div>
        <TabPanel product={product} />
      </div>
    </div>
  );
};

export default ProductItemPage;
