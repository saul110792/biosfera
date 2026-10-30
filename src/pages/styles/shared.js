import { useEffect } from 'react';
import { homeData } from '../../data/home';
import { generalFaq } from '../../data/pages';
import { services, serviceUrl } from '../../data/services';
import { spaces, spaceUrl } from '../../data/spaces';
import { business, serviceZones, whatsappLink } from '../../data/business';
import { sentenceCase } from '../../utils/text';

// Contenido compartido por las propuestas de página principal (/style2 y /style3)
export const proposalContent = {
  business,
  whatsapp: whatsappLink(),
  zones: [...serviceZones.cdmx, ...serviceZones.edomex],
  pests: ['Cucarachas', 'Chinches', 'Termitas', 'Carcoma', 'Ratas y ratones', 'Pulgas', 'Garrapatas', 'Moscas'],
  steps: homeData.howItWorks.steps.map((step) => {
    const [number, title] = step.title.split(' | ');
    return { number, title, description: step.description };
  }),
  tips: homeData.tips.testimonials.map((tip) => ({
    label: tip.designation,
    text: tip.text.replace(/<\/?span>/g, ''),
  })),
  services: services.map((s) => ({
    slug: s.slug,
    title: sentenceCase(s.title),
    summary: s.summary,
    image: s.image,
    pests: s.pests,
    url: serviceUrl(s),
  })),
  spaces: spaces.map((s) => ({
    slug: s.slug,
    title: sentenceCase(s.title),
    description: s.description,
    frequency: sentenceCase(s.frequency),
    image: s.image,
    url: spaceUrl(s),
  })),
  faq: generalFaq.slice(0, 5),
};

// Título de la pestaña y noindex: son páginas de muestra para el cliente, no deben salir en buscadores
export function useProposalPage(name) {
  useEffect(() => {
    document.title = `Biosfera | ${name}`;
    const meta = document.createElement('meta');
    meta.name = 'robots';
    meta.content = 'noindex';
    document.head.appendChild(meta);
    return () => meta.remove();
  }, [name]);
}
