import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useGetContactsQuery, useAddContactMutation } from 'Redux/API';
import { toast } from 'react-toastify';

function ContactForm() {
  const { data: contacts } = useGetContactsQuery();
  const [addContact, { isLoading: addition }] = useAddContactMutation();

  const submitHandler = event => {
    event.preventDefault();

    const form = event.currentTarget;
    const name = form.elements.name.value;
    const phone = form.elements.number.value;
    const contact = { name, phone };

    const isContactInList =
      contacts &&
      contacts.some(item => item.name.toLowerCase() === name.toLowerCase());

    if (isContactInList) {
      toast.warning(`"${contact.name}" is already in contacts!`);
      return;
    }
    addContact(contact);
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
        {addition ? 'Addition...' : 'Add contact'}
      </Button>
    </Form>
  );
}

export default ContactForm;
