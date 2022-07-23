import { Outlet, NavLink } from 'react-router-dom';
import s from './SharedLayout.module.css';

const SharedLayout = () => {
  return (
    <>
      <div className="appContainer">
        <div>
          <nav className={s.navBar}>
            <NavLink to="/register" className="navLink">
              Register
            </NavLink>
            <NavLink to="/login" className="navLink">
              Log in
            </NavLink>
            <NavLink to="/contacts" className="navLink">
              Contacts
            </NavLink>
          </nav>
        </div>
        <hr />
        <Outlet />
      </div>
    </>
  );
};

export default SharedLayout;
