import { Link } from 'react-router-dom';

export default function PageHeading({ data }) {
  return (
    <section className="cs_page_heading cs_style_1 cs_bg_filed cs_heading_bg" style={{ backgroundImage: `url(${data.backgroundImage})` }}>
      <div className="container">
        <ol className="breadcrumb">
          {data.breadcrumbs.map((crumb, index) => (
            <li key={index} className={`breadcrumb-item ${crumb.active ? 'active' : ''}`}>
              {crumb.link ? <Link to={crumb.link}>{crumb.label}</Link> : crumb.label}
            </li>
          ))}
        </ol>
        <h1 className="cs_page_title mb-0 cs_fs_80" data-aos="fade-up" dangerouslySetInnerHTML={{ __html: data.title }} />
      </div>
    </section>
  );
}
