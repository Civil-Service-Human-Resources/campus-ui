import { useMemo } from 'react';
import { getCopy } from '../../copytable';

import './filterresult.scss';

const commonCopy = getCopy('common');

export const FilterResult = ({ total, count, term }) => {
  const text = useMemo(() => {
    if (commonCopy.filterResult) {
      let base = commonCopy.filterResult;
      base = base.replace(/{{count}}/, count).replace(/{{total}}/, total);
      if (term) {
        base = `${base} for "${term}"`;
      }
      return base;
    }
    return '';
  }, [total, count, term]);

  return <div className="campus-filter-result">{text}</div>;
};
