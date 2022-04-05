import { useContext, useMemo, useRef, useState } from 'react';
import { MenuList } from '../MenuList';
import { useClickOutSide, useTopOffest } from '../../../../hooks';
import { DeviceContext } from '../../../../context';
import { CaretDownIcon } from '../../../../assets/icons/CaretDownIcon';

import './submenu.scss';

export const SubMenu = ({ menu, itemClassName }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { xxlargeSize } = useContext(DeviceContext);
  const offest = useTopOffest(isOpen);
  const wrapper = useRef();

  const openSubMenu = () => {
    setIsOpen(!isOpen);
  };

  const hideSubMenu = () => {
    setIsOpen(false);
  };

  useClickOutSide(wrapper, hideSubMenu, isOpen);

  const padding = useMemo(() => {
    if (!isOpen) {
      return {};
    }
    if (!xxlargeSize) {
      return { padding: '0 2rem' };
    }
    const parentNode = wrapper.current.parentNode;
    const parentRect = parentNode.getBoundingClientRect();
    return { paddingLeft: parentRect.left };
  }, [isOpen, xxlargeSize]);

  const classes = useMemo(() => {
    let base = itemClassName ? itemClassName : '';
    if (isOpen) {
      base = `${base} is-open`;
    }
    return base;
  }, [isOpen, itemClassName]);

  return (
    <li onClick={openSubMenu} ref={wrapper} className={classes}>
      <CaretDownIcon className="campus-submenu__icon" />
      <span className="campus-submenu__text">{menu.label}</span>
      <div className="campus-submenu" style={{ ...offest, ...padding }}>
        <MenuList menus={menu.subMenu} className="campus-menu" />
      </div>
    </li>
  );
};
