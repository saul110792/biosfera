import { useState } from 'react';
import { Link } from 'react-router-dom';
import WhatsappButton from '../../components/WhatsappButton';
import { LucideIcon } from '../../components/Icons';
import { proposalContent as c, useProposalPage } from './shared';
import './style2.css';

const nav = [
  ['Servicios', '#servicios'],
  ['Cómo trabajamos', '#proceso'],
  ['Sectores', '#espacios'],
  ['Preguntas', '#preguntas'],
];

// Propuesta 2: estilo claro, limpio y de confianza (tonos verde y blanco, tarjetas redondeadas)
export default function HomeStyle2() {
  useProposalPage('Propuesta de diseño 2');
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="s2">
      <header className="s2_header">
        <div className="s2_container s2_header_in">
          <Link to="/style2" className="s2_logo">
            <span className="s2_logo_mark">
              <span className="bio_logo_mark" aria-hidden="true"></span>
            </span>
            Biosfera
          </Link>
          <nav className={`s2_nav ${menuOpen ? 's2_nav_open' : ''}`}>
            {nav.map(([label, href]) => (
              <a key={href} href={href} onClick={() => setMenuOpen(false)}>
                {label}
              </a>
            ))}
            <a className="s2_btn s2_btn_sm" href={c.whatsapp} target="_blank" rel="noopener noreferrer">
              Cotizar
            </a>
          </nav>
          <button className="s2_menu_btn" aria-label="Abrir menú" aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>
            <span></span>
            <span></span>
          </button>
        </div>
      </header>

      <section className="s2_hero">
        <div className="s2_container s2_hero_in">
          <div className="s2_hero_text">
            <p className="s2_eyebrow">Manejo de fauna nociva · {c.business.coverage}</p>
            <h1>
              Manejo de fauna nociva <em>responsable</em> para tu casa y tu negocio
            </h1>
            <p className="s2_lead">
              Manejo Integrado de Plagas y desinfección con métodos físicos primero y el mínimo uso de químicos, seguro para niños, adultos mayores y mascotas.
            </p>
            <div className="s2_hero_btns">
              <a className="s2_btn" href={c.whatsapp} target="_blank" rel="noopener noreferrer">
                <LucideIcon name="messageCircle" size={20} />
                Solicitar cotización
              </a>
              <a className="s2_btn s2_btn_ghost" href="#servicios">
                Ver servicios
              </a>
            </div>
            <ul className="s2_checks">
              <li>Métodos físicos primero</li>
              <li>Producto inoloro e incoloro</li>
              <li>Reporte técnico y constancia</li>
            </ul>
          </div>
          <div className="s2_hero_media">
            <img src="/assets/img/bio/hero-porche.jpg" alt="Área verde tratada por Biosfera" />
            <div className="s2_badge">
              <LucideIcon name="leaf" size={22} />
              <div>
                <strong>{c.business.experience}</strong>
                <span>de experiencia familiar</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="s2_pests">
        <div className="s2_container">
          <p>Atendemos</p>
          <ul>
            {c.pests.map((pest) => (
              <li key={pest}>{pest}</li>
            ))}
          </ul>
        </div>
      </section>

      <section id="servicios" className="s2_section">
        <div className="s2_container">
          <div className="s2_heading">
            <p className="s2_eyebrow">Servicios</p>
            <h2>Especies que controlamos</h2>
          </div>
          <div className="s2_services">
            {c.services.map((service) => (
              <Link to={service.url} className="s2_service" key={service.slug}>
                <div className="s2_service_img" style={{ backgroundImage: `url(${service.image})` }}></div>
                <div className="s2_service_body">
                  <h3>{service.title}</h3>
                  <p>{service.summary}</p>
                  <span className="s2_link">Ver detalle →</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section id="proceso" className="s2_section s2_soft">
        <div className="s2_container">
          <div className="s2_heading">
            <p className="s2_eyebrow">Cómo trabajamos</p>
            <h2>Cuatro pasos, sin complicaciones</h2>
          </div>
          <ol className="s2_steps">
            {c.steps.map((step) => (
              <li key={step.number}>
                <span className="s2_step_num">{step.number}</span>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section id="espacios" className="s2_section">
        <div className="s2_container s2_spaces_wrap">
          <div className="s2_heading s2_heading_left">
            <p className="s2_eyebrow">Espacios</p>
            <h2>Hogares, negocios e instituciones</h2>
            <p className="s2_lead">Casas, condominios, restaurantes, oficinas, consultorios, escuelas, pequeñas industrias y división veterinaria: adaptamos el plan a cada sector.</p>
          </div>
          <div className="s2_spaces">
            {c.spaces.map((space) => (
              <Link to={space.url} className="s2_space" key={space.slug}>
                <img src={space.image} alt={space.title} />
                <div>
                  <h3>{space.title}</h3>
                  <p>Frecuencia sugerida: {space.frequency.toLowerCase()}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="s2_section s2_soft">
        <div className="s2_container">
          <div className="s2_heading">
            <p className="s2_eyebrow">Consejos de prevención</p>
            <h2>Pequeños hábitos que alejan las plagas</h2>
          </div>
          <div className="s2_tips">
            {c.tips.map((tip) => (
              <article className="s2_tip" key={tip.label}>
                <span>{tip.label}</span>
                <p>{tip.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="preguntas" className="s2_section">
        <div className="s2_container s2_faq_wrap">
          <div className="s2_heading s2_heading_left">
            <p className="s2_eyebrow">Preguntas frecuentes</p>
            <h2>Resolvemos tus dudas</h2>
            <Link to="/preguntas-frecuentes" className="s2_link">
              Ver todas las preguntas →
            </Link>
          </div>
          <div className="s2_faq">
            {c.faq.map((item, index) => (
              <details key={item.question} open={index === 0}>
                <summary>{item.question}</summary>
                <p dangerouslySetInnerHTML={{ __html: item.answer }} />
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="s2_cta">
        <div className="s2_container s2_cta_in">
          <div>
            <h2>¿Necesitas asesoría? Te ayudamos.</h2>
            <p>Cuéntanos qué observas y te enviamos una cotización a la medida.</p>
          </div>
          <a className="s2_btn s2_btn_light" href={c.whatsapp} target="_blank" rel="noopener noreferrer">
            Escríbenos ahora
          </a>
        </div>
      </section>

      <footer className="s2_footer">
        <div className="s2_container s2_footer_in">
          <div>
            <Link to="/style2" className="s2_logo s2_logo_light">
              <span className="s2_logo_mark">
              <span className="bio_logo_mark" aria-hidden="true"></span>
            </span>
              Biosfera
            </Link>
            <p>Manejo de fauna nociva y desinfección en la {c.business.coverage}, {c.business.focusArea}.</p>
          </div>
          <div>
            <h4>Contacto</h4>
            <p>WhatsApp: {c.business.phone}</p>
            <p>{c.business.email}</p>
            <p>{c.business.hours}</p>
          </div>
          <div>
            <h4>Zonas</h4>
            <p>{c.zones.join(' · ')} y más.</p>
          </div>
        </div>
        <p className="s2_copy">BIOSFERA © {new Date().getFullYear()}. Todos los derechos reservados.</p>
      </footer>

      <WhatsappButton />
    </div>
  );
}
