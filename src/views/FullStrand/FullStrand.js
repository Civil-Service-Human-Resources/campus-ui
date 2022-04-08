import { useParams } from 'react-router-dom';

export const FullStrand = () => {
  const { slug } = useParams();
  console.log(slug);
  return <h1>FullStrand</h1>;
};
