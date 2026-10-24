import { Link } from 'react-router-dom';

// Tarjeta con imagen a la izquierda (cs_style_5), usada para los espacios que atiende Biosfera
export default function ProjectCard({ project }) {
  return (
    <div className="cs_card cs_style_5">
      <Link to={project.link} className="cs_card_thumb">
        <img src={project.image} alt={project.title} />
      </Link>
      <div className="cs_card_right">
        <h2 className="cs_card_title cs_fs_80 mb-0">
          <Link to={project.link}>{project.title}</Link>
        </h2>
        <ProjectInfoList rows={project.rows} />
      </div>
    </div>
  );
}

// rows: [[etiqueta, valor], ...]
export function ProjectInfoList({ rows, className = 'cs_card_info_list', textClass = '' }) {
  return (
    <ul className={`${className} cs_mp_0`}>
      {rows.map(([label, value]) => (
        <li key={label}>
          <p className={`mb-0 ${textClass}`}>{label}</p>
          <h4 className={`mb-0 cs_fs_20 cs_bold ${textClass}`}>{value}</h4>
        </li>
      ))}
    </ul>
  );
}
