import { Routes, Route } from 'react-router-dom';

import Layout from '../components/Layout';

import { AppContextProvider, DeviceContextProvider } from '../context';
import { NoLongerAvailableSplash } from './NoLongerAvailableSplash/NoLongerAvailableSplash';

const App = () => {
  return (
    <AppContextProvider>
      <DeviceContextProvider>
        <Routes>
          <Route element={<Layout />}>
            <Route path='*' element={<NoLongerAvailableSplash />} />
          </Route>
        </Routes>
      </DeviceContextProvider>
    </AppContextProvider>
  );
};

export default App;
