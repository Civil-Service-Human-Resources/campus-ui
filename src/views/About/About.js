import { Breadcrumbs } from '../../components/Breadcrumbs';
import { CampusContent } from '../../components/CampusContent';
import aboutimg from '../../assets/images/about.png';
import { getCopy } from '../../copytable';

import './about.scss';

const copy = getCopy('about');

export const About = () => {
  const breadcrumbs = copy.breadcrumbs;

  return (
    <div className="campus-about-page">
      <div className="campus-container">
        <Breadcrumbs list={breadcrumbs} />
        <div className="campus-about-inner">
          <h1>{copy.title}</h1>
          <div className="campus-about-content">
            <CampusContent contents={copy.contents} />
            <img src={aboutimg} alt="About Campus" />
          </div>
        </div>
      </div>
    </div>
  );
};
