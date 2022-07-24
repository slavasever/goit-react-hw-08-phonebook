import { useSelector, useDispatch } from 'react-redux';
import { getUserName } from 'Redux/auth/auth-selectors';
import { Button } from 'react-bootstrap';
import s from './UserMenu.module.css';
import authApi from 'Redux/auth/auth-API';

const UserMenu = () => {
  const name = useSelector(getUserName);
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(authApi.logOut());
  };

  return (
    <div className={s.menu}>
      <span className={s.welcome}>
        Welcome, <span className={s.name}>{name}</span>
      </span>
      <Button type="button" onClick={handleClick}>
        Log out
      </Button>
    </div>
  );
};

export default UserMenu;
