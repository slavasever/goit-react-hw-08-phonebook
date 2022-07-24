import { useSelector, useDispatch } from 'react-redux';
// import { useGetContactsQuery } from 'Redux/contacts';
import { getContacts } from 'Redux/contacts/contacts-selector';
import { useEffect } from 'react';
import contactsApi from 'Redux/contacts/contacts-API';
import ContactItem from 'components/ContactItem';
import Loader from 'components/Loader';

const ContactList = () => {
  // const { data: contacts, isFetching } = useGetContactsQuery();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(contactsApi.getContacts());
  }, [dispatch]);

  const contacts = useSelector(getContacts);
  const filter = useSelector(state => state.filter);

  const contactsFiltration = () => {
    const normalizedFilter = filter.toLowerCase();

    return (
      contacts &&
      contacts.filter(contact =>
        contact.name.toLowerCase().includes(normalizedFilter)
      )
    );
  };

  return (
    <>
      {contacts && (
        <ul>
          {contactsFiltration().map(contact => {
            const { id, name, number } = contact;

            return <ContactItem key={id} id={id} name={name} number={number} />;
          })}
        </ul>
      )}
      {/* {isFetching && <Loader />} */}
    </>
  );
};

export default ContactList;
