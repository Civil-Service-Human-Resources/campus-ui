import { StrandItem } from '../StrandItem';
import { Paragraphs } from '../Paragraph';

import './strandlist.scss';

export const StrandList = ({ copy }) => {
  const { title, items, intro } = copy;

  return (
    <div className="campus-strandlist-container">
      <div className="campus-container">
        <div className="campus-strandlist-container__intro">
          <h4 className="campus-subtitle primary font-semi">{title}</h4>
          <Paragraphs>{intro}</Paragraphs>
        </div>
      </div>
      <div className="campus-strandlist-container__list">
        {items.map((item, i) => (
          <StrandItem key={i} {...item} />
        ))}
      </div>
    </div>
  );
};
