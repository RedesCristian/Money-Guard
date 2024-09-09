import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

function LoginForm({ onSubmit }) {
  const validationSchema = Yup.object({
    email: Yup.string()
      .email('Invalid email format')
      .required('Email is required'),
    password: Yup.string()
      .min(6, 'Password must be at least 6 characters')
      .required('Password is required'),
  });

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: validationSchema,
    onSubmit: values => {
      // Odată ce formularul este trimis cu succes, putem apela `onSubmit` pentru a închide modalul
      onSubmit(values);
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <label>Email</label>
      <input
        type="email"
        name="email"
        value={formik.values.email}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
      />
      {formik.touched.email && formik.errors.email ? (
        <div className="error">{formik.errors.email}</div>
      ) : null}

      <label>Password</label>
      <input
        type="password"
        name="password"
        value={formik.values.password}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
      />
      {formik.touched.password && formik.errors.password ? (
        <div className="error">{formik.errors.password}</div>
      ) : null}

      <button type="submit">LOG IN</button>
    </form>
  );
}

export default LoginForm;
