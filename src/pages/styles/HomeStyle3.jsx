import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import WhatsappButton from '../../components/WhatsappButton';
import { proposalContent as c, useProposalPage } from './shared';
import './style3.css';

const nav = [
  ['Servicios', '#servicios'],
  ['Proceso', '#proceso'],
  ['Sectores', '#espacios'],
  ['Zonas', '#zonas'],
];

// Propuesta 3: estilo cálido y artesanal (fondo crema, verde olivo, títulos con serifa)
export default function HomeStyle3() {
  useProposalPage('Propuesta de diseño 3');
  const [menuOpen, setMenuOpen] = useState(false);
  const marquee = [...c.pests, ...c.pests];

  // Tipografía con serifa solo para esta propuesta
  useEffect(() => {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,500;9..144,600&display=swap';
    document.head.appendChild(link);
    return () => link.remove();
  }, []);

  return (
    <div className="s3">
      <header className="s3_header">
        <div className="s3_container s3_header_in">
          <Link to="/style3" className="s3_logo">
            <span className="bio_logo_mark s3_logo_mark" aria-hidden="true"></span>
            Biosfera
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

      <section className="s3_hero" style={{ backgroundImage: 'url(/assets/img/bio/hero-jardin.jpg)' }}>
        <div className="s3_container s3_hero_in">
          <p className="s3_tag">Manejo de fauna nociva · Desinfección · Manejo integrado</p>
          <h1>
            Espacios <span>sanos.</span>
          </h1>
          <p className="s3_lead">
            Manejo de fauna nociva y desinfección para hogares, negocios y división veterinaria en la {c.business.coverage}. Métodos físicos primero; el químico, siempre el último recurso.
          </p>
          <div className="s3_hero_btns">
            <a className="s3_btn" href={c.whatsapp} target="_blank" rel="noopener noreferrer">
              Solicitar cotización ↗
            </a>
            <a className="s3_btn s3_btn_ghost" href="#servicios">
              Servicios
            </a>
          </div>
          <dl className="s3_facts">
            <div>
              <dt>Experiencia</dt>
              <dd>{c.business.experience}</dd>
            </div>
            <div>
              <dt>Cobertura</dt>
              <dd>CDMX y Área Metropolitana</dd>
            </div>
            <div>
              <dt>Enfoque</dt>
              <dd>Manejo integrado</dd>
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
              Especies que <span>controlamos</span>
            </h2>
            <p>Seis servicios con manejo integrado y menor impacto ambiental.</p>
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
        <div className="s3_split_img" style={{ backgroundImage: 'url(/assets/img/bio/tecnico-jardin.jpg)' }}></div>
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
              Cada <span>sector</span>, su plan
            </h2>
            <p>Desliza para ver los sectores que atendemos.</p>
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
            <p>Servicio a domicilio en la {c.business.coverage}, {c.business.focusArea}.</p>
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
            <span className="s3_cta_small">¿Necesitas asesoría?</span>
            <span className="s3_cta_big">Escríbenos ↗</span>
          </a>
        </div>
      </section>

      <footer className="s3_footer">
        <div className="s3_container s3_footer_in">
          <Link to="/style3" className="s3_logo">
            <span className="bio_logo_mark s3_logo_mark" aria-hidden="true"></span>
            Biosfera
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
