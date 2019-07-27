import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:8080';

const getAllEvents = async () => {
  try {
    const response = await axios.get('/events');
    return response.data;
  } catch (error) {
    return console.log(error);
  }
};

const getEventById = async id => {
  try {
    const response = await axios.get(`/events/${id}`);
    return response.data;
  } catch (error) {
    return console.log(error);
  }
};

const deleteEventById = async id => {
  try {
    const response = await axios.delete(`/events/${id}`);
    return response;
  } catch (error) {
    return console.log(error);
  }
};

const addEvent = async data => {
  try {
    const response = await axios.post('/events', { ...data });
    return response;
  } catch (error) {
    return console.log(error);
  }
};

export default { getAllEvents, getEventById, deleteEventById, addEvent };
