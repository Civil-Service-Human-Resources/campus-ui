import './modulelist.scss';

export const ModuleList = ({ modules }) => {
  return (
    <div className="campus-modulelist-wrapper">
      {modules?.map((item, index) => (
        <div className="campus-module-item" key={item.id || index}>
          <div className="campus-module-property">
            <span>Course type:</span> {item.type}
          </div>
          <div className="campus-module-property">
            <span>Duration:</span> {item.duration} minutes
          </div>
        </div>
      ))}
    </div>
  );
};
