import { useEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import AOS from 'aos';
import MainLayout from './layouts/MainLayout';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import ServiceDetail from './pages/ServiceDetail';
import Projects from './pages/Projects';
import ProjectDetail from './pages/ProjectDetail';
import Promotions from './pages/Promotions';
import Blog from './pages/Blog';
import BlogDetail from './pages/BlogDetail';
import Contact from './pages/Contact';
import Faq from './pages/Faq';
import NotFound from './pages/NotFound';
import HomeStyle2 from './pages/styles/HomeStyle2';
import HomeStyle3 from './pages/styles/HomeStyle3';

export default function App() {
  const { pathname } = useLocation();

  useEffect(() => {
    AOS.init({ duration: 1200, delay: 0.2, disable: 'mobile', once: true });
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
    AOS.refreshHard();
  }, [pathname]);

  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="/servicios" element={<Services />} />
      </Route>
      <Route element={<MainLayout footerVariant="cs_color_1" />}>
        <Route path="/nosotros" element={<About />} />
        <Route path="/sectores" element={<Projects />} />
        <Route path="/sectores/:projectId" element={<ProjectDetail />} />
        <Route path="/promociones" element={<Promotions />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:blogId" element={<BlogDetail />} />
        <Route path="/contacto" element={<Contact />} />
        <Route path="/preguntas-frecuentes" element={<Faq />} />
        <Route path="*" element={<NotFound />} />
      </Route>
      <Route element={<MainLayout headerVariant="cs_color_1" footerVariant="cs_color_2" />}>
        <Route path="/servicios/:serviceId" element={<ServiceDetail />} />
      </Route>
      {/* Propuestas alternativas de página principal para que el cliente compare */}
      <Route path="/style2" element={<HomeStyle2 />} />
      <Route path="/style3" element={<HomeStyle3 />} />
    </Routes>
  );
}
