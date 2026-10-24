import { useRef, useState } from 'react';
import { AccordionChevron } from '../Icons';

export default function FaqSection({ data }) {
  const [active, setActive] = useState(0);
  const bodyRefs = useRef([]);

  // En el primer render aún no hay medida: se deja la altura natural, como en el sitio original
  const openHeight = (index) => {
    const el = bodyRefs.current[index];
    return el ? `${el.scrollHeight}px` : undefined;
  };

  return (
    <div className="container">
      <div className="cs_section_heading cs_style_2 cs_color_1">
        <h2 className="cs_section_title cs_fs_80 mb-0" dangerouslySetInnerHTML={{ __html: data.title }} />
        {data.subtitle && (
          <div className="cs_section_right">
            <h3 className="cs_brackets_title cs_normal cs_fs_16 mb-0" dangerouslySetInnerHTML={{ __html: data.subtitle }} />
          </div>
        )}
      </div>
      <div className="cs_height_64 cs_height_lg_50"></div>
      <div className="row cs_gap_y_30">
        <div className="col-xxl-4 col-xl-5">
          <div className="cs_img_box cs_style_2">
            <img src={data.image} alt="FAQ" className="cs_radius_20 w-100" />
          </div>
        </div>
        <div className="col-xxl-8 col-xl-7">
          <div className="cs_accordians cs_style_1">
            {data.items.map((item, index) => (
              <div className={`cs_accordian ${active === index ? 'active' : ''}`} key={index}>
                <div className="cs_accordian_head" onClick={() => setActive(index)}>
                  <p className="cs_accordian_title cs_fs_20 cs_bold cs_heading_color" dangerouslySetInnerHTML={{ __html: item.question }} />
                  <span className="cs_accordian_toggle cs_heading_color">
                    <AccordionChevron />
                  </span>
                </div>
                <div
                  className="cs_accordian_body cs_heading_color cs_opacity_7_5"
                  ref={(el) => (bodyRefs.current[index] = el)}
                  style={{
                    height: active === index ? openHeight(index) : '0',
                    overflow: 'hidden',
                    transition: 'height 0.3s ease, opacity 0.3s ease',
                    opacity: active === index ? '1' : '0',
                  }}
                >
                  <p dangerouslySetInnerHTML={{ __html: item.answer }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
