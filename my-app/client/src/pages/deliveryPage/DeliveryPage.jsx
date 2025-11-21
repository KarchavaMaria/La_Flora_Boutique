import Questions from './questions/Questions';
import PageHeader from '../pageHeader/PageHeader';
import Benefit from '../benefit/Benefit';
import AboutDelivery from './aboutDelivery/AboutDelivery';
import Banner from '../banner/Banner';
import bannerDelivery from '../../assets/images/img_banner_delivery.png';
import benefitsData from './data';
import { useNavigate } from 'react-router-dom';

const DeliveryPage = () => {
  const navigate = useNavigate();

  return (
    <div className="delivery">
      <PageHeader
        style={{ background: '#205529', color: 'white' }}
        label="Delivery"
        subtitle="Find details on delivery times, areas, and fees."
      />
      <Benefit data={benefitsData} />
      <AboutDelivery />
      <Questions />
      <Banner
        background={bannerDelivery}
        badge="Perfectly Timed"
        heading="Arrange Delivery Exactly as You Want"
        article="Have flowers arrive exactly when you want."
        btnBanner="Schedule Delivery"
        onClick={() => navigate('/order-quick')}
      />
    </div>
  );
};
export default DeliveryPage;
