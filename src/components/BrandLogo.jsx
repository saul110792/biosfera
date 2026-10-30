// Logo provisional de Biosfera: la hoja del favicon + el nombre.
// tone 'light' (blanco, para fondos oscuros o fotos) o 'dark' (verde, para fondos claros).
// PENDIENTE: reemplazar por el logo oficial cuando Ruth lo envíe.
export default function BrandLogo({ tone = 'light', className = '' }) {
  return (
    <span className={`bio_logo bio_logo_${tone} ${className}`}>
      <span className="bio_logo_mark" aria-hidden="true"></span>
      <span className="bio_logo_text">Biosfera</span>
    </span>
  );
}
