import { Outlet } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import WhatsappButton from '../components/WhatsappButton';

export default function MainLayout({ headerVariant = '', footerVariant = '' }) {
  return (
    <div>
      <Header variant={headerVariant} />
      <Outlet />
      <Footer variant={footerVariant} />
      <WhatsappButton />
    </div>
  );
}
