import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import authApi from 'Redux/auth/auth-API';
import SharedLayout from 'components/SharedLayout';
import Contacts from 'pages/Contacts';
import Register from 'pages/Register';
// import LogIn from 'pages/LogIn';
import TEST from 'pages/testPage';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authApi.refreshUser());
  }, [dispatch]);

  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route path="register" element={<Register />}></Route>
          <Route path="login" element={<TEST />}></Route>
          <Route path="contacts" element={<Contacts />}></Route>
        </Route>
      </Routes>
      <ToastContainer autoClose={3000} theme={'colored'} />
    </>
  );
}

export default App;
