import { useEffect, useState } from 'react';
import {
  useNavigate,
  useParams,
  useSearchParams,
  createSearchParams,
  Link,
} from 'react-router-dom';
import { Navigation } from '../Navigation';
import { Search } from '../Search';
import { getCopy } from '../../copytable';
import campuslogo from '../../assets/images/campus-logo.png';

import './header.scss';

const headerCopy = getCopy('header');

export const Header = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [searchParams] = useSearchParams();
  const term = searchParams.get('term');

  const handleChange = (evt) => {
    setSearchTerm(evt.target.value);
  };

  const goToSearchResult = () => {
    if (searchTerm) {
      navigate({
        pathname: `/search/${slug}`,
        search: `?${createSearchParams({ term: searchTerm, page: 0 })}`,
      });
    }
  };

  const handleKeyup = (evt) => {
    if (evt.keyCode === 13 || evt.key === 'Enter') {
      goToSearchResult();
    }
  };

  useEffect(() => {
    setSearchTerm(term || '');
  }, [term]);

  return (
    <div className="campus-header">
      <div className="campus-container">
        <div className="topbar">
          <div className="top-bar-left">
            <Link to="/">
              <img src={campuslogo} alt="Goverment Campus" />
            </Link>
          </div>
          <div className="top-bar-right">
            <Navigation
              menus={headerCopy.menus}
              trigger={headerCopy.mtrigger}
            />
            <Search
              copy={headerCopy.search}
              value={searchTerm}
              onChange={handleChange}
              onKeyUp={handleKeyup}
              onSearch={goToSearchResult}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
