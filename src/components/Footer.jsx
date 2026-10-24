import { Link } from 'react-router-dom';
import { footerData } from '../data/layout';
import { whatsappLink } from '../data/business';
import { ArrowUpRight } from './Icons';

// variant: '' (inicio y servicios), 'cs_color_1' (páginas internas) o 'cs_color_2' (detalle de servicio)
export default function Footer({ variant = '' }) {
  const logo = variant === 'cs_color_1' ? footerData.logoAlt : footerData.logo;

  // Sin backend: la duda se abre como mensaje de WhatsApp
  const sendToWhatsapp = (e) => {
    e.preventDefault();
    const message = e.target.elements.message.value.trim();
    window.open(whatsappLink(message || undefined), '_blank', 'noopener');
    e.target.reset();
  };

  return (
    <footer className={`cs_footer cs_style_1 ${variant}`}>
      <div className="container">
        <div className="cs_footer_row">
          <div className="cs_footer_col">
            <div className="cs_footer_widget">
              <div className="cs_text_widget">
                <img src={logo} alt="Logo" className="wow zoomIn" data-aos="zoom-in" />
                <p dangerouslySetInnerHTML={{ __html: footerData.newsletterText }} />
              </div>
            </div>
            <div className="cs_footer_widget">
              <form action="#" className="cs_newsletter cs_style_1" onSubmit={sendToWhatsapp}>
                <input type="text" name="message" placeholder={footerData.newsletterPlaceholder} className="cs_newsletter_input" />
                <button type="submit" className="cs_newsletter_btn cs_arrow_btn cs_white_bg cs_heading_color" aria-label="Enviar por WhatsApp">
                  <ArrowUpRight />
                </button>
              </form>
            </div>
          </div>
          {footerData.menus.map((menu, index) => (
            <div className="cs_footer_col" key={index}>
              <div className="cs_footer_widget">
                <h4 className="cs_footer_widget_title">{menu.title}</h4>
                <ul className="cs_footer_widget_menu cs_mp_0">
                  {menu.links.map((link, i) => (
                    <li key={i}>
                      <Link to={link.url}>{link.label}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
        <div className="cs_bottom_footer">
          <div className="cs_bottom_footer_left" data-aos="fade-right">
            <div className="cs_copyright" dangerouslySetInnerHTML={{ __html: footerData.copyright }} />
          </div>
          <div className="cs_bottom_footer_right" data-aos="fade-left">
            <ul className="cs_footer_links cs_mp_0">
              {footerData.bottomLinks.map((link, i) => (
                <li key={i}>
                  <Link to={link.url}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
