import { PlayIcon } from './Icons';

export function VideoPopup({ isOpen, iframeSrc, onClose }) {
  return (
    <div className={`cs_video_popup ${isOpen ? 'active' : ''}`}>
      <div className="cs_video_popup-overlay"></div>
      <div className="cs_video_popup-content">
        <div className="cs_video_popup-layer"></div>
        <div className="cs_video_popup-container">
          <div className="cs_video_popup-align">
            <div className="embed-responsive embed-responsive-16by9">
              <iframe className="embed-responsive-item" src={iframeSrc} title="Video"></iframe>
            </div>
          </div>
          <div className="cs_video_popup-close" onClick={onClose}></div>
        </div>
      </div>
    </div>
  );
}

// Mismo bloque sin botón de reproducción, para cuando aún no hay video
export function ImageBlock({ backgroundImage, className = '' }) {
  return (
    <div
      className={`cs_video_block cs_style_1 ${className} bio_image_block cs_bg_filed cs_center cs_radius_20`}
      style={{ backgroundImage: `url(${backgroundImage})` }}
    ></div>
  );
}

// Bloque con botón de play que abre el video en un popup (ver hooks/useVideoPopup)
export function VideoBlock({ backgroundImage, onClick, className = '' }) {
  return (
    <a
      href="#"
      onClick={onClick}
      className={`cs_video_block cs_style_1 ${className} cs_bg_filed cs_video_open cs_center cs_radius_20`}
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <span className="cs_player_btn cs_heading_color">
        <PlayIcon />
      </span>
    </a>
  );
}
