import axios from 'axios';

export function loginUser(dataToSubmit) {
  const request = Axios.post('/api/users/login', body).then((res) => {
    res.data;
  });
}
