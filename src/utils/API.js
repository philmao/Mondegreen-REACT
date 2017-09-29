import axios from 'axios';

export default {
  getQuestions() {
    return axios.get('/api/questions/all');
  },
  getOneQuestion: id => axios.get(`/api/questions/${id}`),
};
