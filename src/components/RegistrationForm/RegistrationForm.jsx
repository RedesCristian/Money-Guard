import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Notiflix from 'notiflix';
import { registerUser } from 'axiosFunction';
import { setToken, setUser } from '../../redux/authSlice';

const RegistrationForm = ({ password, onPasswordChange }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const validationSchema = Yup.object().shape({
    username: Yup.string().required('Numele de utilizator este obligatoriu'),
    email: Yup.string()
      .email('Email invalid')
      .required('Emailul este obligatoriu'),
    password: Yup.string()
      .min(6, 'Parola trebuie să conțină cel puțin 6 caractere')
      .required('Parola este obligatorie'),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password'), null], 'Parolele nu corespund')
      .required('Confirmarea parolei este obligatorie'),
  });

  const handleRegister = async (values, { setSubmitting }) => {
    try {
      const userData = {
        username: values.username,
        email: values.email,
        password: values.password,
      };

      const data = await registerUser(userData);

      dispatch(setToken(data.token));
      dispatch(setUser(data.user));

      Notiflix.Notify.success('Utilizatorul a fost înregistrat cu succes!');
      navigate('/Money-Guard/dashboard/home');
    } catch (error) {
      Notiflix.Notify.failure(error.message);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Formik
      initialValues={{
        username: '',
        email: '',
        password: '',
        confirmPassword: '',
      }}
      validationSchema={validationSchema}
      onSubmit={handleRegister}
    >
      {({ values, handleChange, isSubmitting }) => (
        <Form>
          <div>
            <label htmlFor="username">Nume de utilizator</label>
            <Field
              type="text"
              name="username"
              placeholder="Introduceți numele de utilizator"
            />
            <ErrorMessage
              name="username"
              component="div"
              style={{ color: 'red' }}
            />
          </div>

          <div>
            <label htmlFor="email">Email</label>
            <Field
              type="email"
              name="email"
              placeholder="Introduceți emailul"
            />
            <ErrorMessage
              name="email"
              component="div"
              style={{ color: 'red' }}
            />
          </div>

          <div>
            <label htmlFor="password">Parolă</label>
            <Field
              type="password"
              name="password"
              placeholder="Setați parola"
              onChange={e => {
                handleChange(e);
                onPasswordChange(e.target.value); // Actualizează parola în părintele
              }}
            />
            <ErrorMessage
              name="password"
              component="div"
              style={{ color: 'red' }}
            />
          </div>

          <div>
            <label htmlFor="confirmPassword">Confirmare Parolă</label>
            <Field
              type="password"
              name="confirmPassword"
              placeholder="Confirmați parola"
            />
            <ErrorMessage
              name="confirmPassword"
              component="div"
              style={{ color: 'red' }}
            />
          </div>

          <button type="submit" disabled={isSubmitting}>
            {isSubmitting ? 'Se înregistrează...' : 'Înregistrează-te'}
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default RegistrationForm;
