import classes from './Layout.module.css';

import MainNavigation from '../../components/layout/MainNavigation';

const Layout = ({ children }) => {
  return (
    <div>
      <MainNavigation />
      <main className={classes.main}>{children}</main>
    </div>
  );
};

export default Layout;
