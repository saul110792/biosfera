import { ChevronLeft, ChevronRight } from './Icons';

// Flechas con contador "1 / N" (estilo 4 de la plantilla)
export default function SliderArrows({ current, total, onPrev, onNext, className = '', color = 'cs_heading_color' }) {
  return (
    <div className={`cs_slider_arrows cs_style_4 ${className}`}>
      <div className={`cs_left_arrow ${color}`} style={{ cursor: 'pointer' }} onClick={onPrev}>
        <ChevronLeft />
      </div>
      <div className="cs_slider_number cs_style_2 cs_bold">
        {current} / {total}
      </div>
      <div className={`cs_right_arrow ${color}`} style={{ cursor: 'pointer' }} onClick={onNext}>
        <ChevronRight />
      </div>
    </div>
  );
}
