import PageHeader from '../pageHeader/PageHeader';
import Banner from '../banner/Banner';
import imgBannerFlowers from '../../assets/images/img_banner_flowers.png';
import ProductsList from '../../components/products/productsList/ProductsList';
import {useNavigate} from 'react-router-dom';

const MonoStemsPage = () => {
  const navigate = useNavigate();

  const letsCreateHandler = () => {
    navigate('/mixed');
  };

  return (
    <>
      <PageHeader
        label="Mono Stems"
        subtitle="Elegant bouquets with a single flower type."
      />
      <ProductsList categoryId={2} />
      <Banner
        onClick={letsCreateHandler}
        background={imgBannerFlowers}
        badge="Custom Blooms"
        heading="Special Flowers for Your Special Moments"
        article="We craft unique flowers for your moments."
        btnBanner="Let's Create"
      />
    </>
  );
};
export default MonoStemsPage;
