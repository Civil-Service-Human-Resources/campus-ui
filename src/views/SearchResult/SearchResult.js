import { useEffect, useState } from 'react';
import { useParams, useSearchParams } from 'react-router-dom';
import { Search } from '../../components/Search';
import { Breadcrumbs } from '../../components/Breadcrumbs';
import { FilterResult } from '../../components/FilterResult';
import { CourseList } from '../../components/CourseList';
import { Pagination } from '../../components/Pagination';
import { getSearchApi } from '../../services/strands';
import { usePageCount } from '../../hooks';
import { getCopy } from '../../copytable';

import './searchresult.scss';

const pageCopy = getCopy('searchResult');
const headerCopy = getCopy('header');

export const SearchResult = () => {
  const { slug } = useParams();
  const [data, setData] = useState();
  const [searchTerm, setSearchTerm] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();
  const [current, displays, total, totalPages] = usePageCount(data);

  const term = searchParams.get('term');
  const page = searchParams.get('page');

  const setPageNum = (p) => {
    setSearchParams({ term: searchTerm, page: p });
  };

  const handleSearch = () => {
    const p = page ? page : 0;
    setSearchParams({ term: searchTerm, page: p });
  };

  const handleKeyup = (evt) => {
    if (evt.keyCode === 13 || evt.key === 'Enter') {
      const p = page ? page : 0;
      setSearchParams({ term: searchTerm, page: p });
    }
  };

  const handleChange = (evt) => {
    setSearchTerm(evt.target.value);
  };

  useEffect(() => {
    setSearchTerm(term);
  }, [term]);

  useEffect(() => {
    if (term) {
      (async () => {
        try {
          setData(await getSearchApi(term, page));
        } catch (error) {}
      })();
    }
  }, [term, page]);

  return (
    <div className="campus-search-result">
      <div className="campus-container">
        <Breadcrumbs list={pageCopy?.breadcrumbs} />
        <div className="campus-strand-title">
          <h2>{pageCopy.title}</h2>
        </div>
        <div className="campus-search-result__list">
          <Search
            copy={headerCopy.search}
            className="search-result"
            value={searchTerm}
            onChange={handleChange}
            onKeyUp={handleKeyup}
            onSearch={handleSearch}
          />
          {data && <FilterResult count={displays} total={total} term={term} />}
          <CourseList courses={data?.results || []} strandSlug={slug} />
          {data && (
            <Pagination
              current={current}
              total={totalPages}
              onChange={setPageNum}
            />
          )}
        </div>
      </div>
    </div>
  );
};
