import { business, socialLinks, whatsappLink } from '../data/business';
import usePageTitle from '../hooks/usePageTitle';
import BrandLogo from '../components/BrandLogo';
import { LucideIcon } from '../components/Icons';

// Aviso de próxima apertura que ocupa toda la pantalla, sin menú ni contenido del sitio
export default function ComingSoon() {
  usePageTitle('Próxima apertura');

  return (
    <main className="bio_soon" style={{ backgroundImage: 'url(/assets/img/bio/hero-jardin.jpg)' }}>
      <div className="bio_soon_in">
        <BrandLogo tone="light" className="bio_logo_lg" />
        <p className="bio_soon_eyebrow">Próxima apertura</p>
        <h1 className="bio_soon_title">
          Muy pronto, <span>nuestro nuevo sitio</span>
        </h1>
        <p className="bio_soon_text">
          Estamos preparando un espacio para compartirte cómo cuidamos tu hogar y tu negocio con manejo de fauna nociva responsable en la{' '}
          {business.coverage}.
        </p>
        <p className="bio_soon_text">Mientras tanto, con gusto te atendemos por WhatsApp.</p>
        <div className="bio_soon_actions">
          <a className="cs_btn cs_style_1 cs_bold cs_heading_color cs_white_bg" href={whatsappLink()} target="_blank" rel="noopener noreferrer">
            Escríbenos por WhatsApp
          </a>
          <a className="bio_soon_phone" href={`tel:+52${business.whatsapp.slice(2)}`}>
            <LucideIcon name="phone" size={18} />
            {business.phone}
          </a>
        </div>
        <ul className="bio_soon_social">
          {socialLinks.map((link) => (
            <li key={link.label}>
              <a href={link.url} target="_blank" rel="noopener noreferrer">
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <p className="bio_soon_copy">
        {business.brandName} © {new Date().getFullYear()}
      </p>
    </main>
  );
}
