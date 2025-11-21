import imgOne from '../../assets/images/img_illustration_flower_three.png';
import imgTwo from '../../assets/images/img_illustration_flower_four.png';
import imgThree from '../../assets/images/img_illustration_flower_five.png';
import styles from './SpecialOffer.module.scss';
import { useNavigate } from 'react-router-dom';

const SpecialOffer = () => {
  const navigate = useNavigate();

  const onSaleHandler = () => {
    navigate('/onSale');
  };

  return (
    <div className={styles.specialOffer}>
      <div className={styles.specialOfferText}>
        <div className={styles.flag}>Special Offer</div>
        <div className={styles.specialOfferHeader}>
          <h2>
            Enjoy 20% Off Your <br />
            First Bouquet!
          </h2>
        </div>
        <button onClick={onSaleHandler}>Order Bouquet</button>
      </div>
      <div className={styles.illustrationFlowers}>
        <img src={imgOne} alt="Flower" />
        <img src={imgTwo} alt="Flower" />
        <img src={imgThree} alt="Flower" />
      </div>
    </div>
  );
};
export default SpecialOffer;
