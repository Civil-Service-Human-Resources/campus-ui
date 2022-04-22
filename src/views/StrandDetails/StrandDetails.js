import { useContext, useEffect, useMemo, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Breadcrumbs } from '../../components/Breadcrumbs';
import { FilterResult } from '../../components/FilterResult';
import { CourseList } from '../../components/CourseList';
import { Pagination } from '../../components/Pagination';
import { AppContext } from '../../context';
import { getCopy } from '../../copytable';
import { getStrandDetailApi } from '../../services/strands';

import './stranddetails.scss';

const straindCopy = getCopy('learningStrands');
const pageCopy = getCopy('careerDevelopment');

export const StrandDetails = () => {
  const { slug, catRef } = useParams();
  const [page, setPage] = useState(0);
  const [details, setDetails] = useState();
  const { strandCategories } = useContext(AppContext);

  const strand = straindCopy[slug];
  const breadcrumbs = useMemo(() => {
    if (!strand) {
      return [];
    }
    const category = (strandCategories[catRef] || catRef)
      .split('_')
      .map((x) => x.charAt(0).toUpperCase() + x.slice(1))
      .join(' ');

    return strand.breadcrumbs.concat({ label: category });
  }, [strand, catRef, strandCategories]);

  useEffect(() => {
    if (catRef && strand) {
      (async () => {
        try {
          setDetails(await getStrandDetailApi(strand.id, catRef, page));
        } catch (error) {}
      })();
    }
  }, [strand, catRef, page]);

  return (
    <div className="campus-strand-details">
      <div className="campus-container">
        <Breadcrumbs list={breadcrumbs} />
        <div className="campus-strand-details__content">
          <div className="campus-strand-title">
            <h1>{strand.chapter}</h1>
            <h2>{strand.title}</h2>
          </div>
          <div className="campus-section-title">{pageCopy.title}</div>
          <FilterResult
            total={details?.totalResults}
            count={details?.results?.length}
          />
          <CourseList courses={details?.results || []} strandSlug={slug} />
          <Pagination
            current={page}
            total={Math.floor(details?.results?.length / 10)}
            onChange={setPage}
          />
        </div>
      </div>
    </div>
  );
};
