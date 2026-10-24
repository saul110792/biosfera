import { Link } from 'react-router-dom';

// Link interno con React Router, o <a> en pestaña nueva para enlaces externos (WhatsApp, mapas)
export default function SmartLink({ to, children, ...props }) {
  if (/^https?:\/\//.test(to)) {
    return (
      <a href={to} target="_blank" rel="noopener noreferrer" {...props}>
        {children}
      </a>
    );
  }
  return (
    <Link to={to} {...props}>
      {children}
    </Link>
  );
}
