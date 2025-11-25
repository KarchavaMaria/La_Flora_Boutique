import styles from './ProfileFavorites.module.scss';
import ProductsCard from '../../../components/products/ProductsCard';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import axios from 'axios';
import { setFavorite } from '../../../store/favoriteSlice';
import {API_URL} from "../../../../api/config";


const ProfileFavorites = () => {
  const dispatch = useDispatch();

  const favorites = useSelector((state) => state.favorites.favorites);
  const user = useSelector((state) => state.auth.user);

  useEffect(() => {
    if (!user?.id) return;
    axios
      .get(`${ API_URL }/favorites/${user.id}`)
      .then((res) => {
        console.log('ORDERS FROM SERVER:', res.data);
        dispatch(setFavorite(res.data));
      })
      .catch((err) => console.log(err));
  }, [user?.id, dispatch]);

  return (
    <div className={styles.profileFavorites}>
      <h3>Favorites</h3>
      {favorites.length === 0 && (
        <div className={styles.notFavorites}>
          <p>You don't have any favorite flowers 💐</p>
        </div>
      )}

      <div className={styles.favorites}>
        {favorites.map((fav) => (
          <div key={fav.id}>
            <ProductsCard key={fav.id} product={fav} />
          </div>
        ))}
      </div>
    </div>
  );
};
export default ProfileFavorites;
