import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
// import { useGetContactsQuery, useAddContactMutation } from 'Redux/contacts';
import { toast } from 'react-toastify';
import { useSelector, useDispatch } from 'react-redux';
import { getContacts } from 'Redux/contacts/contacts-selector';
import contactsApi from 'Redux/contacts/contacts-API';

function ContactForm() {
  // const { data: contacts } = useGetContactsQuery();
  // const [addContact, { isLoading: addition }] = useAddContactMutation();
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);

  const submitHandler = event => {
    event.preventDefault();

    const form = event.currentTarget;
    const name = form.elements.name.value;
    const number = form.elements.number.value;
    const contact = { name, number };

    const isContactInList =
      contacts &&
      contacts.some(item => item.name.toLowerCase() === name.toLowerCase());

    if (isContactInList) {
      toast.warning(`"${contact.name}" is already in contacts!`);
      return;
    }
    dispatch(contactsApi.addContact(contact));
    form.reset();
  };

  return (
    <Form onSubmit={submitHandler}>
      <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Label>Name</Form.Label>
        <Form.Control
          name="name"
          type="name"
          placeholder="Enter your name"
          required
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPhone">
        <Form.Label>Phone</Form.Label>
        <Form.Control name="number" type="phone" placeholder="Phone" required />
      </Form.Group>

      <Button variant="primary" type="submit">
        Add contact
      </Button>
    </Form>
  );
}

export default ContactForm;
