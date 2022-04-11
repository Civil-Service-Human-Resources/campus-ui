import { Paragraphs } from '../Paragraph';

import './strandcontent.scss';

export const StrandContent = ({ contents }) => {
  return (
    <div className="campus-strand-content">
      <Paragraphs>
        {contents?.map((content, index) => {
          if (Array.isArray(content)) {
            return (
              <ul>
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
