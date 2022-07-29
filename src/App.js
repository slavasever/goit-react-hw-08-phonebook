import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useEffect, lazy } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import authApi from 'Redux/auth/auth-API';
import { getIsRefreshingUser } from 'Redux/auth/auth-selectors';
import SharedLayout from 'components/SharedLayout';
import PrivateRoute from 'components/PrivateRoute';
import PublicRoute from 'components/PublicRoute';

const Contacts = lazy(() => import('pages/Contacts'));
const Register = lazy(() => import('pages/Register'));
const LogIn = lazy(() => import('pages/LogIn'));
// const Home = lazy(() => import('pages/Home'));

function App() {
  const isRefreshingUser = useSelector(getIsRefreshingUser);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authApi.refreshUser());
  }, [dispatch]);

  return (
    <>
      <Routes>
        {!isRefreshingUser && (
          <Route path="/" element={<SharedLayout />}>
            {/* <Route
              index
              element={
                <PublicRoute>
                  <Home />
                </PublicRoute>
              }
            /> */}
            <Route
              path="register"
              element={
                <PublicRoute restricted>
                  <Register />
                </PublicRoute>
              }
            />
            <Route
              path="login"
              element={
                <PublicRoute restricted>
                  <LogIn />
                </PublicRoute>
              }
            />
            <Route
              path="contacts"
              element={
                <PrivateRoute>
                  <Contacts />
                </PrivateRoute>
              }
            />
          </Route>
        )}
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
      <ToastContainer autoClose={3000} theme={'colored'} />
    </>
  );
}

export default App;
