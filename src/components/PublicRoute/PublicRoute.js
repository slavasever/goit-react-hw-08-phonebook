import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { getIsAuthenticated } from 'Redux/auth/auth-selectors';
import PropTypes from 'prop-types';

const PublicRoute = ({ children, restricted = false }) => {
  const isAuthenticated = useSelector(getIsAuthenticated);
  const shouldRedirect = isAuthenticated && restricted;

  return shouldRedirect ? <Navigate to="/contacts" replace={true} /> : children;
};

PublicRoute.propTypes = {
  children: PropTypes.node.isRequired,
  restricted: PropTypes.bool,
};

export default PublicRoute;
