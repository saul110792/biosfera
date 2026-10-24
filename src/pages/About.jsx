import { Link } from 'react-router-dom';
import { aboutData } from '../data/pages';
import { serviceZones } from '../data/business';
import usePageTitle from '../hooks/usePageTitle';
import PageHeading from '../components/PageHeading';
import DreamCard from '../components/DreamCard';
import Gallery from '../components/Gallery';
import { ImageBlock } from '../components/VideoPopup';
import ValuesCard from '../components/sections/ValuesCard';
import Features from '../components/sections/Features';
import ZonesSection from '../components/sections/ZonesSection';

function AboutIntro({ data }) {
  return (
    <section>
      <div className="cs_height_100 cs_height_lg_70"></div>
      <div className="container">
        <div className="row cs_gap_x_40 cs_gap_y_24">
          <div className="col-lg-4">
            <div className="cs_section_heading cs_style_4">
              <h2
                className="cs_section_title cs_fs_32 cs_bold mb-0 wow fadeInDown"
                data-aos="fade-down"
                dangerouslySetInnerHTML={{ __html: data.title }}
              />
            </div>
          </div>
          <div className="col-lg-4">
            <p className="cs_fs_20 mb-0" dangerouslySetInnerHTML={{ __html: data.introduction }} />
          </div>
          <div className="col-lg-4">
            <p className="cs_fs_20 mb-0" dangerouslySetInnerHTML={{ __html: data.introduction1 }} />
          </div>
        </div>
        <div className="cs_height_56 cs_height_lg_35"></div>
        <div className="row cs_gap_y_30">
          {/* PENDIENTE: si Biosfera tiene un video de su trabajo, cambiar por VideoBlock + VideoPopup */}
          <div className="col-lg-4" data-aos="fade-right">
            <ImageBlock backgroundImage={data.image} />
          </div>
          <div className="col-lg-8" data-aos="fade-left">
            <div className="cs_cta cs_style_2 cs_bg_filed cs_radius_20" style={{ backgroundImage: `url(${data.cta.backgroundImage})` }}>
              <Link to={data.cta.btnUrl} className="cs_btn cs_style_2 cs_bold cs_white_color">
                {data.cta.btnText}
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="cs_height_100 cs_height_lg_70"></div>
    </section>
  );
}

function GallerySection({ data }) {
  return (
    <section>
      <div className="cs_height_100 cs_height_lg_70"></div>
      <div className="container">
        <div className="row align-items-end cs_gap_y_50">
          <div className="col-xl-3">
            <div className="cs_section_heading cs_style_5">
              <h3 className="cs_brackets_title cs_normal cs_fs_16" dangerouslySetInnerHTML={{ __html: data.subtitle }} />
              <h2 className="cs_section_title cs_fs_80 mb-0" dangerouslySetInnerHTML={{ __html: data.title }} />
            </div>
          </div>
          <div className="col-xl-9">
            <Gallery items={data.items} />
          </div>
        </div>
      </div>
      <div className="cs_height_100 cs_height_lg_70"></div>
    </section>
  );
}

export default function About() {
  usePageTitle('Nosotros');

  return (
    <>
      <PageHeading data={aboutData.heading} />
      <AboutIntro data={aboutData.intro} />
      <div className="cs_heading_bg cs_white_color">
        <ValuesCard data={aboutData.coverage} />
        <Features data={aboutData.features} />
      </div>
      <ZonesSection zones={serviceZones} />
      <GallerySection data={aboutData.gallery} />
      <DreamCard />
    </>
  );
}
