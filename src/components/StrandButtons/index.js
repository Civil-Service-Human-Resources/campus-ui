import './strandbuttons.scss';

export const StrandButtons = ({ categories, onClick }) => {
  const handleClick = (cat) => (evt) => {
    if (typeof onClick === 'function') {
      onClick(cat, evt);
    }
  };

  return (
    <div className="campus-strand-buttons">
      {categories.map((category, i) => (
        <div
          key={i}
          className={`campus-strands-button category_${i + 1}`}
          onClick={handleClick(category)}
        >
          {category}
        </div>
      ))}
    </div>
  );
};
