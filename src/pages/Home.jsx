import { homeData } from '../data/home';
import usePageTitle from '../hooks/usePageTitle';
import Hero from '../components/sections/Hero';
import ValuesCard from '../components/sections/ValuesCard';
import Features from '../components/sections/Features';
import HowItWorks from '../components/sections/HowItWorks';
import ServiceCards from '../components/sections/ServiceCards';
import Testimonials from '../components/sections/Testimonials';
import WorksSlider from '../components/sections/WorksSlider';
import Cta from '../components/sections/Cta';

export default function Home() {
  usePageTitle();

  return (
    <>
      <Hero data={homeData.hero} />
      <ValuesCard data={homeData.values} />
      <Features data={homeData.features} />
      <HowItWorks data={homeData.howItWorks} />
      <ServiceCards data={homeData.services} />
      <Testimonials data={homeData.tips} />
      <WorksSlider data={homeData.spaces} />
      <Cta data={homeData.cta} />
    </>
  );
}
