import styles from './ProfileOrders.module.scss';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const ProfileOrders = () => {
  const user = useSelector((state) => state.auth.user);
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    if (!user?.id) return;

    axios
      .get(`http://localhost:5050/api/order/user/${user.id}`)
      .then((res) => {
        console.log('ORDERS FROM SERVER:', res.data);
        setOrders(res.data);
      })
      .catch((err) => console.log(err));
  }, [user?.id]);

  return (
    <div className={styles.profileOrders}>
      <h3>History Orders</h3>
      {orders.length === 0 && (
        <div className={styles.notOrders}>
          <p>You don't have any orders</p>
        </div>
      )}
      {orders.map((order) => (
        <div key={order.id} className={styles.orderItem}>
          <p>
            <strong>Order ID:</strong> #{order.id}
          </p>
          <div className={styles.orderProducts}>
            {JSON.parse(order.products).map((o) => (
              <div className={styles.flower}>
                <Link to={`/products/${o.id}`}>
                  <img src={`http://localhost:5050${o.image}`} alt={o.title}/>
                </Link>
                <div className={styles.flowerInfo}>
                  <Link to={`/products/${o.id}`}>{o.title}</Link>
                </div>
              </div>
            ))}
          </div>
          <p>
            <strong>Date: </strong>
            {order.createdAt.slice(0, 10)}
          </p>
          <p>
            <strong>Total price:</strong> ${order.totalPrice}
          </p>
        </div>
      ))}
    </div>
  );
};
export default ProfileOrders;
