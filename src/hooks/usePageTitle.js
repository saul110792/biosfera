import { useEffect } from 'react';

const DEFAULT_TITLE = 'Biosfera Control | Manejo de fauna nociva y desinfección en CDMX';

export default function usePageTitle(title) {
  useEffect(() => {
    document.title = title ? `${title} | Biosfera` : DEFAULT_TITLE;
  }, [title]);
}
