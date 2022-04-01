import { Link } from 'react-router-dom';
import { Accordion, AccordionItem } from '../../../Accordion';
import { useTopOffest } from '../../../../hooks';

import './mobilemenu.scss';

export const MobileMenu = ({ menus }) => {
  const styles = useTopOffest(true);

  return (
    <div className="campus-mobilemenu" style={styles}>
      <Accordion>
        {menus.map((menu) => (
          <AccordionItem
            key={menu.label}
            label={menu.label}
            link={menu.link}
            className="nav-item"
          >
            {menu.subMenu?.map((subItem) => (
              <Link
                className="accordion-title sub-navitem"
                to={subItem.link}
                key={subItem.label}
              >
                {subItem.label}
              </Link>
            ))}
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};
