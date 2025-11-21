import styles from './GetDirections.module.scss';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const GetDirections = () => {
  const [isClosed, setIsClosed] = useState(true);
  const navigate = useNavigate();

  return (
    <div className={styles.getDirections}>
      {isClosed ? (
        <div className={styles.getDirection}>
          <button
            onClick={() => setIsClosed(!setIsClosed)}
            className={styles.btnCloseMap}
          >
            X
          </button>

          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d5235.497843182737!2d36.239947205685546!3d50.01108606899357!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1suk!2sua!4v1761842891989!5m2!1suk!2sua"
            style={{ border: '0', width: '100%', height: '100vh' }}
            allowFullScreen=""
            loading="lazy"
            title="Map to Flower Shop"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      ) : (
        navigate('/contact')
      )}
    </div>
  );
};
export default GetDirections;
