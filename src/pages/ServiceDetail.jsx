import { sentenceCase } from '../utils/text';
import { useRef } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { dreamCardData, serviceDetailCommon as common } from '../data/pages';
import { getService } from '../data/services';
import { whatsappLink } from '../data/business';
import usePageTitle from '../hooks/usePageTitle';
import DreamCard from '../components/DreamCard';
import { ImageBlock } from '../components/VideoPopup';
import { ChevronLeft, ChevronRight } from '../components/Icons';
import IconBoxGrid from '../components/sections/IconBoxGrid';
import HowItWorks from '../components/sections/HowItWorks';
import NotFound from './NotFound';

function TipsSlider({ data }) {
  const swiperRef = useRef(null);

  return (
    <section>
      <div className="cs_height_100 cs_height_lg_70"></div>
      <div className="container">
        <h3 className="cs_brackets_title cs_normal cs_fs_16 mb-0">{data.title}</h3>
        <div className="cs_height_64 cs_height_lg_50"></div>
        <div className="cs_slider cs_style_1">
          <div className="cs_slider_container">
            <div className="cs_slider_wrapper">
              <Swiper
                spaceBetween={24}
                slidesPerView={1}
                loop
                speed={1000}
                onSwiper={(swiper) => (swiperRef.current = swiper)}
                className="cs_slider cs_style_1 cs_slider_gap_24"
              >
                {data.items.map((item, index) => (
                  <SwiperSlide className="cs_slide" key={index}>
                    <div className="cs_testimonial cs_style_1">
                      <blockquote
                        className="cs_testimonial_blockquote cs_heading_color cs_fs_32 cs_bold cs_mb_48"
                        dangerouslySetInnerHTML={{ __html: item.text }}
                      />
                      <div className="cs_testimonial_meta_wrap">
                        <div className="cs_testimonial_meta">
                          <h4 className="cs_testimonial_avatar cs_bold cs_fs_16 cs_mb_2">{item.name}</h4>
                          <p className="cs_testimonial_avatar_designation mb-0">{item.designation}</p>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
          <div className="cs_slider_arrows cs_style_2 cs_type_1">
            <div className="cs_left_arrow cs_heading_color" style={{ cursor: 'pointer' }} onClick={() => swiperRef.current?.slidePrev()}>
              <ChevronLeft />
            </div>
            <div className="cs_right_arrow cs_heading_color" style={{ cursor: 'pointer' }} onClick={() => swiperRef.current?.slideNext()}>
              <ChevronRight />
            </div>
          </div>
        </div>
      </div>
      <div className="cs_height_100 cs_height_lg_70"></div>
    </section>
  );
}

export default function ServiceDetail() {
  const { serviceId } = useParams();
  const service = getService(serviceId);
  usePageTitle(service ? sentenceCase(service.title) : 'Página no encontrada');

  if (!service) return <NotFound />;

  return (
    <>
      <section>
        <div className="cs_height_125 cs_height_lg_80"></div>
        <div className="container">
          <div className="row cs_gap_x_40 cs_gap_y_30">
            <div className="col-lg-7">
              <div className="cs_page_heading cs_style_2">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <Link to="/">Inicio</Link>
                  </li>
                  <li className="breadcrumb-item">
                    <Link to="/servicios">Servicios</Link>
                  </li>
                  <li className="breadcrumb-item">Detalle</li>
                </ol>
                <h1 className="cs_page_title mb-0 cs_fs_80 wow fadeInUp" dangerouslySetInnerHTML={{ __html: service.headingTitle }} />
              </div>
              <div className="cs_height_64 cs_height_lg_50"></div>
              <ImageBlock className="cs_type_1" backgroundImage={service.image} />
            </div>
            <div className="col-lg-5">
              <div className="cs_cta cs_style_2 cs_type_1 cs_bg_filed cs_radius_20" style={{ backgroundImage: `url(${common.cta.backgroundImage})` }}>
                <a
                  href={whatsappLink(`Hola Biosfera, quiero cotizar el servicio de ${service.title.toLowerCase()}.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cs_btn cs_style_2 cs_bold cs_white_color"
                >
                  {common.cta.btnText}
                </a>
              </div>
            </div>
          </div>
          <div className="cs_height_64 cs_height_lg_50"></div>
          <div className="row cs_gap_x_40 cs_gap_y_30">
            <div className="col-xl-7">
              <div className="cs_fs_20">
                <b className="cs_heading_color">PLAGAS QUE ATENDEMOS:</b> {service.pests.join(', ')}.
                <br />
                <br />
                <span dangerouslySetInnerHTML={{ __html: service.description }} />
              </div>
            </div>
            <div className="col-xl-5">
              <IconBoxGrid items={service.includes} />
            </div>
          </div>
        </div>
        <div className="cs_height_100 cs_height_lg_70"></div>
      </section>
      <HowItWorks data={common.howItWorks} />
      <TipsSlider data={common.tips} />
      <DreamCard data={{ ...dreamCardData, ...common.dreamCard }} bgColor="cs_color_1" />
    </>
  );
}
