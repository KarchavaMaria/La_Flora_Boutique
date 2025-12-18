import styles from './BtnFavorites.module.scss';
import iconLikeTrue from '../../../assets/icons/icon_like_true.png';
import iconLike from '../../../assets/icons/icon_like.png';
import { useDispatch, useSelector } from 'react-redux';
import { addFavorite, deleteFavorite } from '../../../store/favoriteSlice';
import axios from 'axios';
import { API_URL } from '../../../api/config';

const BtnFavorites = ({ product }) => {
  const dispatch = useDispatch();

  const user = useSelector((state) => state.auth.user);
  const token = useSelector((state) => state.auth.token);
  const favorites = useSelector((state) => state.favorites.favorites) || [];
  const isFavorite = Array.isArray(favorites) && favorites.some((f) => f.id === product.id);

  const addFavouriteHandler = async () => {
    if (user?.id) {
      await axios.post(
        `${API_URL}/api/favorites`,
        {
          user_id: user.id,
          product_id: product.id,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
    }
    dispatch(addFavorite(product));
  };

  const deleteFavouriteHandler = async () => {
    if (user?.id) {
      await axios.delete(`http://localhost:5050/api/favorites`, {
        data: {
          user_id: user.id,
          product_id: product.id,
        },
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
    }
    dispatch(deleteFavorite(product));
  };

  return (
    <div className={styles.btnFavorites}>
      {isFavorite ? (
        <button
          className={styles.btnFavorites}
          onClick={deleteFavouriteHandler}
        >
          <img style={{ width: '30px' }} src={iconLikeTrue} alt="like" />
        </button>
      ) : (
        <button className={styles.btnFavorites} onClick={addFavouriteHandler}>
          <img style={{ width: '30px' }} src={iconLike} alt="like" />
        </button>
      )}
    </div>
  );
};
export default BtnFavorites;
