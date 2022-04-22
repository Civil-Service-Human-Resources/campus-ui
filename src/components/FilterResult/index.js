import { useMemo } from 'react';
import { getCopy } from '../../copytable';

import './filterresult.scss';

const commonCopy = getCopy('common');

export const FilterResult = ({ total, count }) => {
  const text = useMemo(() => {
    if (commonCopy.filterResult) {
      const base = commonCopy.filterResult;
      return base.replace(/{{count}}/, count).replace(/{{total}}/, total);
    }
    return '';
  }, [total, count]);

  return <div className="campus-filter-result">{text}</div>;
};
