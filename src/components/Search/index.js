import { Button } from 'react-foundation';
import SearchIcon from '../../assets/icons/SearchIcon.png';
import './search.scss';

export const Search = ({ copy }) => {
  const { palceholder, button } = copy;

  return (
    <div className="campus-search">
      <input type="search" placeholder={palceholder} />
      <Button className="search-button semi">{button}</Button>
      <div className="search-button__mobile">
        <img src={SearchIcon} alt="" />
      </div>
    </div>
  );
};
