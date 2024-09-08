import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://wallet.b.goit.study',
  headers: {
    'Content-Type': 'application/json',
  },
});

export const registerUser = async userData => {
  try {
    const response = await instance.post('/api/auth/sign-up', userData);
    return response.data;
  } catch (error) {
    // Gestionăm eroarea și aruncăm un mesaj de eroare
    if (error.response && error.response.data) {
      const errorData = error.response.data;
      let errorMessage = 'Registration failed';

      if (Array.isArray(errorData.message)) {
        errorMessage = errorData.message.join(', ');
      } else if (typeof errorData.message === 'string') {
        errorMessage = errorData.message;
      } else {
        errorMessage = 'Registration failed';
      }

      throw new Error(errorMessage);
    }
    throw new Error('Registration failed');
  }
};
