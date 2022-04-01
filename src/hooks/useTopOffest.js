import { useContext, useMemo } from 'react';
import { useScroll } from './useScroll';
import { DeviceContext } from '../context';

export const useTopOffest = (isOpen) => {
  const [, scrollY] = useScroll(isOpen);
  const { mediumSize } = useContext(DeviceContext);

  const styles = useMemo(() => {
    if (!isOpen) {
      return {};
    }
    // 120 and 60 are height of top bar, defined _setting.scss
    const topbar = mediumSize ? 60 : 120;
    let top = 0;
    if (!scrollY) {
      top = topbar;
    } else {
      top = topbar - scrollY;
    }
    return { top };
  }, [scrollY, isOpen, mediumSize]);

  return styles;
};
