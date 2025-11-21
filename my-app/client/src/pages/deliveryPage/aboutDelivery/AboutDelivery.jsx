import flowersDeliveries from '../../../assets/images/img_flowers_deliveries.png';
import check from '../../../assets/icons/icon_check.svg';
import styles from './AboutDelivery.module.scss';

const AboutDelivery = () => {
  const checksText = [
    'We deliver all across Los Angeles',
    'Daily 9AM–6PM service',
    'Same-day delivery',
    'Free delivery on $100+ orders',
  ];

  return (
    <div className={styles.aboutDelivery}>
      <div className={styles.aboutDeliveryContent}>
        <h4>
          Fast, Fresh, and <br />
          Reliable Delivery
        </h4>
        <p>
          We make sure every bouquet arrives fresh, stunning, and on time.
          Whether you're surprising someone special or treating yourself, our
          delivery service is easy, reliable, and guaranteed to impress.
        </p>
        <div className={styles.checks}>
          {checksText.map((item, index) => (
            <div key={index} className={styles.check}>
              <img src={check} alt="check" />
              <p>{item}</p>
            </div>
          ))}
        </div>
        <div className={styles.signature}>
          <p>* Delivery times may vary slightly by location.</p>
        </div>
      </div>

      <div className={styles.imageDelivery}>
        <img src={flowersDeliveries} alt="Flowers" />
      </div>
    </div>
  );
};
export default AboutDelivery;
