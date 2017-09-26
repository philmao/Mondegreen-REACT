import axios from 'axios';

export default {
  getQuestions() {
    return axios.get('/api/questions/all');
  },
  getOneQuestion: (id) => {
    console.log(`API  id=${id}`);

    return axios.get(`/api/questions/${id}`);
  },
};
