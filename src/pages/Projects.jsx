import { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { spacesPageData as data } from '../data/pages';
import { spaces, spaceInfoRows, spaceUrl } from '../data/spaces';
import usePageTitle from '../hooks/usePageTitle';
import PageHeading from '../components/PageHeading';
import ProjectCard, { ProjectInfoList } from '../components/ProjectCard';
import SliderArrows from '../components/SliderArrows';
import FaqSection from '../components/sections/FaqSection';

const toCard = (space) => ({ title: space.title, image: space.image, link: spaceUrl(space), rows: spaceInfoRows(space) });

function FeaturedSpace({ space, labels }) {
  return (
    <section className="cs_card cs_style_6 cs_bg_filed" style={{ backgroundImage: `url(${space.image})` }}>
      <div className="container">
        <div className="cs_card_in">
          <div className="cs_card_left">
            <h2 className="cs_card_title cs_white_color cs_fs_80 mb-0">
              <Link to={spaceUrl(space)}>{space.title}</Link>
            </h2>
            <ProjectInfoList rows={spaceInfoRows(space)} textClass="cs_white_color" />
          </div>
          <div className="cs_card_right">
            <div className="cs_card_text">
              <p className="text-uppercase cs_white_color mb-0">{labels.description}</p>
              <p className="cs_fs_20 cs_bold cs_white_color cs_mb_40">{space.description}</p>
              <p className="text-uppercase cs_white_color mb-0">{labels.outcomes}</p>
              <p className="cs_fs_20 cs_bold cs_white_color mb-0" dangerouslySetInnerHTML={{ __html: space.outcomes }} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function SingleSpace({ space }) {
  return (
    <section>
      <div className="container">
        <div className="cs_height_100 cs_height_lg_70"></div>
        <ProjectCard project={toCard(space)} />
        <div className="cs_height_100 cs_height_lg_70"></div>
      </div>
    </section>
  );
}

function SpacesSlider({ items }) {
  const swiperRef = useRef(null);
  const [current, setCurrent] = useState(1);

  return (
    <>
      <div className="cs_height_100 cs_height_lg_70"></div>
      <div className="cs_slider cs_style_1 cs_slider_gap_24">
        <div className="cs_slider_container">
          <div className="cs_slider_wrapper">
            <Swiper
              spaceBetween={24}
              slidesPerView={1}
              loop
              speed={800}
              onSwiper={(swiper) => (swiperRef.current = swiper)}
              onSlideChange={(swiper) => setCurrent(swiper.realIndex + 1)}
              className="cs_slider cs_style_1 cs_slider_gap_24"
            >
              {items.map((space) => (
                <SwiperSlide className="cs_slide" key={space.slug}>
                  <div className="container">
                    <ProjectCard project={toCard(space)} />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
        <div className="cs_height_100 cs_height_lg_70"></div>
        <hr />
        <div className="cs_height_64 cs_height_lg_50"></div>
        <div className="d-flex justify-content-center">
          <SliderArrows
            current={current}
            total={items.length}
            onPrev={() => swiperRef.current?.slidePrev()}
            onNext={() => swiperRef.current?.slideNext()}
          />
        </div>
      </div>
      <div className="cs_height_100 cs_height_lg_70"></div>
    </>
  );
}

export default function Projects() {
  usePageTitle('Espacios que atendemos');
  const [first, featured, second, ...rest] = spaces;

  return (
    <>
      <PageHeading data={data.heading} />
      <SingleSpace space={first} />
      <FeaturedSpace space={featured} labels={data.labels} />
      <SingleSpace space={second} />
      <hr />
      <SpacesSlider items={[...rest, first, featured]} />
      <section className="cs_gray_bg">
        <div className="cs_height_100 cs_height_lg_70"></div>
        <FaqSection data={data.faq} />
        <div className="cs_height_100 cs_height_lg_70"></div>
      </section>
    </>
  );
}
