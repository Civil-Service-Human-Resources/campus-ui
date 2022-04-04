import { Menu } from 'react-foundation';
import { MenuItem } from './MenuItem';

export const MenuList = ({ menus, className, itemClassName }) => {
  return (
    <Menu className={className}>
      {menus.map((menu, itemIndex) => (
        <MenuItem key={itemIndex} menu={menu} className={itemClassName} />
      ))}
    </Menu>
  );
};
