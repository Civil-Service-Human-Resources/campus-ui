import { Link, useLocation } from 'react-router-dom';
import { MenuItem as ReactMenuItem } from 'react-foundation';
import { SubMenu } from './SubMenu';

export const MenuItem = ({ menu, className }) => {
  const { pathname } = useLocation();
  if (!menu) {
    return null;
  }

  if (menu.link && !menu.subMenu) {
    return (
      <ReactMenuItem className={className} isActive={pathname === menu.link}>
        <Link to={menu.link}>
          <span>{menu.label}</span>
        </Link>
      </ReactMenuItem>
    );
  }

  if (Array.isArray(menu.subMenu)) {
    return <SubMenu menu={menu} itemClassName={className} />;
  }

  return (
    <ReactMenuItem className={className}>
      <span>{menu.label}</span>
    </ReactMenuItem>
  );
};
