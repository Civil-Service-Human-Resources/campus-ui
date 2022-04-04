import { Button } from 'react-foundation';
import { Paragraphs } from '../Paragraph';
import thumbnail from '../../assets/images/thumbnail.png';
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
            <img src={thumbnail} alt="Welcome to Campus" />
          </div>
        </div>
      </div>
    </div>
  );
};
