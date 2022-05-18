import { screen, render } from '../../util/test-utils';
import { StrandList, testId } from './';
import { getCopy } from '../../copytable';

const copy = getCopy('home');

const renderComponent = () => {
  return render(<StrandList copy={copy.strands} />);
};

describe('StrandList Component', () => {
  it('should render component', () => {
    renderComponent();
    expect(screen.getByTestId(testId)).toBeInTheDocument();
  });
});
