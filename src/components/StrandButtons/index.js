import './strandbuttons.scss';

const buttons = [
  { label: 'Analysis', key: 'analysis' },
  { label: 'Commercial', key: 'commercial' },
  { label: 'Communications', key: 'communications' },
  { label: 'Digital, Data and Technology', key: 'digital' },
  { label: 'Finance', key: 'finance' },
  { label: 'HR', key: 'hr' },
  { label: 'Operational delivery', key: 'operational' },
  { label: 'Policy', key: 'policy' },
  { label: 'Project delivery', key: 'project' },
  { label: 'Property', key: 'property' },
  { label: 'Security', key: 'security' },
  { label: 'Science and engineering', key: 'science' },
];

export const StrandButtons = () => {
  return (
    <div className="campus-strand-buttons">
      {buttons.map((btn) => (
        <div key={btn.key} className={`campus-strands-button ${btn.key}`}>
          {btn.label}
        </div>
      ))}
    </div>
  );
};
