import { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getCopy } from '../../copytable';
import { DeviceContext } from '../../context/DeviceContext';
import { Breadcrumbs } from '../../components/Breadcrumbs';
import { CampusContent } from '../../components/CampusContent';
import { StrandImage } from '../../components/StrandImage';
import { StrandButtons } from '../../components/StrandButtons';
import { getStrandCategoriesApi } from '../../services/strands';

import './strands.scss';

const copy = getCopy('learningStrands');

export const Strands = () => {
  const { slug } = useParams();
  const [categories, setCategories] = useState([]);
  const { mediumSize } = useContext(DeviceContext);

  const learningStrand = copy[slug];
  const breadcrumbs = copy.breadcrumbs;

  useEffect(() => {
    if (learningStrand && learningStrand.id) {
      (async () => {
        try {
          const response = await getStrandCategoriesApi(learningStrand.id);
          const { categoriesToDisplay } = response;
          setCategories(categoriesToDisplay);
        } catch (error) {
          setCategories([]);
        }
      })();
    }
  }, [learningStrand]);

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
              <CampusContent contents={learningStrand.contents} />
            </div>
            {!mediumSize && (
              <div className="campus-strand-block__image">
                <StrandImage imageName={learningStrand.image} />
              </div>
            )}
          </div>
          <StrandButtons categories={categories} />
          {mediumSize && <StrandImage imageName={learningStrand.image} />}
        </div>
      </div>
    </div>
  );
};
