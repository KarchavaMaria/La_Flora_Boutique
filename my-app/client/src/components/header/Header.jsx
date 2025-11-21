import HeaderDesktop from './headerDesktop/HeaderDesktop';
import HeaderTablet from './headerTablet/HeaderTablet';

const Header = () => {
  return (
    <header>
      <HeaderDesktop />
      <HeaderTablet />
    </header>
  );
};
export default Header;
