import { Link } from 'react-router-dom';
import './breadcrumbs.scss';

export const testId = 'breadcrumb';

export const Breadcrumbs = ({ list }) => {
  return (
    <nav
      className="campus-breadcrumbs"
      aria-label="Campus Breadcrumbs"
      role="navigation"
      data-testId={testId}
    >
      <ul className="breadcrumbs">
        {list?.map((item, index) => (
          <li key={index}>
            {item.link ? (
              <Link to={item.link}>{item.label}</Link>
            ) : (
              <span>{item.label}</span>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
};
