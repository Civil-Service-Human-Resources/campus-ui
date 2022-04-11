import { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { getCopy } from '../../copytable';
import { DeviceContext } from '../../context/DeviceContext';
import { Breadcrumbs } from '../../components/Breadcrumbs';
import { StrandContent } from '../../components/StrandContent';
import { StrandImage } from '../../components/StrandImage';
import { StrandButtons } from '../../components/StrandButtons';

import './strands.scss';

const copy = getCopy('learningStrands');

export const Strands = () => {
  const { slug } = useParams();
  const { mediumSize } = useContext(DeviceContext);

  const learningStrand = copy[slug];
  const breadcrumbs = copy.breadcrumbs;

  if (!learningStrand) {
    return 'Not Found Strand';
  }

  return (
    <div className="campus-strand-page">
      <div className="campus-container">
        <div className="campus-strand-inner">
          <Breadcrumbs list={breadcrumbs} />
          <div className="campus-strand-block">
            <div className="campus-strand-block__text">
              <div className="campus-strand-title">
                <h1>{learningStrand.chapter}</h1>
                <h2>{learningStrand.title}</h2>
              </div>
              <StrandContent contents={learningStrand.contents} />
            </div>
            {!mediumSize && (
              <div className="campus-strand-block__image">
                <StrandImage imageName={learningStrand.image} />
              </div>
            )}
          </div>
          <StrandButtons />
          {mediumSize && <StrandImage imageName={learningStrand.image} />}
        </div>
      </div>
    </div>
  );
};
