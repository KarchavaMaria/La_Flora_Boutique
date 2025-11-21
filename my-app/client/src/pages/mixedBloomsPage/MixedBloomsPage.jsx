import PageHeader from '../pageHeader/PageHeader';
import Banner from '../banner/Banner';
import imgBannerFlowers from '../../assets/images/img_banner_flowers.png';
import ProductsList from '../../components/products/productsList/ProductsList';
import { useNavigate } from 'react-router-dom';

const MixedBloomsPage = () => {
  const navigate = useNavigate();

  const letsCreateHandler = () => {
    navigate('/mono');
  };

  return (
    <>
      <PageHeader
        label="Mixed Blooms"
        subtitle="Colorful mixes of fresh, seasonal flowers."
      />
      <ProductsList categoryId={1} />
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
export default MixedBloomsPage;
