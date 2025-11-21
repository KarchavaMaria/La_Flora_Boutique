import PageHeader from '../pageHeader/PageHeader';
import Banner from '../banner/Banner';
import imgBannerFlowers from '../../assets/images/img_banner_flowers.png';
import SpecialOffer from '../specialOffer/SpecialOffer';
import ProductsList from '../../components/products/productsList/ProductsList';

const AllBouquetsPage = () => {
  return (
    <>
      <PageHeader
        label="All Bouquets"
        subtitle="Explore our complete collection of handcrafted bouquets."
      />
      <ProductsList start={0} limit={12} />
      <SpecialOffer />
      <ProductsList start={13} />
      <Banner
        background={imgBannerFlowers}
        badge="Custom Blooms"
        heading="Special Flowers for Your Special Moments"
        article="We craft unique flowers for your moments."
        btnBanner="Let's Create"
      />
    </>
  );
};
export default AllBouquetsPage;
