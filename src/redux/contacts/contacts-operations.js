import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://62ebdaab55d2bd170e77d089.mockapi.io';


export const fetchContacts = createAsyncThunk(
  'Contacts/fetchContacts',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get('/contacts');
      return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);

export const addContact = createAsyncThunk(
  'Contacts/addContact',
  async ({name, number}, { rejectWithValue }) => {
    try {
      const response = await axios.post('/contacts', {name, number});
      return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);

export const deleteContact = createAsyncThunk(
  'Contacts/deleteContact',
  async (contactId, { rejectWithValue }) => {
    try {
      const response = await axios.delete(`/contacts/${contactId}`);
      return response.data.id;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);





/* import {
  fetchContactsRequest,
  fetchContactsSuccess,
  fetchContactsRejected,
  addContactRequest,
  addContactSuccess,
  addContactRejected,
  deleteContactRequest,
  deleteContactSuccess,
  deleteContactRejected,
} from './contacts-actions';
import {
  getContacts,
  addContacts,
  deleteContacts,
} from 'services/contactsApi';


export const fetchContacts = () => async dispatch => {
  dispatch(fetchContactsRequest());
  try {
   const contacts = await getContacts();
    dispatch(fetchContactsSuccess(contacts));
  } catch (error) {
    dispatch(fetchContactsRejected(error));
  }
};

export const addContact = (name, number) => async dispatch => {
  dispatch(addContactRequest());
  try {
    const contacts = await addContacts({name, number});
    dispatch(addContactSuccess(contacts));
  } catch (error) {
    dispatch(addContactRejected(error));
  }
};


export const deleteContact = contactId => async dispatch => {
  dispatch(deleteContactRequest());
  try {
    await deleteContacts(contactId);
    dispatch(deleteContactSuccess(contactId));
  } catch (error) {
    dispatch(deleteContactRejected(error));
  }
};
 */