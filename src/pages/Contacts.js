import ContactForm from 'components/ContactForm';
import ContactsList from 'components/ContactsList';
import Filter from 'components/Filter';

const Contacts = () => {
  return (
    <>
      <ContactForm />
      <Filter />
      <ContactsList />
    </>
  );
};

export default Contacts;
