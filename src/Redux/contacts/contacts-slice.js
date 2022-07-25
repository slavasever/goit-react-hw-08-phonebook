import { createSlice } from '@reduxjs/toolkit';
import contactsApi from './contacts-API';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: [],
  extraReducers: {
    [contactsApi.getContacts.fulfilled]: (_, action) => action.payload,

    [contactsApi.addContact.fulfilled]: (state, action) => [
      action.payload,
      ...state,
    ],
    [contactsApi.deleteContact.fulfilled]: (state, action) =>
      state.filter(item => item.id !== action.payload),
  },
});

export default contactsSlice.reducer;
