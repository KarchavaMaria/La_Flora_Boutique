import styles from './FormSection.module.scss';
import contactData from './data';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { schema } from './schema';
import axios from 'axios';
import { API_URL } from '../../../api/config';


const FormSection = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data) => {
    try {
      const res = await axios.post(`${ API_URL } /message`, data);

      if (!res.status !== 200) throw new Error('Failed to save send message');

      alert('Successfully send message');
      reset();
    } catch (err) {
      console.error(err);
      alert('Failed to send message. Check back later.');
    }
  };

  return (
    <div className={styles.formSection}>
      <div className={styles.contactBlocks}>
        {contactData.map((item, index) => (
          <div key={index} className={styles.contactBlock}>
            <img src={item.img} alt={item.title} />
            <div>
              <p style={{ fontSize: '22px' }}>{item.title}</p>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
      <div className={styles.formBlock}>
        <div className={styles.formContact}>
          <h4>Get in Touch</h4>

          <form onSubmit={handleSubmit(onSubmit)}>
            <div className={styles.name}>
              <input
                type="text"
                placeholder="Your full name"
                {...register('name', { required: true })}
              />
              <p>{errors.name?.message}</p>
            </div>
            <div className={styles.formInput}>
              <div className={styles.email}>
                <input
                  type="email"
                  placeholder="Your email address"
                  {...register('email', { required: true })}
                />
                <p>{errors.email?.message}</p>
              </div>
              <div className={styles.phone}>
                <input
                  type="phone"
                  placeholder="Your phone number"
                  {...register('phone', { required: true })}
                />
                <p>{errors.phone?.message}</p>
              </div>
            </div>
            <div className={styles.message}>
              <textarea
                rows={5}
                placeholder="Type your message"
                {...register('message', { required: true })}
              />
              <p>{errors.message?.message}</p>
            </div>
            <button type="submit">Send Message</button>
          </form>
        </div>
      </div>
    </div>
  );
};
export default FormSection;
