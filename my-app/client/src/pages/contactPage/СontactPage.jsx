import PageHeader from '../pageHeader/PageHeader';
import Banner from '../banner/Banner';
import bannerContact from '../../assets/images/img_banner_contact.png';
import FormSection from './formSection/FormSection';
import { useNavigate } from 'react-router-dom';

const ContactPage = () => {
  const navigate = useNavigate();

  const getDirectionsHandler = () => {
    navigate('/directions');
  };

  return (
    <div>
      <PageHeader
        style={{ background: '#205529', color: 'white' }}
        label="Contact"
        subtitle="We’re here to help with your floral needs."
      />
      <FormSection />
      <Banner
        background={bannerContact}
        badge="Our Boutique"
        heading="Plan Your Visit and Find Us on the Map"
        article="Come see our fresh flowers in store."
        btnBanner="Get Directions"
        onClick={() => getDirectionsHandler()}
      />
    </div>
  );
};
export default ContactPage;
