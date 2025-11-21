import styles from './TabPanel.module.scss';
import { useState } from 'react';
import features from './features';
import check from '../../../../assets/icons/icon_check.svg';

const TabPanel = ({ product }) => {
  const [activeTab, setActiveTab] = useState('description');

  const checksText = [
    'We deliver all across Los Angeles',
    'Daily 9AM–6PM service',
    'Same-day delivery',
    'Free delivery on $100+ orders',
  ];

  return (
    <div className={styles.tabPanel}>
      <div className={styles.tabs}>
        <button
          className={
            activeTab === 'description' ? styles.tabActive : styles.tab
          }
          onClick={() => setActiveTab('description')}
        >
          DESCRIPTION
        </button>
        <button
          className={activeTab === 'delivery' ? styles.tabActive : styles.tab}
          onClick={() => setActiveTab('delivery')}
        >
          DELIVERY
        </button>
        <button
          className={activeTab === 'payment' ? styles.tabActive : styles.tab}
          onClick={() => setActiveTab('payment')}
        >
          PAYMENT
        </button>
      </div>
      <div className={styles.tabContent}>
        {activeTab === 'description' && (
          <div className={styles.activeTab}>
            <p>{product.description}</p>
            <div className={styles.checks}>
              {features.map((feature, index) => (
                <div className={styles.check} key={index}>
                  <img src={feature.icon} alt={feature.label} />
                  <p>{feature.label}</p>
                </div>
              ))}
            </div>
          </div>
        )}
        {activeTab === 'delivery' && (
          <div className={styles.activeTab}>
            <p>
              We make sure every bouquet arrives fresh, stunning, and on time.
              Whether you're surprising someone special or treating yourself,
              our delivery service is easy, reliable, and guaranteed to impress.
            </p>
            <div className={styles.checks}>
              {checksText.map((item, index) => (
                <div key={index} className={styles.check}>
                  <img src={check} alt="check" />
                  <p>{item}</p>
                </div>
              ))}
            </div>
          </div>
        )}
        {activeTab === 'payment' && (
          <p>
            We accept Visa, MasterCard, and Mir bank cards through a secure
            payment gateway. Apple Pay and Google Pay are also available for
            your convenience.
          </p>
        )}
      </div>
    </div>
  );
};
export default TabPanel;
