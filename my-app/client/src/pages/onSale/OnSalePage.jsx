import PageHeader from '../pageHeader/PageHeader';
import Banner from '../banner/Banner';
import imgBannerFlowers from '../../assets/images/img_banner_flowers.png';
import ProductsList from '../../components/products/productsList/ProductsList';
import { useNavigate } from 'react-router-dom';

const OnSalePage = () => {
  const navigate = useNavigate();

  const letsCreateHandler = () => {
    navigate('/mixed');
  };
  return (
    <>
      <PageHeader
        label="On Sale"
        subtitle="Beautiful bouquets at special prices."
      />
      <ProductsList categoryId={6} />
      <Banner
        background={imgBannerFlowers}
        badge="Custom Blooms"
        heading="Special Flowers for Your Special Moments"
        article="We craft unique flowers for your moments."
        btnBanner="Let's Create"
        onClick={letsCreateHandler}
      />
    </>
  );
};
export default OnSalePage;
