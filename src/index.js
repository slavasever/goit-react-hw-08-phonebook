import React from 'react';
import ReactDOM from 'react-dom/client';
import App from 'App';
import 'index.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
import { store } from 'Redux/store';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter basename="/goit-react-hw-08-phonebook/">
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
