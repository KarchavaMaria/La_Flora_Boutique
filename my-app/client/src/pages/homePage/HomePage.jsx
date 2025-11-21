import styles from './HomePage.module.scss';
import flowerOne from '../../assets/images/img_illustration_flower_one.png';
import flowerTwo from '../../assets/images/img_illustration_flower_two.png';
import { useNavigate } from 'react-router-dom';
import SpecialOffer from '../specialOffer/SpecialOffer';
import Customers from './customers/Customers';
import AboutLaFlora from './aboutLaFlora/AboutLaFlora';
import ProductsList from '../../components/products/productsList/ProductsList';

const HomePage = () => {
  const navigate = useNavigate();

  function allBouquetsHandler() {
    navigate('/products');
  }

  function onSaleHandler() {
    navigate('/onSale');
  }

  return (
    <div className={styles.home}>
      <section className={styles.homeBackground}>
        <div className={styles.imgFlowerLeft}>
          <img src={flowerOne} alt="Flower" />
        </div>
        <div className={styles.content}>
          <div className={styles.flag}>3-Hour Delivery</div>
          <h1>
            Elegant Bouquets, <br /> Locally Crafted in LA
          </h1>
          <button
            className={styles.homeBtnBrowse}
            onClick={() => navigate('/products')}
          >
            Browse Bouquets
          </button>
        </div>
        <div className={styles.imgFlowerRight}>
          <img src={flowerTwo} alt="Flower" />
        </div>
      </section>
      <section>
        <div className={styles.flowerBlock}>
          <p>New Arrivals</p>
          <button onClick={allBouquetsHandler}>All Bouquets > </button>
        </div>
        <div>
          <ProductsList categoryId={4} />
        </div>
      </section>
      <section>
        <div className={styles.flowerBlock}>
          <p>Client’s Choice</p>
          <button onClick={allBouquetsHandler}>All Bouquets > </button>
        </div>
        <div>
          <ProductsList categoryId={5} />
        </div>
      </section>
      <SpecialOffer />
      <section>
        <div className={styles.flowerBlock}>
          <p>On Sale</p>
          <button onClick={onSaleHandler}>On Sale ></button>
        </div>
        <div>
          <ProductsList categoryId={6} />
        </div>
      </section>
      <Customers />
      <AboutLaFlora />
    </div>
  );
};
export default HomePage;
