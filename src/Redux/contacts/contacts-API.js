import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

// axios.defaults.baseURL = 'https://connections-api.herokuapp.com/';
// axios працює як єдиний об'єкт, якщо в одному місці вказаний baseURL, то він підтягується і в інших місцях. Аналогічно з token

const getContacts = createAsyncThunk('contacts/getContacts', async () => {
  try {
    const { data } = await axios('contacts');
    console.log(data);
    return data;
  } catch (error) {
    toast.error(error.message);
  }
});

const addContact = createAsyncThunk('contacts/addContact', async contact => {
  try {
    const { data } = await axios.post('contacts', contact);
    return data;
  } catch (error) {
    toast.error(error.message);
  }
});

const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async contactId => {
    try {
      await axios.delete(`contacts/${contactId}`);
      const { data } = await axios('contacts');
      return data;
    } catch (error) {
      toast.error(error.message);
    }
  }
);

const contactsApi = {
  getContacts,
  addContact,
  deleteContact,
};

export default contactsApi;
