import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import {
  setEmail,
  setPassword,
  setConfirmPassword,
  setError,
  clearForm,
} from '../../redux/registrationFormSlice';

function RegistrationForm({ onPasswordChange }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email('Email invalid!')
      .required('Email este obligatoriu!'),
    password: Yup.string()
      .min(6, 'Parola trebuie să conțină cel puțin 6 caractere!')
      .required('Parola este obligatorie!'),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password'), null], 'Parolele nu corespund!')
      .required('Confirmarea parolei este obligatorie!'),
  });

  const handleRegister = values => {
    const { email, password, confirmPassword } = values;

    if (password !== confirmPassword) {
      dispatch(setError('Parolele nu corespund!'));
      return;
    }

    // Actualizează datele în Redux
    dispatch(setEmail(email));
    dispatch(setPassword(password));
    dispatch(setConfirmPassword(confirmPassword));
    dispatch(clearForm());

    // Redirecționează la pagina de login
    navigate('/login');
  };

  useEffect(() => {
    // Transmite parola la componenta părinte atunci când se schimbă
    onPasswordChange('');
  }, [onPasswordChange]); // Include onPasswordChange în lista de dependențe

  return (
    <Formik
      initialValues={{ email: '', password: '', confirmPassword: '' }}
      validationSchema={validationSchema}
      onSubmit={handleRegister}
    >
      {({ values, handleChange, isSubmitting }) => (
        <Form>
          <div>
            <label htmlFor="email">Email</label>
            <Field type="email" name="email" placeholder="Enter your email" />
            <ErrorMessage
              name="email"
              component="div"
              style={{ color: 'red' }}
            />
          </div>

          <div>
            <label htmlFor="password">Password</label>
            <Field
              type="password"
              name="password"
              placeholder="Set your password"
              onChange={e => {
                handleChange(e); // Permite actualizarea stării de către Formik
                onPasswordChange(e.target.value); // Transmite parola la componenta părinte
              }}
            />
            <ErrorMessage
              name="password"
              component="div"
              style={{ color: 'red' }}
            />
          </div>

          <div>
            <label htmlFor="confirmPassword">Confirm Password</label>
            <Field
              type="password"
              name="confirmPassword"
              placeholder="Confirm your password"
            />
            <ErrorMessage
              name="confirmPassword"
              component="div"
              style={{ color: 'red' }}
            />
          </div>

          <button type="submit" disabled={isSubmitting}>
            REGISTER
          </button>
          <button type="button" onClick={() => navigate('/login')}>
            LOG IN
          </button>
        </Form>
      )}
    </Formik>
  );
}

export default RegistrationForm;
