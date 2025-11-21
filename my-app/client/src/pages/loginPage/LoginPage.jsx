import styles from './LoginPage.module.scss';
import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import PageHeader from '../pageHeader/PageHeader';
import { usePostLoginMutation } from '../../store/authApi';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setUser, setToken } from '../../store/authSlice';
import { useEffect, useState } from 'react';

const schema = yup.object().shape({
  email: yup
    .string()
    .email()
    .min(10, 'Min 10 characters')
    .required('Email is required'),
  password: yup
    .string()
    .required('Password is required')
    .min(8, 'Min 8 characters'),
});

const LoginPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [loginUser] = usePostLoginMutation();
  const [rememberMe, setRememberMe] = useState(false);
  const [isHidden, setIsHidden] = useState(true);

  const {
    register,
    formState: { errors },
    setValue,
    reset,
    handleSubmit,
  } = useForm({
    resolver: yupResolver(schema),
  });

  useEffect(() => {
    const rememberEmail = localStorage.getItem('remember');
    if (rememberEmail) {
      setValue('email', rememberEmail);
      setRememberMe(true);
    }
  }, [setValue]);

  const onSubmit = async (values) => {
    try {
      const res = await loginUser(values).unwrap();
      if (rememberMe) localStorage.setItem('remember', values.email);
      else localStorage.removeItem('remember');
      dispatch(setToken(res.token));
      dispatch(setUser(res.user));
      navigate('/profile');
      alert('Successfully login!');
      reset();
    } catch (errors) {
      console.log(errors);
      alert('Failed to login');
    }
  };

  return (
    <>
      <PageHeader
        style={{ background: '#205529', color: 'white' }}
        label="Authorization"
        subtitle="Authorization in a couple of seconds"
      />
      <div className={styles.loginPage}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className={styles.inputForm}>
            <input
              className={styles.inputText}
              type="email"
              {...register('email')}
              placeholder="Email"
            />
            <p className={styles.error}>{errors.email?.message}</p>
          </div>
          <div className={styles.inputForm}>
            <div className={styles.inputFormPassword}>
              <input
                className={styles.inputText}
                type={isHidden ? 'password' : 'text'}
                {...register('password')}
                placeholder="Password"
              />
              <button onClick={() => setIsHidden(!isHidden)} type="button">
                {isHidden ? '🙈' : '👁️'}
              </button>
              <p className={styles.error}>{errors.password?.message}</p>
            </div>
          </div>
          <div className={styles.remember}>
            <input
              type="checkbox"
              className={styles.rememberMe}
              checked={rememberMe}
              onChange={(e) => setRememberMe(e.target.checked)}
            />
            <p>Remember me</p>
          </div>
          <div className={styles.btnBlocks}>
            <button className={styles.btnLog} type="submit">
              Login
            </button>
            <button
              className={styles.btnRegist}
              type="button"
              onClick={() => navigate('/register')}
            >
              Register
            </button>
          </div>
        </form>
      </div>
    </>
  );
};
export default LoginPage;
