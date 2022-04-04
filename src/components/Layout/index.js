import { Outlet } from 'react-router-dom';
import { Header } from '../Header';
import { Footer } from '../Footer';

import './layout.scss';

const Layout = () => {
  return (
    <div className="campus-app">
      <Header />
      <div className="campus-main">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
