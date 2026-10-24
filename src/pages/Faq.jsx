import { faqData } from '../data/pages';
import usePageTitle from '../hooks/usePageTitle';
import PageHeading from '../components/PageHeading';
import DreamCard from '../components/DreamCard';
import FaqSection from '../components/sections/FaqSection';

export default function Faq() {
  usePageTitle('Preguntas frecuentes');

  return (
    <>
      <PageHeading data={faqData.heading} />
      {faqData.sections.map((section, index) => (
        <div key={index}>
          <div className="cs_height_100 cs_height_lg_70"></div>
          <FaqSection data={section} />
        </div>
      ))}
      <div className="cs_height_100 cs_height_lg_70"></div>
      <DreamCard />
    </>
  );
}
