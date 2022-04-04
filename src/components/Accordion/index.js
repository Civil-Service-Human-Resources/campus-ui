import $ from 'jquery';
import { Link } from 'react-router-dom';
import { Accordion as AccordionFoundation } from 'foundation-sites';
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
} from 'react';

const AccordionContext = createContext();

export const AccordionItem = ({
  children,
  label,
  className,
  selected,
  link,
  as = 'div',
}) => {
  const contentRef = useRef();
  const { $accordion } = useContext(AccordionContext);

  const handleClickItem = useCallback(() => {
    if ($accordion && contentRef.current) {
      $accordion.toggle($(contentRef.current));
    }
  }, [$accordion]);

  const [classes1, classes2] = useMemo(() => {
    let base = 'accordion-item';
    let base1 = 'accordion-title';
    if (className) {
      base = `${base} ${className}`;
    }
    if (!link) {
      base1 = `${base1} has-content`;
    }
    if (selected) {
      base = `${base} selected`;
    }
    return [base, base1];
  }, [selected, className, link]);

  const [Item, itemProps] = useMemo(() => {
    if (link) {
      return [Link, { to: link }];
    }
    return [as, { onClick: handleClickItem }];
  }, [link, as, handleClickItem]);

  return (
    <li className={classes1}>
      <Item className={classes2} {...itemProps}>
        {label}
      </Item>
      <div className="accordion-content" ref={contentRef}>
        {children}
      </div>
    </li>
  );
};

export const Accordion = ({ children, className }) => {
  const $accordion = useRef();
  const containerRef = useRef();

  useEffect(() => {
    const target = $(containerRef.current);
    const options = {
      slideSpeed: 500,
      multiExpand: false,
      allowAllClosed: true,
    };
    $accordion.current = new AccordionFoundation(target, options);

    return () => {
      $accordion.current._destroy();
    };
  }, []);

  const classes = useMemo(() => {
    let base = 'accordion';
    if (className) {
      base = `${base} ${className}`;
    }

    return base;
  }, [className]);

  return (
    <AccordionContext.Provider value={{ $accordion: $accordion.current }}>
      <ul className={classes} ref={containerRef}>
        {children}
      </ul>
    </AccordionContext.Provider>
  );
};
