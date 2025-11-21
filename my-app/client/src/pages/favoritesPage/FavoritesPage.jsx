import styles from './FavoritesPage.module.scss';
import { useSelector } from 'react-redux';
import ProductsCard from '../../components/products/ProductsCard';
import PageHeader from '../pageHeader/PageHeader';

const FavoritesPage = () => {
  const favorites = useSelector((state) => state.favorites.favorites);

  return (
    <>
      <PageHeader
        label="Favorites"
        subtitle="Our shop offers the most elegant bouquets, including customers’ favorites."
      />

      <div className={styles.favoritesPage}>
        <div className={styles.favoritesFlowers}>
          {favorites.length === 0 ? (
            <div className={styles.notFavorites}>
              <p>You don't have any favorite flowers 💐</p>
            </div>
          ) : (
            <div className={styles.favoriteFlowersBlock}>
              {favorites.map((fav) => (
                <ProductsCard key={fav.id} product={fav} />
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
};
export default FavoritesPage;
