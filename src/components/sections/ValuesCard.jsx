export default function ValuesCard({ data }) {
  return (
    <section className="">
      <div className="cs_height_100 cs_height_lg_70"></div>
      <div className="container">
        <div className="cs_values_card cs_style_1">
          <div className="cs_values_card_left">
            <h3 className="cs_brackets_title cs_normal cs_fs_16 mb-0">{data.title}</h3>
          </div>
          <div className="cs_values_card_left">
            <ul className="cs_values cs_mp_0 cs_heading_color cs_fs_20">
              {data.items.map((item, index) => (
                <li key={index}>
                  <span>{item.label}</span>
                  <span className="cs_bold">{item.number}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
