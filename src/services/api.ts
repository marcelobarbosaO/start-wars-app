import axios from 'axios';

const api = axios.create({ baseURL: 'http https://swapi.dev/api/' });

const fetchPeople = async () => {
  try {
    return await api.get('people');
  } catch (error) {
    if (error.response) {
      return error.response;
    }

    return error;
  }
};

const fetchPerson = async (personId: string) => {
  try {
    return await api.get(`people/${personId}`);
  } catch (error) {
    if (error.response) {
      return error.response;
    }

    return error;
  }
};

export { fetchPeople, fetchPerson };
