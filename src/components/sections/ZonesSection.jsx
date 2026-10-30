// Zonas de servicio (útil para que la gente y los buscadores ubiquen la cobertura)
export default function ZonesSection({ zones, className = 'cs_gray_bg' }) {
  const groups = [
    ['CIUDAD DE MÉXICO · ENFOQUE EN EL ORIENTE', zones.cdmx],
    ['ÁREA METROPOLITANA', zones.edomex],
  ];

  return (
    <section className={className}>
      <div className="cs_height_100 cs_height_lg_70"></div>
      <div className="container">
        <div className="cs_section_heading cs_style_2 cs_color_1">
          <h2 className="cs_section_title cs_fs_80 mb-0" data-aos="fade-down">
            ZONAS DE <span>SERVICIO</span>
          </h2>
          <div className="cs_section_right">
            <h3 className="cs_brackets_title cs_normal cs_fs_16 mb-0">COBERTURA</h3>
          </div>
        </div>
        <div className="cs_height_64 cs_height_lg_50"></div>
        <div className="row cs_gap_y_40">
          {groups.map(([title, list]) => (
            <div className="col-lg-6" key={title}>
              <h3 className="cs_fs_24 cs_bold cs_mb_12">{title}</h3>
              <ul className="bio_zone_list cs_fs_20">
                {list.map((zone) => (
                  <li key={zone}>{zone}</li>
                ))}
                <li>y más zonas</li>
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="cs_height_100 cs_height_lg_70"></div>
    </section>
  );
}
