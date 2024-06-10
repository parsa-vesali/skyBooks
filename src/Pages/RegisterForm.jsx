// RegisterForm.jsx
import React, { useContext } from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../Context/AuthContext';

const RegisterForm = () => {
  const navigate = useNavigate();
  const { login } = useContext(AuthContext);

  return (
    <Formik
      initialValues={{
        email: '',
        password: '',
        confirmPassword: '',
        name: '',
        username: '',
        phone: '',
      }}
      validationSchema={Yup.object({
        email: Yup.string()
          .email('آدرس ایمیل نامعتبر است')
          .required('ایمیل الزامی است'),
        password: Yup.string()
          .min(8, 'رمز عبور باید حداقل ۸ کاراکتر باشد')
          .required('رمز عبور الزامی است'),
        confirmPassword: Yup.string()
          .oneOf([Yup.ref('password'), null], 'رمز عبور با تأییدیه مطابقت ندارد')
          .required('تأییدیه رمز عبور الزامی است'),
        name: Yup.string().required('نام الزامی است'),
        username: Yup.string().required('نام کاربری الزامی است'),
        phone: Yup.string()
          .matches(/^[0-9]{10}$/, 'شماره تلفن نامعتبر است')
          .required('شماره تلفن الزامی است'),
      })}
      onSubmit={(values, { setSubmitting }) => {
        axios.post('https://shop-apis.liara.run/auth/register', values)
          .then(response => {
            const authToken = response.data.token; // فرض بر این است که توکن از پاسخ دریافت می‌شود
            localStorage.setItem('authToken', authToken);
            localStorage.setItem('user', JSON.stringify({ name: values.name, phone: values.phone }));
            login({ name: values.name, phone: values.phone }); 
            Swal.fire({
              title: 'ثبت‌نام موفقیت‌آمیز بود!',
              text: 'حساب شما با موفقیت ایجاد شد.',
              icon: 'success',
              confirmButtonText: 'باشه',
              didClose: () => navigate('/') 
            });
          })
          .catch(error => {
            Swal.fire({
              title: 'خطا در ثبت‌نام',
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
            <label htmlFor="email">ایمیل</label>
            <Field name="email" type="email" />
            <ErrorMessage name="email" component="div" />
          </div>
          <div>
            <label htmlFor="password">رمز عبور</label>
            <Field name="password" type="password" />
            <ErrorMessage name="password" component="div" />
          </div>
          <div>
            <label htmlFor="confirmPassword">تأییدیه رمز عبور</label>
            <Field name="confirmPassword" type="password" />
            <ErrorMessage name="confirmPassword" component="div" />
          </div>
          <div>
            <label htmlFor="name">نام</label>
            <Field name="name" type="text" />
            <ErrorMessage name="name" component="div" />
          </div>
          <div>
            <label htmlFor="username">نام کاربری</label>
            <Field name="username" type="text" />
            <ErrorMessage name="username" component="div" />
          </div>
          <div>
            <label htmlFor="phone">شماره تلفن</label>
            <Field name="phone" type="text" />
            <ErrorMessage name="phone" component="div" />
          </div>
          <button type="submit" disabled={isSubmitting}>ثبت‌نام</button>
        </Form>
      )}
    </Formik>
  );
};

export default RegisterForm;
