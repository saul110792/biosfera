import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from '../Icons';

export default function ServiceCards({ data }) {
  const [active, setActive] = useState(0);

  return (
    <section>
      <div className="cs_height_100 cs_height_lg_70"></div>
      <div className="container">
        <div className="cs_section_heading cs_style_3">
          <h3 className="cs_brackets_title cs_normal cs_fs_16 mb-0" data-aos="fade-up" dangerouslySetInnerHTML={{ __html: data.title }} />
          <div className="cs_section_right">
            <Link to={data.btnUrl} className="cs_btn cs_style_2 cs_bold cs_heading_color">
              {data.btnText}
            </Link>
          </div>
        </div>
        <div className="cs_height_64 cs_height_lg_50"></div>
        <div className="cs_card_1_group" data-aos="fade-right">
          {data.service.map((service, index) => (
            <div
              key={index}
              className={`cs_card cs_style_1 cs_hover_active cs_heading_bg cs_bg_filed ${active === index ? 'active' : ''}`}
              style={{ backgroundImage: `url(${service.image})` }}
              onMouseEnter={() => setActive(index)}
            >
              <div className="cs_card_top">
                <div className="cs_card_tags">
                  {service.tags.map((tag, i) => (
                    <Link to={tag.url} className="cs_card_tag" key={i}>
                      {tag.label}
                    </Link>
                  ))}
                </div>
              </div>
              <div className="cs_card_bottom">
                <h2 className="cs_card_title cs_white_color cs_fs_32">{service.title}</h2>
                <p className="cs_card_subtitle mb-0 cs_white_color">{service.subtitle}</p>
              </div>
              <Link to={service.link} className="cs_arrow_btn cs_size_lg cs_center cs_white_bg cs_heading_color">
                <ArrowUpRight />
              </Link>
            </div>
          ))}
        </div>
      </div>
      <div className="cs_height_100 cs_height_lg_70"></div>
    </section>
  );
}
