import './pagination.scss';

export const Pagination = ({ showItems = 3, current, total, onChange }) => {
  if (total <= 1) {
    return null;
  }

  if (showItems % 2 === 0) {
    throw new Error('showItems should be odd number');
  }

  const center = Math.ceil(showItems / 2);
  const currentItems = new Array(showItems)
    .fill(true)
    .map((_, i) => {
      const page = current + (i - center);
      if (current < center) {
        return page + center - current;
      }
      if (current > total - center) {
        return page - center + total - current;
      }
      return page;
    })
    .filter((x) => x < total && x >= 0);

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
        {currentItems.map((n) => (
          <li
            key={n}
            className={n === current ? 'active' : ''}
            onClick={goToPage(n)}
          >
            <span>{n + 1}</span>
          </li>
        ))}
        <li onClick={nextPage} className={nextDisable ? 'disabled' : ''}>
          <span>Next</span>
        </li>
      </ul>
    </div>
  );
};
