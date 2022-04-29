import { useMemo } from 'react';
import './pagination.scss';

export const Pagination = ({ current, total, onChange }) => {
  const items = useMemo(() => {
    const createPages = () => {
      if (current <= 1) {
        return [current, current + 1, current + 2];
      }
      if (current >= total && total > 2) {
        return [current - 2, current - 1, current];
      }
      return [current - 1, current, current + 1];
    };
    const pages = createPages();

    return pages.filter((x) => x <= total);
  }, [current, total]);

  if (total <= 1) {
    return null;
  }

  const prevDisable = current <= 0;
  const nextDisable = current >= total - 1;

  const goToPage = (p) => () => {
    if (p !== current) {
      onChange(p);
    }
  };

  const prevPage = () => {
    if (!prevDisable && current - 1 >= 0) {
      onChange(current - 1);
    }
  };

  const nextPage = () => {
    if (!nextDisable && current + 1 <= total) {
      onChange(current + 1);
    }
  };

  return (
    <div className="campus-pagination">
      <ul>
        <li onClick={prevPage} className={prevDisable ? 'disabled' : ''}>
          <span>Prev</span>
        </li>
        {items.map((n) => (
          <li
            key={n}
            className={n === current ? 'active' : ''}
            onClick={goToPage(n)}
          >
            <span>{n}</span>
          </li>
        ))}
        <li onClick={nextPage} className={nextDisable ? 'disabled' : ''}>
          <span>Next</span>
        </li>
      </ul>
    </div>
  );
};
