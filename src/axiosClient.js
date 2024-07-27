import axios from 'axios';

// Create a new instance of axios with a custom config
const axiosClient = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL, 
  // Base URL for all requests made using this instance

});

console.log(import.meta.env)

export default axiosClient;


// // Use the new instance to make a GET request
// apiClient.get('/endpoint')
//   .then(response => {VITE_API_BASE_URL
//     console.log(response.data);
//   })
//   .catch(error => {
//     console.error('There was an error!', error);
//   });

// // Use the new instance to make a POST request
// apiClient.post('/endpoint', {
//     data: 'your data'
//   })
//   .then(response => {
//     console.log(response.data);
//   })
//   .catch(error => {
//     console.error('There was an error!', error);
//   });
