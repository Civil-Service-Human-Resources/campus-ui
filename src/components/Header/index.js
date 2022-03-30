import { Navigation } from '../Navigation';
import { Search } from '../Search';
import campuslogo from '../../assets/images/campus-logo.png';
import './header.scss';

export const Header = () => {
  return (
    <div className="campus-header">
      <div className="campus-container">
        <div className="topbar">
          <div className="top-bar-left">
            <img src={campuslogo} alt="Campus" />
          </div>
          <div className="top-bar-right">
            <Navigation />
            <Search />
          </div>
        </div>
      </div>
    </div>
  );
};
