import { useEffect } from 'react';

const DEFAULT_TITLE = 'Biosfera | Control de plagas y fumigación en CDMX y Estado de México';

export default function usePageTitle(title) {
  useEffect(() => {
    document.title = title ? `${title} | Biosfera` : DEFAULT_TITLE;
  }, [title]);
}
