import { Breadcrumbs } from '../../components/Breadcrumbs';
import { Paragraphs } from '../../components/Paragraph';
import img1 from '../../assets/images/strand-1.png';

import './strands.scss';

const buttons = [
  { label: 'Analysis', key: 'analysis' },
  { label: 'Commercial', key: 'commercial' },
  { label: 'Communications', key: 'communications' },
  { label: 'Digital, Data and Technology', key: 'digital' },
  { label: 'Finance', key: 'finance' },
  { label: 'HR', key: 'hr' },
  { label: 'Operational delivery', key: 'operational' },
  { label: 'Policy', key: 'policy' },
  { label: 'Project delivery', key: 'project' },
  { label: 'Property', key: 'property' },
  { label: 'Security', key: 'security' },
  { label: 'Science and engineering', key: 'science' },
];

export const Strands = () => {
  return (
    <div className="campus-strands-view">
      <div className="campus-container">
        <div className="campus-strands-inner">
          <Breadcrumbs />
          <div className="campus-strands-content">
            <div className="campus-strands-title">
              <h1>Strand 1:</h1>
              <h2>Foundations of public administration</h2>
            </div>
            <div className="campus-strands-description">
              <div className="campus-strands-text">
                <Paragraphs>
                  <span>
                    Strand 1 covers universally available training and knowledge
                    to which every new entrant to the Civil Service at every
                    level is entitled, often as part of an induction or entry
                    programme.
                  </span>
                  <span>
                    Put simply, this training comprises the essential skills
                    that ensure we work effectively as public servants.
                  </span>
                  <span>
                    Taught through face-to-face or digital training sessions
                    with supporting resources, Strand 1 gives everyone an equal
                    chance to flourish and develop their career in public
                    administration.
                  </span>
                </Paragraphs>
              </div>
              <div className="campus-strands-image">
                <img src={img1} alt="" />
              </div>
            </div>
            <div className="campus-strands-buttons">
              {buttons.map((btn) => (
                <div
                  key={btn.key}
                  className={`campus-strands-button ${btn.key}`}
                >
                  {btn.label}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
