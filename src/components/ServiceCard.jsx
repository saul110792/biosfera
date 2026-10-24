import { Link } from 'react-router-dom';
import { ArrowUpRight } from './Icons';

export default function ServiceCard({ service }) {
  return (
    <div className="cs_card cs_style_2">
      <Link to={service.link} className="cs_card_thumb">
        <img src={service.image} alt={service.title} />
      </Link>
      <div className="cs_card_info">
        <h2 className="cs_card_title cs_fs_32 cs_white_color cs_bold cs_mb_8">
          <Link to={service.link}>{service.title}</Link>
        </h2>
        <p className="cs_card_subtitle mb-0 cs_white_color">{service.subtitle}</p>
      </div>
      <Link to={service.link} className="cs_arrow_btn cs_size_lg cs_center cs_white_bg cs_heading_color">
        <ArrowUpRight />
      </Link>
    </div>
  );
}
