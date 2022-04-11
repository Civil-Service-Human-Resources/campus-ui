import { Link } from 'react-router-dom';
import './breadcrumbs.scss';

export const Breadcrumbs = ({ list }) => {
  return (
    <nav
      className="campus-breadcrumbs"
      aria-label="Campus Breadcrumbs"
      role="navigation"
    >
      <ul className="breadcrumbs">
        {list?.map((item) => (
          <li key={item.label}>
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
