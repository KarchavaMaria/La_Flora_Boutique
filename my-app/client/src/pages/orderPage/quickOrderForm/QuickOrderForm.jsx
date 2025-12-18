import { useState } from 'react';
import styles from './QuickOrderForm.module.scss';
import iconSendBlack from '../../../assets/icons/icon_send_black.png';
import iconSendWhite from '../../../assets/icons/icon_send_white.png';
import  { API_URL } from '../../../api/config';

export const QuickOrderForm = ({ onSuccess }) => {
  const [phone, setPhone] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [isHovered, setIsHovered] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!phone.trim() || !phone.trim().length) {
      setError('Enter your phone');
      return;
    }
    setError(null);
    setLoading(true);

    try {
      const res = await fetch(`${ API_URL }/api/order/quick-order`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ phone }),
      });
      if (!res.ok) throw new Error('Failed to save quick order');
      setLoading(false);
      setPhone('');
      if (onSuccess) onSuccess();
      alert('Successfully added quick order');
    } catch (err) {
      console.log(err);
      setError(err);
      setLoading(false);
    }
  };
  return (
    <form className={styles.formTel} onSubmit={handleSubmit}>
      <input
        className={styles.inputTel}
        pattern="^\+?[0-9]{10, 15}$"
        onChange={(e) => setPhone(e.target.value)}
        value={phone}
        type="text"
        placeholder="Phone"
      />
      {error && <p>{error.message || error}</p>}
      <div
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <button className={styles.btnTel} type="submit">
          {loading ? ('Loading...') : isHovered ? (
            <img src={iconSendBlack} alt="Quick Order" />
          ) : (
            <img src={iconSendWhite} alt="Quick Order" />
          )}
        </button>
      </div>
    </form>
  );
};
