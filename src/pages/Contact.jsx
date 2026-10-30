import { sentenceCase } from '../utils/text';
import { business, whatsappLink } from '../data/business';
import { contactData } from '../data/pages';
import { services } from '../data/services';
import usePageTitle from '../hooks/usePageTitle';
import PageHeading from '../components/PageHeading';
import DreamCard from '../components/DreamCard';
import ZonesSection from '../components/sections/ZonesSection';

// Arma el texto de la solicitud con los campos que la persona llenó
function buildRequest(form) {
  const { name, phone, place, service, date, time, message } = form.elements;
  return [
    'Hola Biosfera, quiero solicitar una cotización o visita.',
    name.value && `Nombre: ${name.value}`,
    phone.value && `Teléfono: ${phone.value}`,
    place.value && `Colonia / municipio: ${place.value}`,
    service.value && `Servicio: ${service.value}`,
    date.value && `Fecha preferida: ${date.value.split('-').reverse().join('/')}`,
    time.value && `Horario preferido: ${time.value}`,
    message.value && `Detalles: ${message.value}`,
  ]
    .filter(Boolean)
    .join('\n');
}

export default function Contact() {
  usePageTitle('Contacto');

  // Sin backend: la solicitud se abre en WhatsApp (o en el correo, con el botón secundario)
  const sendWhatsapp = (e) => {
    e.preventDefault();
    window.open(whatsappLink(buildRequest(e.target)), '_blank', 'noopener');
  };

  const sendEmail = (e) => {
    const body = encodeURIComponent(buildRequest(e.currentTarget.form));
    window.location.href = `mailto:${business.email}?subject=${encodeURIComponent('Solicitud de cotización - sitio web')}&body=${body}`;
  };

  return (
    <>
      <PageHeading data={contactData.heading} />
      <section>
        <div className="cs_height_100 cs_height_lg_70"></div>
        <div className="container">
          <div className="row cs_gap_y_40">
            <div className="col-lg-5">
              <div className="cs_img_box cs_style_2">
                <img src={contactData.image} alt="Biosfera Control" className="cs_radius_20 w-100" />
              </div>
            </div>
            <div className="col-lg-7">
              <div className="cs_pl_40">
                <div className="cs_section_heading cs_style_4 cs_mb_25">
                  <h2 className="cs_section_title cs_fs_32 cs_bold mb-0">
                    SOLICITA COTIZACIÓN O <span>VISITA</span>
                  </h2>
                </div>
                <form className="row cs_gap_y_24" id="cs_form" onSubmit={sendWhatsapp}>
                  <div className="col-sm-6">
                    <input type="text" name="name" className="cs_form_field" placeholder="Nombre" required />
                  </div>
                  <div className="col-sm-6">
                    <input type="tel" name="phone" className="cs_form_field" placeholder="Teléfono" />
                  </div>
                  <div className="col-sm-6">
                    <input type="text" name="place" className="cs_form_field" placeholder="Colonia o municipio" />
                  </div>
                  <div className="col-sm-6">
                    <select name="service" className="cs_form_field" defaultValue="">
                      <option value="">¿Qué servicio necesitas?</option>
                      {services.map((s) => (
                        <option key={s.slug} value={sentenceCase(s.title)}>
                          {sentenceCase(s.title)}
                        </option>
                      ))}
                      <option value="Necesito asesoría">Necesito asesoría</option>
                    </select>
                  </div>
                  <div className="col-sm-6">
                    <label className="cs_fs_16" htmlFor="visit-date">
                      Fecha preferida para la visita
                    </label>
                    <input type="date" id="visit-date" name="date" className="cs_form_field" />
                  </div>
                  <div className="col-sm-6">
                    <label className="cs_fs_16" htmlFor="visit-time">
                      Horario preferido
                    </label>
                    <select id="visit-time" name="time" className="cs_form_field" defaultValue="">
                      <option value="">Sin preferencia</option>
                      <option value="Mañana (8:00 a 12:00)">Mañana (8:00 a 12:00)</option>
                      <option value="Mediodía (12:00 a 15:00)">Mediodía (12:00 a 15:00)</option>
                      <option value="Tarde (15:00 a 18:00)">Tarde (15:00 a 18:00)</option>
                    </select>
                  </div>
                  <div className="col-lg-12">
                    <textarea
                      name="message"
                      rows="4"
                      className="cs_form_field"
                      placeholder="¿Qué plaga observas y en qué tipo de espacio? (hogar, restaurante, consultorio, escuela...)"
                    ></textarea>
                  </div>
                  <div className="col-sm-7">
                    <button type="submit" className="cs_btn cs_style_1 cs_type_1 cs_bold cs_heading_bg cs_white_color w-100">
                      Enviar por WhatsApp
                    </button>
                  </div>
                  <div className="col-sm-5">
                    <button type="button" onClick={sendEmail} className="cs_btn cs_style_2 cs_bold cs_heading_color w-100">
                      Enviar por correo
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
      <DreamCard
        data={{
          backgroundImage: '/assets/img/bio/perro-manguera.jpg',
          tags: ['Hogares', 'Negocios', 'Consultorios', 'Escuelas'],
          title: '¿NECESITAS ASESORÍA? <br /> ESCRÍBENOS',
          buttonLink: whatsappLink(),
        }}
      />
    </>
  );
}
