import { Link } from 'react-router-dom';
import { notFoundData } from '../data/pages';
import usePageTitle from '../hooks/usePageTitle';
import PageHeading from '../components/PageHeading';

export default function NotFound() {
  usePageTitle('Página no encontrada');

  return (
    <>
      <div className="cs_site_header_spacing_100"></div>
      <PageHeading data={notFoundData.heading} />
      <section style={{ marginTop: '150px', marginBottom: '150px' }}>
        <div className="container">
          <div className="cs_error text-center">
            <h2 className="cs_fs_120 cs_accent_color">404</h2>
            <h2 className="cs_fs_53 cs_normal">¡Ups! No encontramos esta página</h2>
            <p>Es posible que la página se haya movido o que la dirección no sea correcta.</p>
            <Link to="/" className="cs_btn cs_style_1 cs_bold cs_heading_bg cs_white_color">
              Volver al inicio
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
