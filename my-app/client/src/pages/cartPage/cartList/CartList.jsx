import { useDispatch, useSelector } from 'react-redux';
import {
  addToCart,
  decreaseQuantity,
  removeFromCart,
} from '../../../store/cartSlice';
import garbage from '../../../assets/icons/icon_garbage.png';
import garbageOpen from '../../../assets/icons/icon_garbage_open.png';
import { useState } from 'react';
import styles from './CartList.module.scss';
import { Link } from 'react-router-dom';

const CartList = () => {
  const items = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const [isHovered, setIsHovered] = useState(null);

  if (items.length === 0) {
    return (
      <h2 style={{ textAlign: 'center', margin: '100px 0' }}>
        The basket is empty 😔
      </h2>
    );
  }

  return (
    <div className={styles.cartList}>
      {items.map((item) => (
        <div className={styles.flowerCart} key={item.id}>
          <div className={styles.imageFlower}>
            <Link to={`/products/${item.id}`}>
              <img src={item.image} alt={item.title} />
            </Link>
          </div>
          <div className={styles.name}>
            <p>{item.title}</p>
          </div>
          <div className={styles.price}>
            {item.discountPercent > 0 ? (
              <div>
                <span style={{ textDecoration: 'line-through', color: 'gray' }}>
                  ${item.price}
                </span>
                <span style={{ marginLeft: '8px', fontWeight: 'bold' }}>
                  {' '}
                  ${item.finalPrice}
                </span>
                <span style={{ marginLeft: '8px', color: 'red' }}>
                  - {item.discountPercent}%
                </span>
              </div>
            ) : (
              <span style={{ fontWeight: 100, fontSize: '20px' }}>
                ${item.price}
              </span>
            )}
          </div>
          <div className={styles.qty}>
            <div className={styles.btnQty}>
              <button
                onClick={() => dispatch(decreaseQuantity(item.id))}
                className={styles.minus}
              >
                -
              </button>
              <p>{item.quantity}</p>
              <button
                onClick={() => dispatch(addToCart(item))}
                className={styles.plus}
              >
                +
              </button>
            </div>
          </div>
          <div className={styles.sum}>
            <p>${item.finalPrice * item.quantity}</p>
          </div>
          <div
            className={styles.btnClear}
            key={item.id}
            onMouseEnter={() => setIsHovered(item.id)}
            onMouseLeave={() => setIsHovered(null)}
          >
            <button onClick={() => dispatch(removeFromCart(item.id))}>
              {isHovered === item.id ? (
                <img src={garbageOpen} alt="delete"/>
              ) : (
                <img src={garbage} alt="delete"/>
              )}
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};
export default CartList;
