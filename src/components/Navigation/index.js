import { Menu, MenuItem } from 'react-foundation';

import './navigation.scss';

export const Navigation = () => {
  return (
    <Menu className="campus-menu">
      <MenuItem>Home</MenuItem>
      <MenuItem isActive>About</MenuItem>
      <MenuItem>Learning Strands</MenuItem>
    </Menu>
  );
};
