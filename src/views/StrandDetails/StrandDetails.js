import { useContext, useEffect, useMemo, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Breadcrumbs } from '../../components/Breadcrumbs';
import { FilterResult } from '../../components/FilterResult';
import { CourseList } from '../../components/CourseList';
import { Pagination } from '../../components/Pagination';
import { AppContext } from '../../context';
import { getCopy } from '../../copytable';
import { usePageCount } from '../../hooks';
import { getStrandDetailApi } from '../../services/strands';

import './stranddetails.scss';

const straindCopy = getCopy('learningStrands');

export const StrandDetails = () => {
  const { slug, catRef } = useParams();
  const [page, setPage] = useState(0);
  const [details, setDetails] = useState();
  const { strandCategories } = useContext(AppContext);

  const category = useMemo(() => {
    return (strandCategories[catRef] || catRef)
      .split('_')
      .map((x) => x.charAt(0).toUpperCase() + x.slice(1))
      .join(' ');
  }, [catRef, strandCategories]);

  const strand = straindCopy[slug];
  const breadcrumbs = useMemo(() => {
    if (!strand) {
      return [];
    }
    return strand.breadcrumbs.concat({ label: category });
  }, [strand, category]);

  const [current, displays, total, totalPages] = usePageCount(details);

  useEffect(() => {
    if (catRef && strand) {
      (async () => {
        try {
          setDetails(await getStrandDetailApi(strand.id, catRef, page));
        } catch (error) {}
      })();
    }
  }, [strand, catRef, page]);

  if (!details) {
    return null;
  }

  return (
    <div className="campus-strand-details">
      <div className="campus-container">
        <Breadcrumbs list={breadcrumbs} />
        <div className="campus-strand-details__content">
          <div className="campus-strand-title">
            <h1>{strand.chapter}</h1>
            <h2>{strand.title}</h2>
          </div>
          <div className="campus-section-title">{category}</div>
          <FilterResult total={total} count={displays} />
          <CourseList courses={details?.results || []} strandSlug={slug} />
          <Pagination current={current} total={totalPages} onChange={setPage} />
        </div>
      </div>
    </div>
  );
};
