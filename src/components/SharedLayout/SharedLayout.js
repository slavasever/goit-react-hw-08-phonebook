import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
// import s from './SharedLayout.module.css';
import UserMenu from 'components/UserMenu';
import { getIsAuthenticated } from 'Redux/auth/auth-selectors';
import { useSelector } from 'react-redux';
// import AuthNav from 'components/AuthNav';
import Loader from 'components/Loader';

const SharedLayout = () => {
  const isAuthenticated = useSelector(getIsAuthenticated);

  return (
    // <>
    //   <div className="appContainer">
    //     <header className={s.navBar}>
    //       <div></div>
    //       {isAuthenticated ? (
    //         <>
    //           <NavLink to="/contacts" className="navLink">
    //             Contacts
    //           </NavLink>
    //           <UserMenu />
    //         </>
    //       ) : (
    //         <AuthNav />
    //       )}
    //     </header>
    //     <hr />

    //   </div>
    // </>

    <div className="appContainer">
      {isAuthenticated && (
        <>
          {/* <NavLink to="/contacts" className="navLink">
                Contacts
              </NavLink> */}
          <UserMenu />
          <hr />
        </>
        // ) : (
        //   <AuthNav />
      )}

      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default SharedLayout;
