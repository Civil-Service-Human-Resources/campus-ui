import { Routes, Route } from 'react-router-dom';

import Layout from '../components/Layout';
import { Home } from './Home/Home';
import { Strands } from './Strands/Strands';
import { StrandDetails } from './StrandDetails/StrandDetails';
import { CourseDetails } from './CourseDetails/CourseDetails';
import { SearchResult } from './SearchResult/SearchResult';
import { About } from './About/About';
import { Accessibility } from './Accessibility/Accessibility';

import { AppContextProvider, DeviceContextProvider } from '../context';

const App = () => {
  return (
    <AppContextProvider>
      <DeviceContextProvider>
        <Routes>
          <Route element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/learning-strands/:slug" element={<Strands />} />
            <Route
              path="/strand/:slug/category/:catRef"
              element={<StrandDetails />}
            />
            <Route
              path="/strand/:slug/course/:courseId"
              element={<CourseDetails />}
            />
            <Route path="/search/:slug" element={<SearchResult />} />
            <Route path="/about" element={<About />} />
            <Route
              path="/accessibility-statement"
              element={<Accessibility />}
            />
            <Route path="*" element={<div>No Match</div>} />
          </Route>
        </Routes>
      </DeviceContextProvider>
    </AppContextProvider>
  );
};

export default App;
