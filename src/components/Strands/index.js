import { Strand } from '../Strand';
import { Paragraphs } from '../Paragraph';
import './strands.scss';

export const Strands = ({ copy }) => {
  const { title, items, intro } = copy;

  return (
    <div className="campus-strands">
      <div className="campus-container">
        <div className="campus-strands__intro">
          <h4 className="campus-subtitle primary font-semi">{title}</h4>
          <Paragraphs>{intro}</Paragraphs>
        </div>
      </div>
      <div className="campus-strands__list">
        {items.map((item, i) => (
          <Strand key={i} {...item} />
        ))}
      </div>
    </div>
  );
};
