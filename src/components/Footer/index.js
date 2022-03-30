import { Link } from 'react-router-dom';
import { Menu, MenuItem } from 'react-foundation';
import { LicenceIcon } from '../../assets/icons/LicenceIcon';
import footerlogo from '../../assets/images/govuk-crest.png';
import './footer.scss';

export const Footer = () => {
  return (
    <div className="campus-footer">
      <div className="campus-container">
        <div className="campus-footer__meta">
          <div className="campus-footer__meta__item flex-child-grow">
            <Menu className="campus-menu">
              <Link to="/cookie-policy">
                <MenuItem>Cookie policy</MenuItem>
              </Link>
              <Link to="/accessibility-staement">
                <MenuItem isActive>Accessibility staement</MenuItem>
              </Link>
              <Link to="/privacy">
                <MenuItem>Privacy</MenuItem>
              </Link>
            </Menu>
            <span>
              <LicenceIcon />
            </span>
            <span>
              All content is available under the{' '}
              <a
                rel="noreferrer"
                href="https://www.nationalarchives.gov.uk/doc/open-government-licence/version/3/"
                target="_blank"
              >
                Open Government Licence v3.0
              </a>
              , except where otherwise stated
            </span>
          </div>
          <div className="campus-footer__meta__item">
            <Link to="/" className="campus-footer__copyright-logo">
              <img src={footerlogo} alt="" />
              <p>© Crown copyright</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
