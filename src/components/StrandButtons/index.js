import './strandbuttons.scss';

export const StrandButtons = ({ categories }) => {
  return (
    <div className="campus-strand-buttons">
      {categories.map((category, i) => (
        <div key={i} className={`campus-strands-button category_${i + 1}`}>
          {category}
        </div>
      ))}
    </div>
  );
};
