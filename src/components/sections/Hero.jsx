import { useState } from 'react';
import SmartLink from '../SmartLink';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import { ArrowUpRight, LocationIcon } from '../Icons';

export default function Hero({ data }) {
  const [current, setCurrent] = useState(1);

  return (
    <section className="cs_hero cs_style_1 cs_heading_bg cs_white_color">
      <div className="container">
        <div className="cs_hero_in">
          <div className="cs_hero_text">
            <h1
              className="cs_hero_title cs_fs_100 cs_normal cs_mb_12 cs_white_color cs_gradient_color_1 wow fadeInUp"
              data-aos="fade-up"
              dangerouslySetInnerHTML={{ __html: data.title }}
            />
            <p className="cs_hero_subtitle cs_fs_20 cs_mb_32 cs_opacity_7_5" dangerouslySetInnerHTML={{ __html: data.subtitle }} />
            <div className="cs_hero_btns">
              <SmartLink
                to={data.primaryBtn.url}
                className="cs_btn cs_style_1 cs_bold cs_heading_color cs_white_bg wow fadeInLeft"
                data-aos="fade-right"
              >
                {data.primaryBtn.text}
              </SmartLink>
              <SmartLink to={data.secondaryBtn.url} className="cs_btn cs_style_2 cs_bold cs_white_color wow fadeInRight" data-aos="fade-left">
                {data.secondaryBtn.text}
              </SmartLink>
            </div>
          </div>
          <div className="cs_hero_funfact_wrap wow fadeInRight" data-aos="fade-left">
            <div className="cs_hero_funfact">
              <h3 className="cs_fs_24 cs_bold cs_white_color mb-0">{data.funfact.number}</h3>
              <p className="cs_fs_20 cs_white_color cs_opacity_7_5 cs_mb_16">{data.funfact.text}</p>
              <div className="cs_circle_group">
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
          </div>
          <div className="cs_hero_box wow fadeInUp" data-aos="fade-up">
            <div className="cs_hero_box_icon cs_mb_29">
              <LocationIcon />
            </div>
            <h3 className="cs_hero_box_title cs_fs_24 cs_mb_12 cs_white_color" dangerouslySetInnerHTML={{ __html: data.box.title }} />
            <p className="cs_hero_box_subtitle mb-0 cs_opacity_7_5" dangerouslySetInnerHTML={{ __html: data.box.subtitle }} />
            <SmartLink to={data.box.link} className="cs_arrow_btn cs_hero_box_btn cs_center cs_heading_bg cs_white_color">
              <ArrowUpRight />
            </SmartLink>
          </div>
        </div>
      </div>
      <div className="cs_hero_bg">
        <div className="cs_slider cs_style_1">
          <Swiper
            modules={[Autoplay, Pagination]}
            loop
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            speed={1000}
            pagination={{
              clickable: true,
              el: '.cs_pagination_1_list',
              renderBullet: (index, className) => `<li class="${className}" role="presentation" style="margin: 0;">
                            <button type="button" style="z-index: 1; background-color: white;">${index + 1}</button>
                          </li>`,
            }}
            onSlideChange={(swiper) => setCurrent(swiper.realIndex + 1)}
            className="cs_slider_wrapper"
          >
            {data.backgrounds.map((bg, index) => (
              <SwiperSlide key={index}>
                <div className="cs_slide">
                  <img
                    className="cs_hero_bg_in cs_bg_filed"
                    src={bg}
                    alt=""
                    style={{ width: '100%', objectFit: 'cover', objectPosition: 'center', position: 'absolute', top: 0, left: 0, zIndex: -1 }}
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="cs_pagination_1_wrap">
            <div className="container">
              <div className="cs_pagination_1_in" style={{ backgroundColor: 'transparent', pointerEvents: 'auto' }}>
                <div className="cs_slider_number cs_style_1 cs_white_color cs_bold">
                  <span className="cs_current_number">
                    <span>0{current}</span>
                  </span>{' '}
                  <span className="cs_slider_number_seperator"></span>{' '}
                  <span className="cs_total_numbers">
                    <span>0{data.backgrounds.length}</span>
                  </span>
                </div>
                <div className="cs_pagination cs_style_1" style={{ position: 'relative', pointerEvents: 'auto' }}>
                  <ul className="cs_pagination_1_list"></ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
