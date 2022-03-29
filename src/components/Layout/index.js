import Header from '../Header';

import './layout.scss';

const Layout = ({ children }) => {
  return (
    <div className="campus-app">
      <Header />
      <div className="campus-main">{children}</div>
      <div className="campus-footer">I am footer</div>
    </div>
  );
};

export default Layout;
