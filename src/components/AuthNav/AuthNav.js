import { NavLink } from 'react-router-dom';

const AuthNav = () => {
  return (
    <div>
      <NavLink to="/register" className="navLink">
        Register
      </NavLink>
      <NavLink to="/login" className="navLink">
        Log in
      </NavLink>
    </div>
  );
};

export default AuthNav;
