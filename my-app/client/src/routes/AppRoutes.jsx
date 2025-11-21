import { Route, Routes } from 'react-router-dom';
import RefundPolicyPage from '../pages/refundPolicyPage/RefundPolicyPage';
import NotFound from '../pages/notFoundPage/NotFoundPage';
import HomePage from '../pages/homePage/HomePage';
import AboutUsPage from '../pages/aboutUsPage/AboutUsPage';
import TermsPage from '../pages/termsPage/TermsPage';
import ContactPage from '../pages/contactPage/СontactPage';
import DeliveryPage from '../pages/deliveryPage/DeliveryPage';
import ProductItemPage from '../components/products/productItem/ProductItemPage';
import AllBouquetsPage from '../pages/allBouquetsPage/AllBouquetsPage';
import MixedBloomsPage from '../pages/mixedBloomsPage/MixedBloomsPage';
import MonoStemsPage from '../pages/monoStemsPage/MonoStemsPage';
import OnSalePage from '../pages/onSale/OnSalePage';
import CartPage from '../pages/cartPage/CartPage';
import OrderForm from '../pages/orderPage/orderForm/OrderForm';
import GetDirections from '../pages/contactPage/getDirections/GetDirections';
import RegisterPage from '../pages/registerPage/RegisterPage';
import LoginPage from '../pages/loginPage/LoginPage';
import ProfilePage from '../pages/profilePage/ProfilePage';
import FavoritesPage from '../pages/favoritesPage/FavoritesPage';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/cart" element={<CartPage />} />
      <Route path="/about" element={<AboutUsPage />} />
      <Route path="/delivery" element={<DeliveryPage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/refundPolicy" element={<RefundPolicyPage />} />
      <Route path="/terms" element={<TermsPage />} />
      <Route path="/products" element={<AllBouquetsPage />} />
      <Route path="/products/:id" element={<ProductItemPage />} />
      <Route path="/mixed" element={<MixedBloomsPage />} />
      <Route path="/mono" element={<MonoStemsPage />} />
      <Route path="/onSale" element={<OnSalePage />} />
      <Route path="/directions" element={<GetDirections />} />
      <Route path="/order" element={<OrderForm />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/profile" element={<ProfilePage />} />
      <Route path="/favorites" element={<FavoritesPage />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};
export default AppRoutes;
