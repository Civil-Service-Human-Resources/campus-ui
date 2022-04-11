import { Hero } from '../../components/Hero';
import { StrandList } from '../../components/StrandList';
import { getCopy } from '../../copytable';

const homeCopy = getCopy('home');

export const Home = () => {
  return (
    <div className="campus-homepage">
      <Hero copy={homeCopy.hero} />
      <StrandList copy={homeCopy.strands} />
    </div>
  );
};
