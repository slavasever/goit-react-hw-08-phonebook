import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import contactsApi from 'Redux/contacts/contacts-API';
import s from './ContactItem.module.css';

const ContactItem = ({ id, name, number }) => {
  const dispatch = useDispatch();

  return (
    <li className={s.item}>
      <p className={s.text}>
        - {name}: {number}
      </p>
      <button
        type="button"
        className={s.button}
        onClick={() => dispatch(contactsApi.deleteContact(id))}
      >
        Delete
      </button>
    </li>
  );
};

ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};

export default ContactItem;
