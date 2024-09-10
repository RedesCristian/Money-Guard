import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';
import styles from './LoginForm.module.css'; // Importăm fișierul CSS module

function LoginForm({ onSubmit }) {
  const navigate = useNavigate();

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
      onSubmit(values); // Apelează funcția onSubmit pentru autentificare
    },
  });

  const handleRegisterClick = () => {
    navigate('/Money-Guard/register'); // Navighează către pagina de înregistrare
  };

  return (
    <div className={styles.loginContainer}>
      <form className={styles.loginForm} onSubmit={formik.handleSubmit}>
        {/* <h1 className={styles.loginTitle}>Money Guard</h1> */}
        <div className="logo">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="36"
            height="36"
            viewBox="0 0 36 36"
            fill="none"
          >
            <g clip-path="url(#clip0_15_231)">
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M24.6814 4.94514C22.1356 4.30829 19.5899 3.03458 17.6805 1.12402C15.7712 3.03458 13.2254 4.30829 10.6797 4.94514C11.3161 10.6768 13.2254 14.4979 17.6805 17.6822C22.1356 14.4979 24.6814 10.6768 24.6814 4.94514Z"
                fill="#FFC727"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M22.1328 28.6578L4.3125 7.6416V17.8313L18.3142 33.7526L22.1328 28.6578Z"
                fill="#FBFBFB"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M24.041 26.7471L31.6783 17.8311V8.27832L19.5859 22.2891L24.041 26.7471Z"
                fill="#FBFBFB"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M24.6797 29.9314V35.6631L31.6805 27.384V21.6523L24.6797 29.9314Z"
                fill="#FBFBFB"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M11.3133 29.9314L4.3125 21.6523V27.384L11.3133 35.6631V29.9314Z"
                fill="#FBFBFB"
              />
            </g>
            <defs>
              <clipPath id="clip0_15_231">
                <rect
                  width="35.9506"
                  height="35.9739"
                  fill="white"
                  transform="translate(0.0234375)"
                />
              </clipPath>
            </defs>
          </svg>
          <p>Money Guard</p>
        </div>
        <div className={styles.inputGroup}>
          <label className={styles.inputLabel} htmlFor="email">
            E-mail
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className={styles.inputField}
          />
          {formik.touched.email && formik.errors.email ? (
            <div className={styles.error}>{formik.errors.email}</div>
          ) : null}
        </div>

        <div className={styles.inputGroup}>
          <label className={styles.inputLabel} htmlFor="password">
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className={styles.inputField}
          />
          {formik.touched.password && formik.errors.password ? (
            <div className={styles.error}>{formik.errors.password}</div>
          ) : null}
        </div>

        <div className={styles.buttonGroup}>
          <button type="submit" className={styles.loginButton}>
            LOG IN
          </button>
          <button
            type="button"
            onClick={handleRegisterClick}
            className={styles.registerButton}
          >
            REGISTER
          </button>
        </div>
      </form>
    </div>
  );
}

export default LoginForm;
