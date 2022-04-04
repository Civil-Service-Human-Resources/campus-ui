import { useContext, useState, useMemo } from 'react';
import { Button } from 'react-foundation';
import SearchIcon from '../../assets/icons/SearchIcon.png';
import CloseIcon from '../../assets/icons/CloseIcon.png';
import { DeviceContext } from '../../context';
import { useTopOffest } from '../../hooks';
import './search.scss';

export const Search = ({ copy }) => {
  const { palceholder, button } = copy;
  const [isOpen, setIsOpen] = useState(false);
  const { xlargeSize } = useContext(DeviceContext);
  const styles = useTopOffest(xlargeSize && isOpen);

  const toggleSearchBox = () => {
    setIsOpen(!isOpen);
  };

  const classes = useMemo(() => {
    let base = 'campus-search';
    if (isOpen) {
      base = `${base} opened`;
    }
    return base;
  }, [isOpen]);

  return (
    <div className={classes}>
      <div className="campus-searchinput-wrapper" style={styles}>
        <input type="search" placeholder={palceholder} />
        <Button className="search-button semi">{button}</Button>
      </div>
      {xlargeSize && (
        <div className="search-button__mobile" onClick={toggleSearchBox}>
          <img src={isOpen ? CloseIcon : SearchIcon} alt="" />
        </div>
      )}
    </div>
  );
};
