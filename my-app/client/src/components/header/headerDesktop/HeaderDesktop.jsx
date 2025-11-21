import styles from './HeaderDesktop.module.scss';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import iconCart from '../../../assets/icons/icon_cart.png';
import iconUser from '../../../assets/icons/icon_user.png';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../../store/authSlice';
import iconExit from '../../../assets/icons/icon_exit.png';
import iconLike from '../../../assets/icons/icon_like.png';
import iconLikeTrue from '../../../assets/icons/icon_like_true.png';

const HeaderDesktop = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const favorites = useSelector((state) => state.favorites.favorites);

  const totalCount = useSelector((state) => state.cart.totalCount);
  const user = useSelector((state) => state.auth.user);

  const exitHandler = () => {
    dispatch(logout());
    navigate('/login');
  };

  return (
    <div className={styles.headerDesktop}>
      <div className={styles.logo}>
        <Link to="/">
          <p>
            La Flora <br />
            Boutique
          </p>
        </Link>
      </div>
      <div className={styles.navBarIcons}>
        <div className={styles.icons}>
          <button onClick={() => navigate('/cart')} className={styles.btnCart}>
            <img src={iconCart} alt="cart" />
          </button>

          {totalCount > 0 && (
            <div className={styles.totalCount}>{totalCount}</div>
          )}

          <div className={styles.icons}>
            {favorites.length > 0 ? (
              <button
                onClick={() => navigate('/favorites')}
                className={styles.btnFavorites}
              >
                <img style={{ width: '30px' }} src={iconLikeTrue} alt="like" />
              </button>
            ) : (
              <button
                onClick={() => navigate('/favorites')}
                className={styles.btnFavorites}
              >
                <img style={{ width: '30px' }} src={iconLike} alt="like" />
              </button>
            )}
          </div>
        </div>
        <div className={styles.icons}>
          {user ? (
            <>
              <button
                onClick={() => navigate('/profile')}
                className={styles.btnCart}
              >
                <img src={iconUser} alt="user" />
              </button>
              <button onClick={exitHandler} className={styles.btnExit}>
                <img src={iconExit} alt="exit" />
              </button>
            </>
          ) : (
            <button
              onClick={() => navigate('/login')}
              className={styles.btnCart}
            >
              <img src={iconUser} alt="user" />
            </button>
          )}
        </div>
      </div>

      <div className={styles.categories}>
        <span>CATEGORIES:</span>
        <NavLink to="/products">All Bouquets</NavLink>
        <NavLink to="/mixed">Mixed Blooms</NavLink>
        <NavLink to="/mono">Mono Stems</NavLink>
        <NavLink to="/onSale">On Sale</NavLink>
      </div>
      <div className={styles.contactInfo}>
        <div className={styles.info}>
          <span>CONTACT INFO:</span>
          <p>+1 (213) 555-0198</p>
          <p>143 Grand Ave, LA, CA</p>
        </div>
      </div>
      <div className={styles.navBar}>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/delivery">Delivery</NavLink>
        <NavLink to="/about">About Us</NavLink>
        <NavLink to="/contact">Contact</NavLink>

        <div className={styles.terms}>
          <NavLink to="/refundPolicy">Refund Policy</NavLink>
          <NavLink to="/terms">Terms & Conditions</NavLink>
        </div>
      </div>
    </div>
  );
};
export default HeaderDesktop;
