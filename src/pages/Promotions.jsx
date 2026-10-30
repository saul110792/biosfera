import { promotionsData } from '../data/pages';
import { whatsappLink } from '../data/business';
import usePageTitle from '../hooks/usePageTitle';
import PageHeading from '../components/PageHeading';
import ServiceCard from '../components/ServiceCard';
import DreamCard from '../components/DreamCard';

export default function Promotions() {
  usePageTitle('Promociones');

  return (
    <>
      <PageHeading data={promotionsData.heading} />
      <div className="cs_height_100 cs_height_lg_70"></div>
      <div className="container">
        <div className="cs_section_heading cs_style_2 cs_color_1">
          <h2 className="cs_section_title cs_fs_80 mb-0" data-aos="fade-down">
            PROMOCIONES <span>VIGENTES</span>
          </h2>
          <div className="cs_section_right">
            <p className="cs_fs_20 mb-0 bio_heading_note">{promotionsData.intro}</p>
          </div>
        </div>
        <div className="cs_height_64 cs_height_lg_50"></div>
        <div className="row cs_gap_y_40 cs_gap_x_40">
          {promotionsData.items.map((promo) => (
            <div className="col-lg-4 col-md-6 bio_promo" key={promo.title}>
              <ServiceCard
                service={{
                  title: promo.title,
                  subtitle: `${promo.text} ${promo.validity}.`,
                  image: promo.image,
                  link: whatsappLink(`Hola Biosfera, me interesa la promoción "${promo.title}".`),
                  badge: promo.tag,
                }}
              />
            </div>
          ))}
        </div>
      </div>
      <div className="cs_height_100 cs_height_lg_70"></div>
      <DreamCard />
    </>
  );
}
