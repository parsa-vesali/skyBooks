// LoginForm.jsx
import React, { useContext } from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../Context/AuthContext';
import { IoBookOutline } from 'react-icons/io5';
import { Link } from 'react-router-dom';

const LoginForm = () => {
  const navigate = useNavigate();
  const { login } = useContext(AuthContext);

  return (
    <div className='flex flex-col items-center justify-center min-h-full px-6 py-12 lg:px-8'>
      <Link to={'/'} className='flex items-center gap-x-2 font-Dana-Bold text-lg'>
        <span className='w-10 h-10 bg-rose-600 flex items-center justify-center rounded-lg'>
          <IoBookOutline className='text-white' />
        </span>
        اسکای بوک
      </Link>
      <h2 className='mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900'>ورود به حساب کاربری</h2>

      <div className='mt-10 w-full max-w-md'>
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
            <Form className='space-y-6'>
              <div>
                <label htmlFor="phone" className='block text-sm font-medium leading-6 text-gray-900'>
                  شماره تلفن
                </label>
                <Field
                  id="phone"
                  name="phone"
                  type="text"
                  className='block w-full px-4 py-3 mt-2 text-gray-900 placeholder-gray-400 border rounded-md shadow-sm focus:ring-rose-600 focus:border-rose-600 focus:outline-none sm:text-lg'
                />
                <ErrorMessage name="phone" component="div" className='text-red-600 text-sm' />
              </div>
              <div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className='w-full px-4 py-3 mt-4 text-base font-medium text-white bg-rose-600 border border-transparent rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-rose-500 hover:bg-rose-700 focus:ring-offset-gray-100'
                >
                  ورود
                </button>
              </div>
            </Form>
          )}
        </Formik>
        <div className='flex items-center justify-center mt-5'>
          <span>
            حساب کاربری ندارید؟ <Link to={'/register'} className='text-sky-500'>ثبت‌نام کنید</Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
