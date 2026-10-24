import { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { ChevronLeft, ChevronRight } from '../Icons';

export default function Testimonials({ data }) {
  const swiperRef = useRef(null);

  return (
    <section className="cs_gray_bg">
      <div className="cs_height_100 cs_height_lg_70"></div>
      <div className="container">
        <div className="text-center">
          <h3 className="cs_brackets_title cs_normal cs_fs_16 mb-0" data-aos="fade-down">
            {data.title}
          </h3>
        </div>
        <div className="cs_height_64 cs_height_lg_50"></div>
        <div className="row">
          <div className="col-lg-10 offset-lg-1">
            <Swiper
              spaceBetween={24}
              slidesPerView="auto"
              onSwiper={(swiper) => (swiperRef.current = swiper)}
              speed={800}
              loop
              className="cs_slider cs_style_1"
            >
              {data.testimonials.map((item, index) => (
                <SwiperSlide key={index}>
                  <div className="cs_testimonial cs_style_1 text-center wow fadeInUp" data-aos="fade-up">
                    <blockquote
                      className="cs_testimonial_blockquote cs_heading_color cs_fs_32 cs_bold cs_mb_48"
                      dangerouslySetInnerHTML={{ __html: item.text }}
                    />
                    <div className="cs_testimonial_meta">
                      <h4 className="cs_testimonial_avatar cs_bold cs_fs_16 cs_mb_2">{item.name}</h4>
                      <p className="cs_testimonial_avatar_designation mb-0">{item.designation}</p>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
            <div className="cs_slider_arrows cs_style_2">
              <div className="cs_left_arrow cs_heading_color" style={{ cursor: 'pointer' }} onClick={() => swiperRef.current?.slidePrev()}>
                <ChevronLeft />
              </div>
              <div className="cs_right_arrow cs_heading_color" style={{ cursor: 'pointer' }} onClick={() => swiperRef.current?.slideNext()}>
                <ChevronRight />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="cs_height_100 cs_height_lg_70"></div>
    </section>
  );
}
