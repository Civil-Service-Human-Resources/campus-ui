import { render, screen } from '../../util/test-utils';
import { Hero, testId } from './';
import { getCopy } from '../../copytable';

const copy = getCopy('home');

const renderComponent = () => {
  return render(<Hero copy={copy.hero} />);
};

describe('Hero', () => {
  it('should render component', () => {
    renderComponent();
    expect(screen.getByTestId(testId)).toBeInTheDocument();
  });
});
