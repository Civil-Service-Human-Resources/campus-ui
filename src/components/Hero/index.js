import { Button } from 'react-foundation';
import thumbnail from '../../assets/images/thumbnail.png';
import './hero.scss';

export const Hero = () => {
  return (
    <div className="campus-hero">
      <div className="campus-container">
        <div className="campus-hero-content">
          <div className="campus-intro">
            <h2 className="campus-title">
              Reimagining the way Government learns
            </h2>
            <p className="campus-text-semi">
              Pick and mix from 5 strands to explore new skills and a wide
              variety of learning
            </p>
            <Button>Find out more about Government Campus</Button>
          </div>
          <div className="campus-hero-media">
            <img src={thumbnail} alt="Welcome to Campus" />
          </div>
        </div>
      </div>
    </div>
  );
};
