import { methodData, servicesPageData } from '../data/pages';
import { services, serviceUrl } from '../data/services';
import usePageTitle from '../hooks/usePageTitle';
import PageHeading from '../components/PageHeading';
import ServiceCard from '../components/ServiceCard';
import SmartLink from '../components/SmartLink';
import Features from '../components/sections/Features';

export default function Services() {
  usePageTitle('Servicios');
  const { cta } = servicesPageData;

  return (
    <>
      <PageHeading data={servicesPageData.heading} />
      <div className="cs_height_100 cs_height_lg_70"></div>
      <div className="container">
        <div className="cs_section_heading cs_style_2 cs_color_1">
          <h2 className="cs_section_title cs_fs_80 mb-0" data-aos="fade-down">
            ESPECIES QUE <span>CONTROLAMOS</span>
          </h2>
          <div className="cs_section_right">
            <p className="cs_fs_20 mb-0 bio_heading_note">{servicesPageData.intro}</p>
          </div>
        </div>
        <div className="cs_height_64 cs_height_lg_50"></div>
        <div className="row cs_gap_y_40 cs_gap_x_40">
          {services.map((service) => (
            <div className="col-lg-6" key={service.slug}>
              <ServiceCard service={{ title: service.title, subtitle: service.summary, image: service.image, link: serviceUrl(service) }} />
            </div>
          ))}
        </div>
        <div className="cs_height_64 cs_height_lg_50"></div>
        <div className="bio_catalog">
          <p className="cs_fs_20">{servicesPageData.catalog.text}</p>
          <SmartLink to={servicesPageData.catalog.btnUrl} className="cs_btn cs_style_1 cs_bold cs_heading_bg cs_white_color">
            {servicesPageData.catalog.btnText}
          </SmartLink>
        </div>
      </div>
      <Features data={methodData} />
      <section className="cs_cta cs_style_1 cs_type_1 cs_heading_bg cs_bg_filed" style={{ backgroundImage: `url(${cta.backgroundImage})` }}>
        <div className="cs_height_100 cs_height_lg_70"></div>
        <div className="container">
          <div className="cs_cta_in">
            <h2 className="cs_cta_title cs_fs_80 cs_white_color cs_mb_40">{cta.title}</h2>
            <SmartLink to={cta.btnUrl} className="cs_btn cs_style_1 cs_bold cs_heading_color cs_white_bg">
              {cta.btnText}
            </SmartLink>
          </div>
        </div>
        <div className="cs_height_100 cs_height_lg_70"></div>
      </section>
    </>
  );
}
