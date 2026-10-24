import { useState } from 'react';
import { Link } from 'react-router-dom';
import WhatsappButton from '../../components/WhatsappButton';
import { proposalContent as c, useProposalPage } from './shared';
import './style3.css';

const nav = [
  ['Servicios', '#servicios'],
  ['Proceso', '#proceso'],
  ['Espacios', '#espacios'],
  ['Zonas', '#zonas'],
];

// Propuesta 3: estilo oscuro y contundente (tipografía grande, acento verde lima, secciones a todo lo ancho)
export default function HomeStyle3() {
  useProposalPage('Propuesta de diseño 3');
  const [menuOpen, setMenuOpen] = useState(false);
  const marquee = [...c.pests, ...c.pests];

  return (
    <div className="s3">
      <header className="s3_header">
        <div className="s3_container s3_header_in">
          <Link to="/style3" className="s3_logo">
            BIOSFERA<span>.</span>
          </Link>
          <nav className={`s3_nav ${menuOpen ? 's3_nav_open' : ''}`}>
            {nav.map(([label, href]) => (
              <a key={href} href={href} onClick={() => setMenuOpen(false)}>
                {label}
              </a>
            ))}
            <a className="s3_btn s3_btn_sm" href={c.whatsapp} target="_blank" rel="noopener noreferrer">
              Cotizar
            </a>
          </nav>
          <button className="s3_menu_btn" aria-label="Abrir menú" aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? 'CERRAR' : 'MENÚ'}
          </button>
        </div>
      </header>

      <section className="s3_hero" style={{ backgroundImage: 'url(/assets/img/hero_bg_4.jpg)' }}>
        <div className="s3_container s3_hero_in">
          <p className="s3_tag">Control de plagas · Fumigación · Sanitización</p>
          <h1>
            Adiós a las <span>plagas.</span>
          </h1>
          <p className="s3_lead">
            Casas, jardines, bodegas y negocios en la CDMX y el Estado de México. Diagnóstico, aplicación y seguimiento, sin rodeos.
          </p>
          <div className="s3_hero_btns">
            <a className="s3_btn" href={c.whatsapp} target="_blank" rel="noopener noreferrer">
              Cotizar por WhatsApp ↗
            </a>
            <a className="s3_btn s3_btn_ghost" href="#servicios">
              Servicios
            </a>
          </div>
          <dl className="s3_facts">
            <div>
              <dt>Cobertura</dt>
              <dd>CDMX + Edomex</dd>
            </div>
            <div>
              <dt>Base</dt>
              <dd>Pantitlán</dd>
            </div>
            <div>
              <dt>Cotización</dt>
              <dd>Por WhatsApp</dd>
            </div>
          </dl>
        </div>
      </section>

      <div className="s3_marquee" aria-hidden="true">
        <div className="s3_marquee_track">
          {marquee.map((pest, i) => (
            <span key={i}>{pest}</span>
          ))}
        </div>
      </div>

      <section id="servicios" className="s3_section">
        <div className="s3_container">
          <div className="s3_heading">
            <h2>
              Lo que <span>hacemos</span>
            </h2>
            <p>Seis servicios para que ninguna plaga se quede.</p>
          </div>
          <ol className="s3_services">
            {c.services.map((service, index) => (
              <li key={service.slug}>
                <Link to={service.url} className="s3_service">
                  <span className="s3_service_num">{String(index + 1).padStart(2, '0')}</span>
                  <div className="s3_service_main">
                    <h3>{service.title}</h3>
                    <p>{service.summary}</p>
                  </div>
                  <ul className="s3_service_tags">
                    {service.pests.slice(0, 3).map((pest) => (
                      <li key={pest}>{pest}</li>
                    ))}
                  </ul>
                  <span className="s3_arrow">↗</span>
                </Link>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section id="proceso" className="s3_section s3_split">
        <div className="s3_split_img" style={{ backgroundImage: 'url(/assets/img/feature_thumb.jpg)' }}></div>
        <div className="s3_split_body">
          <h2>
            Así <span>trabajamos</span>
          </h2>
          <ol className="s3_steps">
            {c.steps.map((step) => (
              <li key={step.number}>
                <span>{step.number}</span>
                <div>
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section id="espacios" className="s3_section">
        <div className="s3_container">
          <div className="s3_heading">
            <h2>
              Cada <span>espacio</span>, su plan
            </h2>
            <p>Desliza para ver los espacios que atendemos.</p>
          </div>
        </div>
        <div className="s3_spaces">
          {c.spaces.map((space) => (
            <Link to={space.url} className="s3_space" key={space.slug} style={{ backgroundImage: `url(${space.image})` }}>
              <div>
                <span>{space.frequency}</span>
                <h3>{space.title}</h3>
                <p>{space.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="s3_section s3_tips">
        <div className="s3_container">
          <div className="s3_heading">
            <h2>
              Prevenir <span>cuesta menos</span>
            </h2>
          </div>
          <div className="s3_tips_grid">
            {c.tips.map((tip, index) => (
              <article key={tip.label}>
                <span>0{index + 1}</span>
                <h3>{tip.label}</h3>
                <p>{tip.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="zonas" className="s3_section">
        <div className="s3_container">
          <div className="s3_heading">
            <h2>
              Vamos a <span>donde estés</span>
            </h2>
            <p>Salimos desde {c.business.baseZone}.</p>
          </div>
          <p className="s3_zones">
            {c.zones.map((zone) => (
              <span key={zone}>{zone}</span>
            ))}
            <span>y más</span>
          </p>
        </div>
      </section>

      <section className="s3_cta">
        <div className="s3_container">
          <a href={c.whatsapp} target="_blank" rel="noopener noreferrer">
            <span className="s3_cta_small">¿Tienes una plaga?</span>
            <span className="s3_cta_big">Escríbenos ↗</span>
          </a>
        </div>
      </section>

      <footer className="s3_footer">
        <div className="s3_container s3_footer_in">
          <Link to="/style3" className="s3_logo">
            BIOSFERA<span>.</span>
          </Link>
          <p>
            WhatsApp {c.business.phone} · {c.business.email}
          </p>
          <p>© {new Date().getFullYear()} Biosfera</p>
        </div>
      </footer>

      <WhatsappButton />
    </div>
  );
}
