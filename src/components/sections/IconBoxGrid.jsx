import { FaIcon } from '../Icons';

// Rejilla de 2 columnas con íconos usada en el detalle de servicio y de proyecto (cs_iconbox cs_style_2)
export default function IconBoxGrid({ items }) {
  return (
    <div className="row cs_gap_x_20 cs_gap_y_20">
      {items.map((item, index) => (
        <div className="col-sm-6" key={index}>
          <div className="cs_iconbox cs_style_2">
            <div className="cs_iconbox_icon">
              <i className="d-inline-flex">
                <FaIcon name={item.icon} size={26} />
              </i>
            </div>
            <p className="cs_iconbox_title cs_bold cs_fs_20 mb-0 cs_heading_color">{item.title}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
