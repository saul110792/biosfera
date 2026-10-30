import { Link } from 'react-router-dom';
import SmartLink from './SmartLink';
import { dreamCardData } from '../data/pages';
import { ArrowUpRight } from './Icons';

// Tarjeta grande con fondo a media altura que aparece antes del footer en las páginas internas
export default function DreamCard({ data = dreamCardData, bgColor = '' }) {
  return (
    <section className={`cs_half_bg ${bgColor}`}>
      <div className="container">
        <div className="cs_card cs_style_1 cs_heading_bg cs_bg_filed" style={{ backgroundImage: `url(${data.backgroundImage})` }}>
          <div className="cs_card_top">
            <div className="cs_card_tags">
              {data.tags.map((tag, index) => (
                <Link to="#" className="cs_card_tag" key={index}>
                  {tag}
                </Link>
              ))}
            </div>
          </div>
          <div className="cs_card_bottom">
            <h2
              className="cs_card_title cs_gradient_color_1 cs_fs_80 mb-0 wow fadeInUp"
              data-aos="fade-up"
              dangerouslySetInnerHTML={{ __html: data.title }}
            />
          </div>
          <SmartLink to={data.buttonLink} className="cs_arrow_btn cs_size_lg cs_center cs_white_bg cs_heading_color">
            <ArrowUpRight />
          </SmartLink>
        </div>
      </div>
    </section>
  );
}
