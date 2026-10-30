import { sentenceCase } from '../utils/text';
import { useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { breadcrumbs } from '../data/pages';
import { getSpace, spaceInfoRows, spaces } from '../data/spaces';
import { getService, serviceUrl } from '../data/services';
import usePageTitle from '../hooks/usePageTitle';
import PageHeading from '../components/PageHeading';
import { ProjectInfoList } from '../components/ProjectCard';
import ServiceCard from '../components/ServiceCard';
import SliderArrows from '../components/SliderArrows';
import { ImageBlock } from '../components/VideoPopup';
import IconBoxGrid from '../components/sections/IconBoxGrid';
import NotFound from './NotFound';

function useSlider() {
  const ref = useRef(null);
  const [current, setCurrent] = useState(1);
  return {
    current,
    swiperProps: {
      onSwiper: (swiper) => (ref.current = swiper),
      onSlideChange: (swiper) => setCurrent(swiper.realIndex + 1),
    },
    prev: () => ref.current?.slidePrev(),
    next: () => ref.current?.slideNext(),
  };
}

function ServicesSlider({ items }) {
  const slider = useSlider();

  return (
    <section className="cs_gray_bg">
      <div className="cs_height_100 cs_height_lg_70"></div>
      <div className="container">
        <div className="cs_slider cs_style_1 cs_slider_gap_24">
          <div className="cs_section_heading cs_style_2 cs_color_1">
            <h2 className="cs_section_title cs_fs_80 mb-0">
              SERVICIOS <br /> PARA ESTE <span>SECTOR</span>
            </h2>
            <div className="cs_section_right">
              <h3 className="cs_brackets_title cs_normal cs_fs_16 mb-0">SERVICIOS</h3>
              <SliderArrows className="cs_hide_lg" current={slider.current} total={items.length} onPrev={slider.prev} onNext={slider.next} />
            </div>
          </div>
          <div className="cs_height_64 cs_height_lg_50"></div>
          <div className="cs_slider_container" data-slides-per-view="responsive">
            <div className="cs_slider_wrapper">
              <Swiper
                spaceBetween={24}
                slidesPerView={2}
                loop
                speed={800}
                breakpoints={{ 320: { slidesPerView: 1 }, 768: { slidesPerView: 2 } }}
                className="cs_slider cs_style_1 cs_slider_gap_24"
                {...slider.swiperProps}
              >
                {items.map((service) => (
                  <SwiperSlide className="cs_slide" key={service.slug}>
                    <ServiceCard service={{ title: service.title, subtitle: service.summary, image: service.image, link: serviceUrl(service) }} />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
          <div className="cs_pagination cs_style_2 cs_show_lg"></div>
        </div>
      </div>
      <div className="cs_height_100 cs_height_lg_70"></div>
    </section>
  );
}

export default function ProjectDetail() {
  const { projectId } = useParams();
  const space = getSpace(projectId);
  const gallery = useSlider();
  usePageTitle(space ? sentenceCase(space.title) : 'Página no encontrada');

  if (!space) return <NotFound />;

  const relatedServices = space.serviceSlugs.map(getService);
  // Imágenes del carrusel: la del espacio y las de otros espacios (PENDIENTE: fotos reales de cada tipo de inmueble)
  const images = [space.image, ...spaces.filter((s) => s !== space).map((s) => s.image)].slice(0, 3);

  return (
    <>
      <PageHeading data={{ backgroundImage: '/assets/img/bio/restaurante.jpg', title: space.title, breadcrumbs: breadcrumbs('Sectores') }} />
      <section>
        <div className="container">
          <div className="cs_height_100 cs_height_lg_70"></div>
          <div className="row cs_gap_x_40 cs_gap_y_30">
            <div className="col-lg-7">
              <ProjectInfoList rows={spaceInfoRows(space)} className="cs_project_details_info" />
              <div className="cs_height_50 cs_height_lg_40"></div>
              <ImageBlock className="cs_type_1" backgroundImage="/assets/img/bio/tecnico-interior.jpg" />
            </div>
            <div className="col-lg-5">
              <div className="cs_slider cs_style_1">
                <div className="cs_slider_container">
                  <div className="cs_slider_wrapper">
                    <Swiper spaceBetween={24} slidesPerView={1} loop speed={800} className="cs_slider cs_style_1 cs_slider_gap_24" {...gallery.swiperProps}>
                      {images.map((src, index) => (
                        <SwiperSlide className="cs_slide" key={index}>
                          <div className="cs_project_details_image">
                            <img src={src} alt={`${space.title} ${index + 1}`} />
                          </div>
                        </SwiperSlide>
                      ))}
                    </Swiper>
                  </div>
                </div>
                <div className="d-flex justify-content-center cs_slider_arrows_4_transparent_wrap">
                  <SliderArrows color="cs_white_color" current={gallery.current} total={images.length} onPrev={gallery.prev} onNext={gallery.next} />
                </div>
              </div>
            </div>
          </div>
          <div className="cs_height_70 cs_height_lg_50"></div>
          <div className="row cs_gap_x_40 cs_gap_y_30">
            <div className="col-xl-7">
              <div className="cs_fs_20">
                <b className="cs_heading_color">DESCRIPCIÓN:</b>
                <br />
                {space.description}
                <br />
                <br />
                <b className="cs_heading_color">QUÉ INCLUYE:</b>
                <br />
                <span dangerouslySetInnerHTML={{ __html: space.outcomes }} />
              </div>
            </div>
            <div className="col-xl-5">
              <IconBoxGrid items={relatedServices[0].includes} />
            </div>
          </div>
          <div className="cs_height_100 cs_height_lg_70"></div>
        </div>
      </section>
      <ServicesSlider items={relatedServices} />
    </>
  );
}
