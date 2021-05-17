import axios from 'axios';

const api = axios.create({ baseURL: 'https://swapi.dev/api/' });

const fetchPeople = async (page: number) => {
  try {
    return await api.get(`people/?page=${page}`);
  } catch (error) {
    if (error.response) {
      return error.response;
    }

    return error;
  }
};

export { fetchPeople, api };
