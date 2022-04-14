import { Paragraphs } from '../Paragraph';

import './campuscontent.scss';

export const CampusContent = ({ contents }) => {
  return (
    <div className="campus-content-wrapper">
      <Paragraphs>
        {contents?.map((content, index) => {
          if (Array.isArray(content)) {
            return (
              <ul key={index}>
                {content.map((liContent, liIndex) => (
                  <li key={`${index}_${liIndex}`}>
                    <span dangerouslySetInnerHTML={{ __html: liContent }} />
                  </li>
                ))}
              </ul>
            );
          }
          return (
            <span key={index} dangerouslySetInnerHTML={{ __html: content }} />
          );
        })}
      </Paragraphs>
    </div>
  );
};
