import { galleryData } from '../data/pages';
import usePageTitle from '../hooks/usePageTitle';
import PageHeading from '../components/PageHeading';
import Gallery from '../components/Gallery';
import DreamCard from '../components/DreamCard';

export default function GalleryPage() {
  usePageTitle('Galería');

  return (
    <>
      <PageHeading data={galleryData.heading} />
      <div className="cs_height_100 cs_height_lg_70"></div>
      <Gallery items={galleryData.items} />
      <div className="cs_height_100 cs_height_lg_70"></div>
      <DreamCard />
    </>
  );
}
