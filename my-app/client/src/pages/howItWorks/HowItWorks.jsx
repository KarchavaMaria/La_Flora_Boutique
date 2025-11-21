import steps from './data';
import styles from './HowItWorks.module.scss';
import { useLocation, useNavigate } from 'react-router-dom';

const HowItWorks = () => {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <div className={styles.howItWorks}>
      <div className={styles.content}>
        <div className={styles.title}>
          <p>How It Works</p>
          {location.pathname === '/delivery' ? null : (
            <button
              onClick={() => navigate('/delivery')}
              className={styles.button}
              type="button"
            >
              See Delivery >
            </button>
          )}
        </div>
        <div className={styles.stepBlocks}>
          {steps.map((step, index) => (
            <div key={index} className={styles.stepBlock}>
              <div className={styles.step}>
                <img src={step.img} alt={step.title} />
              </div>
              <div className={styles.description}>
                <p className={styles.stepTitle}>{step.title}</p>
                <p>{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default HowItWorks;
