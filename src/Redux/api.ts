import axios from 'axios';

const getUser = async () => {
  const response = await axios.get(
    `https://create.blinkapi.io/api/eSphKNzwb9EJBt6GBjKx7Q`,
  );
  return response;
};

export {getUser};
