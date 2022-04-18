import './stranditem.scss';

export const StrandItem = ({ color, title, description, path }) => {
  return (
    <div className={`campus-stranditem-wrapper ${color}`}>
      <div className="campus-container">
        <a href={path} className="campus-strand-item">
          <h5 className="campus-subtitle font-semi small no-margin">{title}</h5>
          <span className="campus-subtitle small no-margin">{description}</span>
        </a>
      </div>
    </div>
  );
};
