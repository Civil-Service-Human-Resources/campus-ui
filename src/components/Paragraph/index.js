import { Children, useMemo } from 'react';

export const Paragraphs = ({ children, className }) => {
  const classes = useMemo(() => {
    let base = 'campus-text';
    if (className) {
      base = `${base} ${className}`;
    }
    return base;
  }, [className]);

  const arr = useMemo(() => Children.toArray(children), [children]);

  return arr.map((x, i) => (
    <p className={classes} key={i}>
      {x}
    </p>
  ));
};
