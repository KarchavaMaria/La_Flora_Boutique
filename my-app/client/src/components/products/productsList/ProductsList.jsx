import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useMemo } from 'react';
import {
  fetchAllProducts,
  fetchProductsByCategory,
} from '../../../store/productsSlice';
import styles from './ProductsList.module.scss';
import ProductsCard from '../ProductsCard';

const ProductsList = ({ start = 0, limit, categoryId }) => {
  const dispatch = useDispatch();

  const allState = useSelector((state) => state.products.all);
  const filteredStateByCategory = useSelector(
    (state) => state.products.filtered.itemsByCategory || {}
  );
  const filteredStatusByCategory = useSelector(
    (state) => state.products.filtered.statusByCategory || {}
  );
  const filteredErrorByCategory = useSelector(
    (state) => state.products.filtered.errorByCategory || {}
  );

  const filteredState = filteredStateByCategory[categoryId] || [];
  const filteredStatus = filteredStatusByCategory[categoryId] || 'idle';
  const filteredError = filteredErrorByCategory[categoryId] || null;

  const rawProducts = categoryId ? filteredState : allState.items;
  const products = Array.isArray(rawProducts) ? rawProducts : [];  const status = categoryId ? filteredStatus : allState.status || 'idle';
  const error = categoryId ? filteredError : allState.error || null;

  useEffect(() => {
    if (categoryId) {
      dispatch(fetchProductsByCategory(categoryId));
    } else {
      dispatch(fetchAllProducts());
    }
  }, [dispatch, categoryId]);

  const displayedProducts = useMemo(() => {
    if (!products?.length) return [];
    return limit ? products.slice(start, start + limit) : products;
  }, [products, start, limit]);

  if (status === 'loading') return <p>Loading...</p>;
  if (status === 'error') return <p>Error...</p>;
  if (status === 'failed') return <p>Error:{error}</p>;

  return (
    <section className={styles.grid}>
      {displayedProducts.map((product) => (
        <ProductsCard key={product.id} product={product} />
      ))}
    </section>
  );
};
export default ProductsList;
