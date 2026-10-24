import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Mousewheel, Navigation, Pagination } from 'swiper/modules';
import { LucideIcon } from './Icons';

function GalleryModal({ items, initialSlide, onClose }) {
  const [swiper, setSwiper] = useState(null);
  const [playing, setPlaying] = useState(false);
  const [zoom, setZoom] = useState(1);
  const [fullscreen, setFullscreen] = useState(false);

  useEffect(() => {
    const onChange = () => setFullscreen(!!document.fullscreenElement);
    document.addEventListener('fullscreenchange', onChange);
    return () => document.removeEventListener('fullscreenchange', onChange);
  }, []);

  const togglePlay = () => {
    if (!swiper?.autoplay) return;
    if (playing) swiper.autoplay.stop();
    else swiper.autoplay.start();
    setPlaying(!playing);
  };

  const toggleFullscreen = () => {
    if (document.fullscreenElement) document.exitFullscreen();
    else document.documentElement.requestFullscreen();
  };

  const download = () => {
    const src = items[swiper?.realIndex ?? initialSlide]?.imgSrc;
    if (!src) return;
    const link = document.createElement('a');
    link.href = src;
    link.download = src.substring(src.lastIndexOf('/') + 1);
    link.click();
  };

  return (
    <div className="cs_gallery_modal">
      <div className="cs_gallery_modal_overlay"></div>
      <div className="cs_gallery_modal_slider_wrap">
        <Swiper
          onSwiper={setSwiper}
          pagination={{ type: 'fraction' }}
          navigation
          modules={[Autoplay, Mousewheel, Navigation, Pagination]}
          loop
          mousewheel
          className="mySwiper"
          speed={1000}
          initialSlide={initialSlide}
          autoplay={{ delay: 3000, disableOnInteraction: false, enabled: false }}
        >
          {items.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="cs_gallery_modal_item">
                <img src={item.imgSrc} alt="" style={{ transform: `scale(${zoom})`, transition: 'transform 0.3s ease' }} />
              </div>
              <h4 className="cs_gallery_modal_title">{item.title}</h4>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="cs_gallery_controler">
        <button onClick={() => setZoom((z) => z * 1.1)} className="cs_gallery_controler_btn">
          <LucideIcon name="zoomIn" />
        </button>
        <button onClick={() => zoom > 1 && setZoom((z) => z / 1.1)} className="cs_gallery_controler_btn">
          <LucideIcon name="zoomOut" />
        </button>
        <button onClick={download} className="cs_gallery_controler_btn">
          <LucideIcon name="download" />
        </button>
        <button onClick={togglePlay} className={`cs_gallery_controler_btn ${playing ? 'active' : ''}`}>
          <LucideIcon name={playing ? 'circlePause' : 'circlePlay'} />
        </button>
        <button onClick={toggleFullscreen} className="cs_gallery_controler_btn">
          <LucideIcon name={fullscreen ? 'scanLine' : 'scan'} />
        </button>
        <button onClick={onClose} className="cs_gallery_controler_btn">
          <LucideIcon name="x" />
        </button>
      </div>
    </div>
  );
}

// Rejilla tipo mampostería con visor a pantalla completa
export default function Gallery({ items }) {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <div className="container">
      <div className="cs_gallery_grid_1">
        {items.map((item, index) => (
          <div
            key={index}
            className="cs_gallery cs_style_1 cs_center cs_gallery_item"
            style={{ height: item.height }}
            onClick={() => setOpenIndex(index)}
          >
            <img src={item.imgSrc} alt="" />
            <span className="cs_gallery_info_wrap cs_center">
              <span className="cs_gallery_info text-center cs_center">
                <span className="cs_white_color cs_fs_16 cs_bold cs_mb_4 d-block">{item.title}</span>
                <span className="cs_white_color d-block">{item.year}</span>
              </span>
            </span>
          </div>
        ))}
      </div>
      {openIndex !== null && <GalleryModal items={items} initialSlide={openIndex} onClose={() => setOpenIndex(null)} />}
    </div>
  );
}
