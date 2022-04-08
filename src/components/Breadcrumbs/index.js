import './breadcrumbs.scss';

export const Breadcrumbs = () => {
  return (
    <nav
      className="campus-breadcrumbs"
      aria-label="Campus Breadcrumbs"
      role="navigation"
    >
      <ul className="breadcrumbs">
        <li>Home</li>
        <li>Features</li>
        <li>Current</li>
      </ul>
    </nav>
  );
};
