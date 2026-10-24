import { useState } from 'react';

// Estado del popup de video; el iframe se vacía al cerrar para detener la reproducción
export default function useVideoPopup(url) {
  const [isOpen, setIsOpen] = useState(false);
  const [iframeSrc, setIframeSrc] = useState('about:blank');

  const open = (e) => {
    e.preventDefault();
    setIframeSrc(url);
    setIsOpen(true);
  };
  const close = () => {
    setIframeSrc('about:blank');
    setIsOpen(false);
  };

  return { isOpen, iframeSrc, open, close };
}
