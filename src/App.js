import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Routes, Route } from 'react-router-dom';
import SharedLayout from 'components/SharedLayout';
import Contacts from 'pages/Contacts';
import Register from 'pages/Register';
import Login from 'pages/Login';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route path="register" element={<Register />}></Route>
          <Route path="login" element={<Login />}></Route>
          <Route path="contacts" element={<Contacts />}></Route>
        </Route>
      </Routes>
      <ToastContainer autoClose={3000} theme={'colored'} />
    </>
  );
}

export default App;
