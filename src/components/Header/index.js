import { Navigation } from '../Navigation';
import { Search } from '../Search';
import { getCopy } from '../../copytable';
import campuslogo from '../../assets/images/campus-logo.png';

import './header.scss';

const headerCopy = getCopy('header');

export const Header = () => {
  return (
    <div className="campus-header">
      <div className="campus-container">
        <div className="topbar">
          <div className="top-bar-left">
            <img src={campuslogo} alt="Campus" />
          </div>
          <div className="top-bar-right">
            <Navigation
              menus={headerCopy.menus}
              trigger={headerCopy.mtrigger}
            />
            <Search copy={headerCopy.search} />
          </div>
        </div>
      </div>
    </div>
  );
};
