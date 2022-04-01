import { Hero } from '../../components/Hero';
import { Strands } from '../../components/Strands';
import { getCopy } from '../../copytable';

const homeCopy = getCopy('home');

export const Home = () => {
  return (
    <div className="campus-homepage">
      <Hero copy={homeCopy.hero} />
      <Strands copy={homeCopy.strands} />
    </div>
  );
};
