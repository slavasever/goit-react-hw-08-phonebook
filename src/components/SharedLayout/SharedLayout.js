import { Outlet, NavLink } from 'react-router-dom';
import s from './SharedLayout.module.css';
import UserMenu from 'components/UserMenu';
import { getIsAuthenticated } from 'Redux/auth/auth-selectors';
import { useSelector } from 'react-redux';
import AuthNav from 'components/AuthNav';

const SharedLayout = () => {
  const isAuthenticated = useSelector(getIsAuthenticated);

  return (
    <>
      <div className="appContainer">
        <div>
          <header className={s.navBar}>
            <NavLink to="/contacts" className="navLink">
              Contacts
            </NavLink>
            {isAuthenticated ? <UserMenu /> : <AuthNav />}
          </header>
        </div>
        <hr />
        <Outlet />
      </div>
    </>
  );
};

export default SharedLayout;
