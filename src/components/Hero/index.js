import { Button } from 'react-foundation';
import { Paragraphs } from '../Paragraph';
import './hero.scss';

export const Hero = ({ copy }) => {
  const { title, intro, button } = copy;

  return (
    <div className="campus-hero">
      <div className="campus-container">
        <div className="campus-hero-content">
          <div className="campus-intro">
            <h2 className="campus-title">{title}</h2>
            <Paragraphs className="semi">{intro}</Paragraphs>
            <Button>{button}</Button>
          </div>
          <div className="campus-hero-media">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube-nocookie.com/embed/yAr0bb17Gr0"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};
