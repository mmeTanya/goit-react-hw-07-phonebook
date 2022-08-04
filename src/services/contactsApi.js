import axios from 'axios';

axios.defaults.baseURL = 'https://62ebdaab55d2bd170e77d089.mockapi.io';

export const getContacts = () => {
  return axios.get('/contacts').then(({ data }) => data);
};

export const addContacts = ({name, number}) => {
  return axios.post('/contacts', {name, number}).then(({ data }) => data);
};

export const deleteContacts = contactId => {
  return axios.delete(`/contacts/${contactId}`);
};
