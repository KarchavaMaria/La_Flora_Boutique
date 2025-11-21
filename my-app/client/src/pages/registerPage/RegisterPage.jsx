import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useEffect, useState } from 'react';
import styles from './RegisterPage.module.scss';
import PageHeader from '../pageHeader/PageHeader';
import { usePostRegisterMutation } from '../../store/authApi';
import { setToken, setUser } from '../../store/authSlice';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const schema = yup.object({
  name: yup.string().required('Name is required'),
  email: yup
    .string()
    .email()
    .min(10, 'Min 10 characters')
    .required('Email is required'),
  password: yup
    .string()
    .min(8, 'Min 8 characters')
    .required('Password is required'),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref('password')], 'Password does not match')
    .required('Password is required'),
});

const RegisterPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isHidden, setIsHidden] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [registerUser] = usePostRegisterMutation();

  const {
    register,
    setValue,
    formState: { errors },
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
      const res = await registerUser(values).unwrap();
      if (rememberMe) localStorage.setItem('remember', values.email);
      else localStorage.removeItem('remember');
      dispatch(setToken(res.token));
      dispatch(setUser(res.user));

      navigate('/profile');
      alert('Successfully registered!');
      reset();
    } catch (e) {
      console.log('ERROR:', e.response?.data || e.message);
      alert('Failed to register');
    }
  };

  return (
    <>
      <PageHeader
        style={{ background: '#205529', color: 'white' }}
        label="Register"
        subtitle="Registration in a couple of seconds "
      />
      <div className={styles.registration}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-group">
            <div className={styles.inputForm}>
              <input
                className={styles.inputText}
                type="text"
                placeholder="Your full name"
                autoComplete="name"
                {...register('name')}
              />
              <p className={styles.error}>{errors.name?.message}</p>
            </div>
            <div className={styles.inputForm}>
              <input
                className={styles.inputText}
                type="email"
                placeholder="Your email address"
                autoComplete="email"
                {...register('email')}
              />
              <p className={styles.error}>{errors.email?.message}</p>
            </div>
            <div className={styles.inputForm}>
              <div className={styles.inputFormPassword}>
                <input
                  className={styles.inputText}
                  type={isHidden ? 'password' : 'text'}
                  autoComplete="new-password"
                  placeholder="Your password"
                  {...register('password')}
                />
                <button onClick={() => setIsHidden(!isHidden)} type="button">
                  {isHidden ? '🙈' : '👁️'}
                </button>
              </div>
              <p className={styles.error}>{errors.password?.message}</p>
            </div>
            <div className={styles.inputForm}>
              <div className={styles.inputFormPassword}>
                <input
                  className={styles.inputText}
                  type={isHidden ? 'password' : 'text'}
                  placeholder="Your password"
                  autoComplete="new-password"
                  {...register('confirmPassword')}
                />
                <button onClick={() => setIsHidden(!isHidden)} type="button">
                  {isHidden ? '🙈' : '👁️'}
                </button>
              </div>

              <p className={styles.error}>{errors.confirmPassword?.message}</p>
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
            <div>
              <button className={styles.submit} type="submit">
                Register
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};
export default RegisterPage;
