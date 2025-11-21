import { QuickOrderForm } from '../quickOrderForm/QuickOrderForm';
import styles from './OrderCall.module.scss';
import ReactDOM from 'react-dom';

const OrderCall = ({ isOpenCall, isCloseCall }) => {
  if (!isOpenCall) return null;

  return ReactDOM.createPortal(
    <div className={styles.overlay} onClick={isCloseCall}>
      <div className={styles.orderCall} onClick={(e) => e.stopPropagation()}>
        <div
          className={styles.orderCallTitle}
          onClick={(e) => e.stopPropagation()}
        >
          <h1>Order a call</h1>
          <p>We will call you back within 10 minutes</p>
          <QuickOrderForm />
        </div>
        <div className={styles.close}>
          <p onClick={isCloseCall}>X</p>
        </div>
      </div>
    </div>,

    document.getElementById('modal-root')
  );
};
export default OrderCall;
