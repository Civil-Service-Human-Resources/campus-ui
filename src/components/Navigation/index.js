import { useContext, useMemo, useState } from 'react';
import { DeviceContext } from '../../context';
import { MenuList } from './components/MenuList';
import { MobileMenu } from './components/MobileMenu';
import CaretDown from '../../assets/icons/CaretDown.png';

import './navigation.scss';

export const Navigation = ({ menus, trigger }) => {
  const { smallSize } = useContext(DeviceContext);
  const [isOpen, setIsOpen] = useState(false);

  const onToggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const classes = useMemo(() => {
    let base = 'campus-navigation';
    if (isOpen) {
      base = `${base} opened`;
    }
    return base;
  }, [isOpen]);

  return (
    <div className={classes}>
      {!smallSize && (
        <MenuList
          menus={menus}
          className="campus-menu"
          itemClassName="main-menu-item"
        />
      )}
      {smallSize && isOpen && <MobileMenu menus={menus} />}
      {smallSize && (
        <div className="campus-menu-trigger" onClick={onToggleMenu}>
          <img src={CaretDown} alt="" className="campus-menu-trigger__icon" />
          <span>{trigger}</span>
        </div>
      )}
    </div>
  );
};
