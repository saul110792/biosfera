import { whatsappLink } from '../data/business';
import { LucideIcon } from './Icons';

// Botón flotante de WhatsApp visible en todas las páginas
export default function WhatsappButton() {
  return (
    <a className="bio_whatsapp_btn" href={whatsappLink()} target="_blank" rel="noopener noreferrer" aria-label="Escríbenos por WhatsApp">
      <LucideIcon name="messageCircle" size={26} />
      <span>Cotiza por WhatsApp</span>
    </a>
  );
}
