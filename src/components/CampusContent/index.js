import { Fragment } from 'react';
import isObject from 'lodash.isobject';
import isArray from 'lodash.isarray';
import { Paragraphs } from '../Paragraph';

import './campuscontent.scss';

export const CampusContent = ({ contents }) => {
  return (
    <div className="campus-content-wrapper">
      <Paragraphs>
        {contents?.map((content, index) => {
          if (isObject(content)) {
            if (content.label === 'paragraph') {
              return (
                <Fragment key={index}>
                  {content.content?.map((c, i) => (
                    <p key={i}>
                      <span dangerouslySetInnerHTML={{ __html: c || '' }} />
                    </p>
                  ))}
                </Fragment>
              );
            }
            if (content.label === 'bullets') {
              return (
                <ul key={index}>
                  {content.content?.map((c, i) => (
                    <li key={i}>
                      <span dangerouslySetInnerHTML={{ __html: c || '' }} />
                    </li>
                  ))}
                </ul>
              );
            }
          }
          if (isArray(content)) {
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
