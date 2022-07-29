import { useSelector, useDispatch } from 'react-redux';
import { getContacts } from 'Redux/contacts/contacts-selector';
import { useEffect } from 'react';
import contactsApi from 'Redux/contacts/contacts-API';
import ContactItem from 'components/ContactItem';

const ContactList = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(contactsApi.getContacts());
  }, [dispatch]);

  const contacts = useSelector(getContacts);
  const filter = useSelector(state => state.filter);

  const contactsFiltration = () => {
    const normalizedFilter = filter.toLowerCase().trim();

    return (
      contacts &&
      contacts.filter(contact =>
        contact.name.toLowerCase().includes(normalizedFilter)
      )
    );
  };

  return (
    <>
      {contacts &&
        (contactsFiltration().length !== 0 ? (
          <ul className="pl-0">
            {contactsFiltration().map(contact => {
              const { id, name, number } = contact;

              return (
                <ContactItem key={id} id={id} name={name} number={number} />
              );
            })}
          </ul>
        ) : (
          <div>No contacts found...</div>
        ))}
    </>
  );
};

export default ContactList;
