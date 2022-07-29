import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import authApi from 'Redux/auth/auth-API';

const Register = () => {
  const dispatch = useDispatch();

  const handleSubmit = event => {
    event.preventDefault();

    const form = event.currentTarget;
    const { name, email, password } = form.elements;
    const user = {
      name: name.value,
      email: email.value,
      password: password.value,
    };

    dispatch(authApi.register(user));
    form.reset();
  };
  return (
    <div className="formWrapper">
      <Form
        onSubmit={handleSubmit}
        className="d-flex flex-column align-items-center"
      >
        <Form.Group className="mb-3 input" controlId="formBasicName">
          <Form.Label className="text-light">Name</Form.Label>
          <Form.Control type="name" name="name" placeholder="Enter your name" />
        </Form.Group>

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
        <Button variant="primary" type="submit">
          Register
        </Button>
      </Form>

      <NavLink to="/login" className="text-light navLink">
        Already have an account?
      </NavLink>
    </div>
  );
};

export default Register;
