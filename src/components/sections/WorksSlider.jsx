import { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

export default function WorksSlider({ data }) {
  const swiperRef = useRef(null);

  return (
    <section>
      <div className="cs_height_100 cs_height_lg_70"></div>
      <div className="container">
        <div className="cs_section_heading cs_style_2 cs_color_1">
          <h2 className="cs_section_title cs_fs_80 mb-0" data-aos="fade-down" dangerouslySetInnerHTML={{ __html: data.title }} />
          <div className="cs_section_right">
            <h3 className="cs_brackets_title cs_normal cs_fs_16 mb-0" dangerouslySetInnerHTML={{ __html: data.subtitle }} />
          </div>
        </div>
        <div className="cs_height_64 cs_height_lg_50"></div>
        <div className="cs_full_width_slider_section">
          <div className="cs_slider cs_style_1 cs_slider_gap_24">
            <Swiper
              spaceBetween={24}
              slidesPerView="auto"
              onSwiper={(swiper) => (swiperRef.current = swiper)}
              speed={800}
              loop
            >
              {data.slides.map((slide, index) => (
                <SwiperSlide key={index} className="cs_slide" style={{ width: 'auto' }}>
                  <div className="cs_card cs_style_4">
                    <div className="cs_card_thumb cs_bg_filed cs_mb_40" style={{ backgroundImage: `url(${slide.image})` }}></div>
                    <div className="cs_card_info">
                      <ul className="cs_card_info_list cs_mp_0">
                        <li>
                          <p className="mb-0">{data.labels.name}</p>
                          <h3 className="mb-0 cs_fs_20 cs_bold">{slide.name}</h3>
                        </li>
                        <li>
                          <p className="mb-0">{data.labels.location}</p>
                          <h3 className="mb-0 cs_fs_20 cs_bold">{slide.location}</h3>
                        </li>
                      </ul>
                      <div className="cs_card_text">{slide.description}</div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
            <div className="cs_slider_arrows cs_style_3 cs_hide_lg">
              <div
                className="cs_right_arrow cs_heading_color cs_fs_20 cs_center"
                style={{
                  position: 'absolute',
                  top: 0,
                  right: 0,
                  backgroundColor: 'rgba(255, 255, 255, 0.75)',
                  height: '480px',
                  width: 'calc(100% - 1087px)',
                  transition: 'all 0.3s ease',
                  zIndex: 1,
                  cursor: 'pointer',
                }}
                onClick={() => swiperRef.current?.slideNext()}
              >
                <span className="cs_center">{data.nextLabel}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="cs_height_100 cs_height_lg_70"></div>
    </section>
  );
}
