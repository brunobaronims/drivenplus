import axios from 'axios';

async function useFetch({
  url,
  data,
  needsAuth,
  type
}) {
  switch (type) {
    case 'post':
      switch (needsAuth) {
        case false:
          try {
            const response = await axios.post(url, data);
            localStorage.setItem('drivenplus-cache',
              JSON.stringify(response.data));
            return console.log(response.data);
          } catch (e) {
            return console.error(e);
          }
        default:
          return;
      }
    default:
      return;
  }
}

export default useFetch;