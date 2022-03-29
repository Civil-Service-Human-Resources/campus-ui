import { Button } from 'react-foundation';
import './search.scss';

export const Search = () => {
  return (
    <div className="campus-search">
      <input type="search" placeholder="Search" />
      <Button className="search-button" size="semi">
        Search
      </Button>
    </div>
  );
};
