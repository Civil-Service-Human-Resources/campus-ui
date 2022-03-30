import { Header } from '../Header';
import { Footer } from '../Footer';

import './layout.scss';

const Layout = ({ children }) => {
  return (
    <div className="campus-app">
      <Header />
      <div className="campus-main">{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
