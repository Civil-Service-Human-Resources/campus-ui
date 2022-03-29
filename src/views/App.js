import { Routes, Route } from 'react-router-dom';

import Layout from '../components/Layout';
import { Home } from './Home/Home';

const App = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Layout>
  );
};

export default App;
