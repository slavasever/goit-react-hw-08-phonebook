import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import UserMenu from 'components/UserMenu';
import { getIsAuthenticated } from 'Redux/auth/auth-selectors';
import { useSelector } from 'react-redux';
import Loader from 'components/Loader';

const SharedLayout = () => {
  const isAuthenticated = useSelector(getIsAuthenticated);

  return (
    <div className="appContainer">
      {isAuthenticated && (
        <>
          <UserMenu />
          <hr />
        </>
      )}
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default SharedLayout;
