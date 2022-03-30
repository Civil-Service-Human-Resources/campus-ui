export const StrandItem = ({ color, title, description }) => {
  return (
    <div className={`campus-strand-wrapper ${color}`}>
      <div className="campus-container">
        <div className="campus-strand-item">
          <h5 className="campus-subtitle font-semi no-margin">{title}</h5>
          <span className="campus-subtitle no-margin">{description}</span>
        </div>
      </div>
    </div>
  );
};
