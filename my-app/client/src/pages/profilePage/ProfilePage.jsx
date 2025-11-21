import PageHeader from '../pageHeader/PageHeader';
import ProfileInfo from './profileInfo/ProfileInfo';
import ProfileFavorites from './profileFavorites/ProfileFavorites';
import ProfileOrders from './profileOrders/ProfileOrders';

const ProfilePage = () => {
  return (
    <>
      <PageHeader
        style={{ background: '#205529', color: 'white' }}
        label="Profile"
        subtitle="Profile user info"
      />
      <ProfileInfo />
      <ProfileFavorites />
      <ProfileOrders />
    </>
  );
};

export default ProfilePage;
