import { useContext, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { AppContext } from '../../context';
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
  const navigate = useNavigate();
  const { strandCategories, setStrandCategories } = useContext(AppContext);
  const { mediumSize } = useContext(DeviceContext);

  const learningStrand = copy[slug];
  const breadcrumbs = copy.breadcrumbs;

  const strandId = learningStrand && learningStrand.id;

  const handleClickCategory = (cat) => {
    if (strandId) {
      const catRef = cat.toLowerCase().replace(/\s/g, '_');
      navigate(`/strand/${slug}/category/${catRef}`);
    }
  };

  useEffect(() => {
    if (strandId) {
      (async () => {
        try {
          const response = await getStrandCategoriesApi(strandId);
          const { categoriesToDisplay } = response;
          setStrandCategories(categoriesToDisplay);
        } catch (error) {
          setStrandCategories([]);
        }
      })();
    }
  }, [strandId, setStrandCategories]);

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
          <StrandButtons
            onClick={handleClickCategory}
            categories={Object.values(strandCategories)}
          />
          {mediumSize && <StrandImage imageName={learningStrand.image} />}
        </div>
      </div>
    </div>
  );
};
