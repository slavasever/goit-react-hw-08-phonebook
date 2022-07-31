import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import authApi from 'Redux/auth/auth-API';

const LogIn = () => {
  const dispatch = useDispatch();

  const handleSubmit = event => {
    event.preventDefault();

    const form = event.currentTarget;
    const { email, password } = form.elements;
    const user = {
      email: email.value,
      password: password.value,
    };

    dispatch(authApi.logIn(user));
  };
  return (
    <div className="formWrapper">
      <h1 className="header">Phonebook</h1>
      <p className="text">Please, log in or create a new account to start</p>
      <Form
        onSubmit={handleSubmit}
        className="d-flex flex-column align-items-center form"
      >
        <Form.Group className="mb-3 input" controlId="formBasicEmail">
          <Form.Label className="text-light">Email address</Form.Label>
          <Form.Control type="email" name="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group className="mb-3 input" controlId="formBasicPassword">
          <Form.Label className="text-light">Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            placeholder="Password"
          />
        </Form.Group>
        <div>
          <Button variant="primary" type="submit">
            Log In
          </Button>
        </div>
      </Form>

      <NavLink to="/register" className="text-light navLink">
        Create new account
      </NavLink>
    </div>
  );
};

export default LogIn;
