import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { headerData } from '../data/layout';
import { whatsappLink } from '../data/business';
import { LucideIcon, SearchIcon } from './Icons';
import BrandLogo from './BrandLogo';

// variant 'cs_color_1': encabezado claro con logo oscuro (detalle de servicio, sin imagen de fondo)
export default function Header({ variant = '' }) {
  const logoTone = variant === 'cs_color_1' ? 'dark' : 'light';
  const [menuOpen, setMenuOpen] = useState(false);
  const [openDropdowns, setOpenDropdowns] = useState([]);
  const [stickyClass, setStickyClass] = useState('');
  const [searchOpen, setSearchOpen] = useState(false);

  const toggleDropdown = (index) => {
    setOpenDropdowns((prev) => (prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]));
  };

  useEffect(() => {
    const onScroll = () => setStickyClass(window.scrollY > 100 ? 'cs_sticky_active' : '');
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <header className={`cs_site_header cs_style_1 ${variant} cs_sticky_header ${stickyClass}`}>
        <div className="cs_main_header">
          <div className="container">
            <div className="cs_main_header_in">
              <div className="cs_main_header_left">
                <Link className="cs_site_branding" to={headerData.logoUrl} aria-label="Biosfera, ir al inicio">
                  <BrandLogo tone={logoTone} />
                </Link>
              </div>
              <div className="cs_main_header_center">
                <div className="cs_nav cs_heading_color">
                  <nav className={`cs_nav_list_wrap text-uppercase ${menuOpen ? 'cs_active' : ''}`}>
                    <ul className="cs_nav_list">
                      {headerData.menuItems.map((item, index) => (
                        <li key={index} className={item.children ? 'menu-item-has-children' : ''}>
                          <Link to={item.href}>{item.label}</Link>
                          {item.children && (
                            <>
                              <ul style={{ display: openDropdowns.includes(index) ? 'block' : 'none' }}>
                                {item.children.map((child, i) => (
                                  <li key={i} onClick={() => setMenuOpen(!menuOpen)}>
                                    <Link to={child.href}>{child.label}</Link>
                                  </li>
                                ))}
                              </ul>
                              <span
                                className={`cs_munu_dropdown_toggle ${openDropdowns.includes(index) ? 'active' : ''}`}
                                onClick={() => toggleDropdown(index)}
                              >
                                <span></span>
                              </span>
                            </>
                          )}
                        </li>
                      ))}
                    </ul>
                  </nav>
                  <span className={`cs_menu_toggle ${menuOpen ? 'cs_toggle_active' : ''}`} onClick={() => setMenuOpen(!menuOpen)}>
                    <span></span>
                  </span>
                </div>
              </div>
              <div className="cs_main_header_right">
                <div className="cs_header_icon_btns">
                  <a
                    href={whatsappLink()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cs_header_icon_btn cs_center"
                    aria-label="Cotizar por WhatsApp"
                  >
                    <LucideIcon name="phone" size={20} />
                  </a>
                  <button
                    type="button"
                    className="cs_header_icon_btn cs_search_tobble_btn cs_center"
                    onClick={() => setSearchOpen(!searchOpen)}
                  >
                    <SearchIcon />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <div className={`cs_header_form_wrap cs_center ${searchOpen ? 'active' : ''}`}>
        <div className="cs_header_form_overlay" onClick={() => setSearchOpen(!searchOpen)}></div>
        <form action="#" className="cs_header_form" onSubmit={(e) => e.preventDefault()}>
          <input type="text" className="cs_header_form_input" placeholder="Buscar..." />
          <button type="button" className="cs_header_form_btn cs_center">
            <SearchIcon />
          </button>
        </form>
      </div>
    </>
  );
}
