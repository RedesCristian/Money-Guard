import React, { useState } from 'react';
import LoginForm from '../components/LoginForm/LoginForm.jsx'; // Importăm componenta LoginForm
import Notiflix from 'notiflix';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { ClipLoader } from 'react-spinners'; // Importăm spinner-ul

function LoginPage() {
  const [isLoading, setIsLoading] = useState(false); // Starea pentru spinner
  const navigate = useNavigate();

  const handleLoginSubmit = async values => {
    setIsLoading(true); // Pornim spinner-ul când începe cererea
    try {
      // Facem cererea POST pentru autentificare
      const response = await axios.post(
        'https://wallet.b.goit.study/api/auth/sign-in',
        {
          email: values.email,
          password: values.password,
        }
      );

      const { token, user } = response.data; // Extragem token-ul și datele utilizatorului
      console.log('Logged in user:', user);

      // Salvăm token-ul în localStorage pentru autentificări viitoare
      localStorage.setItem('token', token);

      // Notificare de succes
      Notiflix.Notify.success('Login successful! Redirecting to dashboard...');

      // Oprim spinner-ul
      setIsLoading(false);

      // Redirecționare către dashboard
      navigate('/Money-Guard/dashboard/home');
    } catch (error) {
      // Oprim spinner-ul în caz de eroare
      setIsLoading(false);

      // Gestionarea erorilor
      if (error.response && error.response.status === 400) {
        Notiflix.Notify.failure(
          'Validation error. Please check your credentials.'
        );
      } else if (error.response && error.response.status === 403) {
        Notiflix.Notify.failure('Incorrect password.');
      } else if (error.response && error.response.status === 404) {
        Notiflix.Notify.failure('User not found.');
      } else {
        Notiflix.Notify.failure(
          'Something went wrong. Please try again later.'
        );
      }
    }
  };

  return (
    <div>
      {isLoading ? (
        // Afișăm spinner-ul dacă este în proces de autentificare
        <div
        // style={{
        //   display: 'flex',
        //   justifyContent: 'center',
        //   alignItems: 'center',
        //   height: '100px',
        // }}
        >
          <ClipLoader color={'#123abc'} loading={isLoading} size={50} />
        </div>
      ) : (
        // Componenta LoginForm când nu se încarcă
        <LoginForm onSubmit={handleLoginSubmit} />
      )}
    </div>
  );
}

export default LoginPage;
