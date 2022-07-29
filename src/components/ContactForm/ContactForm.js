import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { toast } from 'react-toastify';
import { useSelector, useDispatch } from 'react-redux';
import { getContacts } from 'Redux/contacts/contacts-selector';
import contactsApi from 'Redux/contacts/contacts-API';
import s from './ContactForm.module.css';

function ContactForm() {
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
      toast.warning(`"${name}" is already in contacts!`);
      return;
    }
    dispatch(contactsApi.addContact(contact));
    form.reset();
  };

  return (
    <Form onSubmit={submitHandler} className={s.form}>
      <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Label className="text-light">Name</Form.Label>
        <Form.Control
          name="name"
          type="name"
          placeholder="Enter your name"
          required
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPhone">
        <Form.Label className="text-light">Phone</Form.Label>
        <Form.Control name="number" type="phone" placeholder="Phone" required />
      </Form.Group>

      <Button variant="primary" type="submit">
        Add contact
      </Button>
      <hr />
    </Form>
  );
}

export default ContactForm;
