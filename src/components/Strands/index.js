import { StrandItem } from './StrandItem';
import items from './strands.json';
import './strands.scss';

export const Strands = () => {
  return (
    <div className="campus-strands">
      <div className="campus-container">
        <div className="campus-strands__intro">
          <h4 className="campus-subtitle primary font-semi">
            The 5 Learning Strands
          </h4>
          <p className="campus-text">
            Our new Curriculum is organised into five strands, to make it easy
            for people to review the training options by category, and quickly
            recognise why each will improve how they do their job. We want every
            civil servant to ‘pick and mix’ from the five strands.
          </p>
          <p className="campus-text">
            They are deliberately designed to be complementary, helping people
            master the full spectrum of skills relevant for their role so they
            will become more confident and capable public administrators.
          </p>
        </div>
      </div>
      <div className="campus-strands__list">
        {items.map((item, i) => (
          <StrandItem key={i} {...item} />
        ))}
      </div>
    </div>
  );
};
