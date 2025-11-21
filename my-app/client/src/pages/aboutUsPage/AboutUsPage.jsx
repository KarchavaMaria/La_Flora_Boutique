import PageHeader from '../pageHeader/PageHeader';
import Banner from '../banner/Banner';
import bannerAbout from '../../assets/images/img_banner_about.png';
import AboutInfo from './aboutInfo/AboutInfo';
import Benefit from '../benefit/Benefit';
import benefitsData from './data';
import Pledge from './pledge/Pledge';
import { useNavigate } from 'react-router-dom';

const AboutUsPage = () => {
  const navigate = useNavigate();
  return (
    <>
      <PageHeader
        style={{ background: '#205529', color: 'white' }}
        label="About Us"
        subtitle="Your local source for fresh, beautifully designed flowers."
      />
      <Benefit data={benefitsData} />
      <AboutInfo />
      <Pledge />
      <Banner
        background={bannerAbout}
        badge="Special Offer"
        heading="Enjoy 20% Off Your First Bouquet!"
        article="Save big on your first fresh delivery."
        btnBanner="Order Bouquet"
        onClick={() => navigate('/onSale')}
      />
    </>
  );
};
export default AboutUsPage;
