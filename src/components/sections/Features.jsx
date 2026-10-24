import SmartLink from '../SmartLink';
import { FaIcon } from '../Icons';

export default function Features({ data }) {
  return (
    <section>
      <div className="cs_height_100 cs_height_lg_70"></div>
      <div className="container">
        <div className="cs_section_heading cs_style_1">
          <h2 className="cs_section_title cs_fs_80 mb-0" data-aos="fade-down" dangerouslySetInnerHTML={{ __html: data.title }} />
          <div className="cs_section_right">
            <SmartLink to={data.btnUrl} className="cs_btn cs_style_1 cs_bold cs_heading_bg cs_white_color w-100">
              {data.btnText}
            </SmartLink>
          </div>
        </div>
        <div className="cs_height_64 cs_height_lg_50"></div>
        <div className="row align-items-end cs_gap_y_50">
          <div className="col-lg-4">
            <div className="cs_img_box cs_style_1" data-aos="fade-right">
              <img src={data.image} alt="Feature" />
            </div>
          </div>
          <div className="col-lg-8">
            <div className="row cs_gap_y_64">
              {data.items.map((item, index) => (
                <div className="col-sm-6" key={index}>
                  <div className="cs_iconbox cs_style_1">
                    <div className="cs_iconbox_icon cs_center cs_mb_24">
                      <i className="d-flex">
                        <FaIcon name={item.icon} />
                      </i>
                    </div>
                    <h3 className="cs_fs_24 cs_mb_12">{item.title}</h3>
                    <p className="mb-0 cs_fs_20">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="cs_height_100 cs_height_lg_70"></div>
    </section>
  );
}
