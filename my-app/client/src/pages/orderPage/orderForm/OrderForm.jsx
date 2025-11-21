import styles from './OrderForm.module.scss';
import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import CartList from '../../cartPage/cartList/CartList';
import { clearCart } from '../../../store/cartSlice';

const schema = yup.object().shape({
  name: yup.string().required('Name is required'),
  phone: yup
    .string()
    .matches(/^(?:\+?380|0)\d{9}$/, 'Incorrect phone format')
    .required('Phone is required'),
  family: yup.string(),
  email: yup.string().email().required('Email is required'),
  address: yup.string(),
  city: yup.string().required('City is required'),
  phoneRecipient: yup
    .string()
    .matches(/^(?:\+?380|0)\d{9}$/, 'Incorrect phone format')
    .required('Phone recipient is required'),
  node: yup.string(),
});

const OrderForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const totalCount = useSelector((state) => state.cart.totalCount);
  const totalPrice = useSelector((state) => state.cart.totalPrice);
  const products = useSelector((state) => state.cart.items);
  const user = useSelector((state) => state.auth.user);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: {
      agree: false,
      name: '',
      email: '',
      phone: '',
      city: 'Kyiv',
      family: '',
    },
    resolver: yupResolver(schema),
  });

  useEffect(() => {
    if (user) {
      reset({
        name: user?.name || '',
        email: user?.email || '',
        phone: user?.phone || '',
        city: user?.city || 'Kyiv',
        family: user?.family || '',
      });
    }
  }, [user, reset]);

  const onSubmit = async (values) => {
    const payload = {
      ...values,
      products,
      totalPrice,
      userId: user?.id,
    };
    console.log(payload);

    try {
      const res = await axios.post('http://localhost:5050/api/order', payload);

      if (res.status !== 200) throw new Error('Failed to save send message');
      reset();
      dispatch(clearCart());
      alert('Order sent!');
    } catch (e) {
      console.log(e);
      console.log('ERROR:', e.response?.data || e.message);
      alert('Error sending order');
    }
  };

  return (
    <div className={styles.orderForm}>
      <div className={styles.order}>
        <div className={styles.dataUser}>
          <div className={styles.titleOrder}>
            <div className={styles.number}>1</div>
            <span>Your data</span>
          </div>
          <div>
            {!user && (
              <>
                <p>
                  Log in to the website and we will save all your order
                  information and automatically fill in your contact
                  information.
                </p>
                <div className={styles.btnIsAuth}>
                  <button
                    onClick={() => navigate('/login')}
                    className={styles.logIn}
                  >
                    Log In
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
        <div className={styles.form}>
          <form id="orderForm" onSubmit={handleSubmit(onSubmit)}>
            <div>
              <input type="tel" {...register('phone')} placeholder="Phone" />
              {errors.phone && <p>{errors.phone.message}</p>}
            </div>
            <div>
              <input type="name" {...register('name')} placeholder="Name" />
              {errors.name && <p>{errors.name.message}</p>}
            </div>
            <div>
              <input type="text" {...register('family')} placeholder="Family" />
              {errors.family && <p>{errors.family.message}</p>}
            </div>
            <div>
              <input type="email" {...register('email')} placeholder="Email" />
              {errors.email && <p>{errors.email.message}</p>}
            </div>
            <div>
              <select style={{ width: '95%' }} {...register('city')}>
                <option value="Kyiv">Kyiv</option>
                <option value="Kharkiv">Kharkiv</option>
                <option value="Lviv">Lviv</option>
                <option value="Poltava">Poltava</option>
                <option value="Odesa">Odesa</option>
              </select>
              {errors.city && <p>{errors.city.message}</p>}
            </div>
            <hr />
            <div className={styles.dataUser}>
              <div className={styles.titleOrder}>
                <div className={styles.number}>2</div>
                <span>Delivery</span>
              </div>
              <div className={styles.checkRecipient}>
                <input
                  className={styles.check}
                  type="checkbox"
                  {...register('agree')}
                />
                <p className={styles.checkAddress}>
                  Check the address with the recipient{' '}
                </p>
              </div>

              <div className={styles.recipient}>
                <input
                  type="tel"
                  {...register('phoneRecipient')}
                  placeholder="Phone recipient"
                />
              </div>
              <div className={styles.adressRecipient}>
                <input
                  type="text"
                  {...register('address')}
                  placeholder="Address"
                />
              </div>
            </div>
            <hr />
            <div className={styles.record}>
              <div className={styles.titleOrder}>
                <div className={styles.number}>3</div>
                <span>Record/gift</span>
              </div>
              <div className={styles.node}>
                <textarea
                  {...register('node')}
                  placeholder="Your greeting:"
                  rows="10"
                  cols="60"
                ></textarea>
              </div>
            </div>
            <hr />
            <div className={styles.fullOrder}>
              <div className={styles.titleOrder}>
                <div className={styles.number}>4</div>
                <span>Order</span>
              </div>
              <CartList />
            </div>
            <hr />
            <div className={styles.orderResults}>
              <div className={styles.total}>
                <p>{totalCount} goods worth:</p>
                <p>${totalPrice}</p>
              </div>
              <div className={styles.total}>
                <p style={{ fontWeight: '800', color: '#205529' }}>Total:</p>
                <p style={{ fontWeight: '800', color: '#205529' }}>
                  ${totalPrice}
                </p>
              </div>
              <button className={styles.orderSubmit} type="submit">
                Place an order
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default OrderForm;
