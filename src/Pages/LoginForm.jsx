// LoginForm.jsx
import React, { useContext } from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../Context/AuthContext';

const LoginForm = () => {
  const navigate = useNavigate();
  const { login } = useContext(AuthContext);

  return (
    <Formik
      initialValues={{ phone: '' }}
      validationSchema={Yup.object({
        phone: Yup.string()
          .matches(/^[0-9]{10}$/, 'شماره تلفن نامعتبر است')
          .required('شماره تلفن الزامی است'),
      })}
      onSubmit={(values, { setSubmitting }) => {
        axios.post('https://shop-apis.liara.run/auth/login', { phone: values.phone })
          .then(response => {
            const { token, user } = response.data; // فرض بر این است که پاسخ شامل توکن و اطلاعات کاربر است
            localStorage.setItem('authToken', token);
            localStorage.setItem('user', JSON.stringify(user));
            login(user);
            Swal.fire({
              title: 'ورود موفقیت‌آمیز بود!',
              text: 'شما با موفقیت وارد حساب خود شدید.',
              icon: 'success',
              confirmButtonText: 'باشه',
              didClose: () => navigate('/')
            });
          })
          .catch(error => {
            Swal.fire({
              title: 'خطا در ورود',
              text: 'لطفاً دوباره تلاش کنید.',
              icon: 'error',
              confirmButtonText: 'باشه'
            });
            if (error.response && error.response.data) {
              console.log(error.response.data);
            } else {
              console.log(error.message);
            }
          })
          .finally(() => {
            setSubmitting(false);
          });
      }}
    >
      {({ isSubmitting }) => (
        <Form>
          <div>
            <label htmlFor="phone">شماره تلفن</label>
            <Field name="phone" type="text" />
            <ErrorMessage name="phone" component="div" />
          </div>
          <button type="submit" disabled={isSubmitting}>ورود</button>
        </Form>
      )}
    </Formik>
  );
};

export default LoginForm;
