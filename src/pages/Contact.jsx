import { sentenceCase } from '../utils/text';
import { business, whatsappLink } from '../data/business';
import { contactData } from '../data/pages';
import { services } from '../data/services';
import usePageTitle from '../hooks/usePageTitle';
import PageHeading from '../components/PageHeading';
import DreamCard from '../components/DreamCard';
import ZonesSection from '../components/sections/ZonesSection';

export default function Contact() {
  usePageTitle('Contacto');

  // Sin backend: el formulario arma el mensaje y lo abre en WhatsApp
  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, place, service, message } = e.target.elements;
    const lines = [
      'Hola Biosfera, quiero cotizar un servicio.',
      name.value && `Nombre: ${name.value}`,
      place.value && `Colonia / municipio: ${place.value}`,
      service.value && `Servicio: ${service.value}`,
      message.value && `Detalles: ${message.value}`,
    ].filter(Boolean);
    window.open(whatsappLink(lines.join('\n')), '_blank', 'noopener');
  };

  return (
    <>
      <PageHeading data={contactData.heading} />
      <section>
        <div className="cs_height_100 cs_height_lg_70"></div>
        <div className="container">
          <div className="row cs_gap_y_40">
            <div className="col-lg-5">
              <div className="cs_map">
                <iframe id="map" title={`Mapa de ${business.baseZone}`} src={business.mapSrc} loading="lazy"></iframe>
              </div>
            </div>
            <div className="col-lg-7">
              <div className="cs_pl_40">
                <div className="cs_section_heading cs_style_4 cs_mb_25">
                  <h2 className="cs_section_title cs_fs_32 cs_bold mb-0">
                    PIDE TU <span>COTIZACIÓN</span>
                  </h2>
                </div>
                <form className="row cs_gap_y_24" id="cs_form" onSubmit={handleSubmit}>
                  <div className="col-sm-6">
                    <input type="text" name="name" className="cs_form_field" placeholder="Nombre" />
                  </div>
                  <div className="col-sm-6">
                    <input type="text" name="place" className="cs_form_field" placeholder="Colonia o municipio" />
                  </div>
                  <div className="col-lg-12">
                    <select name="service" className="cs_form_field" defaultValue="">
                      <option value="">¿Qué servicio necesitas?</option>
                      {services.map((s) => (
                        <option key={s.slug} value={sentenceCase(s.title)}>
                          {sentenceCase(s.title)}
                        </option>
                      ))}
                      <option value="No estoy seguro">No estoy seguro</option>
                    </select>
                  </div>
                  <div className="col-lg-12">
                    <textarea name="message" rows="5" className="cs_form_field" placeholder="¿Qué plaga ves y en qué tipo de espacio? (casa, jardín, bodega, negocio)"></textarea>
                  </div>
                  <div className="col-lg-12">
                    <button type="submit" className="cs_btn cs_style_1 cs_type_1 cs_bold cs_heading_bg cs_white_color w-100">
                      Enviar por WhatsApp
                    </button>
                  </div>
                </form>
                <div className="cs_height_60 cs_height_lg_40"></div>
                <div className="cs_section_heading cs_style_4 cs_mb_25">
                  <h2 className="cs_section_title cs_fs_32 cs_bold mb-0">
                    DATOS DE <span>CONTACTO</span>
                  </h2>
                </div>
                <ul className="cs_contact_info cs_mp_0">
                  {contactData.info.map((item) => (
                    <li key={item.label}>
                      <p className="mb-0">{item.label}</p>
                      <h4 className="mb-0 cs_fs_20 cs_bold">{item.value}</h4>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="cs_height_100 cs_height_lg_70"></div>
      </section>
      <ZonesSection zones={contactData.zones} />
      <div className="cs_height_100 cs_height_lg_70"></div>
      <DreamCard data={{ backgroundImage: '/assets/img/card_bg.jpg', tags: ['Casas', 'Jardines', 'Bodegas', 'Negocios'], title: '¿PLAGAS EN TU ESPACIO? <br /> ESCRÍBENOS', buttonLink: whatsappLink() }} />
    </>
  );
}
