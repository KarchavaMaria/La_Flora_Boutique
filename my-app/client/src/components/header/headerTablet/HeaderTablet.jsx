import tel from '../../../assets/icons/icon_tel.svg';
import openMenu from '../../../assets/icons/icon_open_menu.svg';
import closeMenu from '../../../assets/icons/icon_close_menu.svg';
import styles from './HeaderTablet.module.scss';
import { Fragment, useState } from 'react';
import MobileMenu from '../mobileMenu/MobileMenu';
import { Link, useNavigate } from 'react-router-dom';
import iconCart from '../../../assets/icons/icon_cart.png';
import iconUser from '../../../assets/icons/icon_user.png';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../../store/authSlice';
import iconExit from '../../../assets/icons/icon_exit.png';
import iconLike from '../../../assets/icons/icon_like.png';
import iconLikeTrue from '../../../assets/icons/icon_like_true.png';
import OrderCall from '../../../pages/orderPage/orderCall/OrderCall';

const HeaderTablet = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const user = useSelector((state) => state.auth.user);
  const totalCount = useSelector((state) => state.cart.totalCount);
  const favorites = useSelector((state) => state.favorites.favorites);

  const [onOpenMobile, setOpenMobile] = useState(false);
  const [openOrderCall, setOpenOrderCall] = useState(false);

  const exitHandler = () => {
    dispatch(logout());
    navigate('/login');
  };

  return (
    <div className={styles.headerTablet}>
      <div className={styles.logo}>
        <Link to="/">
          <p>
            La Flora <br />
            Boutique
          </p>
        </Link>
      </div>
      <div className={styles.telephone} onClick={() => setOpenOrderCall(true)}>
        <img src={tel} alt="tel:" />
        <p>+1 (213) 555-0198</p>
      </div>
      <div className={styles.navBar}>
        <div className={styles.icons}>
          <button onClick={() => navigate('/cart')} className={styles.btnCart}>
            <img src={iconCart} alt="cart" />
          </button>

          {totalCount >= 1 ? (
            <div className={styles.totalCount}>{totalCount}</div>
          ) : null}
        </div>
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

        <div className={styles.mobileMenu}>
          {!onOpenMobile ? (
            <button onClick={() => setOpenMobile(true)}>
              <img src={openMenu} alt="==" />
            </button>
          ) : (
            <button onClick={() => setOpenMobile(false)}>
              <img src={closeMenu} alt="X" />
            </button>
          )}
        </div>
        <MobileMenu
          isOpen={onOpenMobile}
          isClose={() => setOpenMobile(false)}
        />
        <OrderCall
          isOpenCall={openOrderCall}
          isCloseCall={() => setOpenOrderCall(false)}
        />
      </div>
    </div>
  );
};
export default HeaderTablet;
