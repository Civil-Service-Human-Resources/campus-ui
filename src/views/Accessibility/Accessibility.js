import { Breadcrumbs } from '../../components/Breadcrumbs';
import { CampusContent } from '../../components/CampusContent';
import { getCopy } from '../../copytable';

import './accessibility.scss';

const copy = getCopy('accessibility');

export const Accessibility = () => {
  const breadcrumbs = copy.breadcrumbs;

  return (
    <div className="campus-accessibility-page">
      <div className="campus-container">
        <Breadcrumbs list={breadcrumbs} />
        <div className="campus-accessibility-inner">
          <h1>{copy.title}</h1>
          <div className="campus-accessibility-content">
            <CampusContent contents={copy.contents} />
          </div>
        </div>
      </div>
    </div>
  );
};
