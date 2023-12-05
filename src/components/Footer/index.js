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
          <div className="campus-footer__meta__item">
            <Menu className="campus-menu" style={{display: "none"}}>
              <MenuItem>
                <Link to="/accessibility-statement">
                  Accessibility statement
                </Link>
              </MenuItem>
              <MenuItem>
                <a href="mailto:support@governmentcampus.co.uk?subject=Campus frontend to CSL support request">
                  Contact us
                </a>
              </MenuItem>
              <MenuItem>
                <a href="https://civilserviceinsight.qualtrics.com/jfe/form/SV_bQNQpUPukIG1PWS">
                  Provide feedback on this website
                </a>
              </MenuItem>
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
            <a
              rel="noreferrer"
              href="https://www.nationalarchives.gov.uk/information-management/re-using-public-sector-information/uk-government-licensing-framework/crown-copyright/"
              className="campus-footer__copyright-logo"
              target="_blank"
            >
              <img src={footerlogo} alt="" />
              <p>© Crown copyright</p>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
