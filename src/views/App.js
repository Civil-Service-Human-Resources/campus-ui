import { Routes, Route } from 'react-router-dom';

import Layout from '../components/Layout';
import { Home } from './Home/Home';
import { Strands } from './Strands/Strands';

import { DeviceContextProvider } from '../context';

const App = () => {
  return (
    <DeviceContextProvider>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/learning-strands/:slug" element={<Strands />} />
          <Route path="*" element={<div>No Match</div>} />
        </Route>
      </Routes>
    </DeviceContextProvider>
  );
};

export default App;
