import React, { useContext } from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../Context/AuthContext';
import { IoBookOutline } from 'react-icons/io5';
import { Link } from 'react-router-dom';

export default function RegisterForm() {
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
      <h2 className='mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900'>به وبسایت ما خوش آمدید</h2>

      <div className='mt-10 sm:max-w-sm'>
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
            email: Yup.string().email('آدرس ایمیل نامعتبر است').required('ایمیل الزامی است'),
            password: Yup.string().min(8, 'رمز عبور باید حداقل ۸ کاراکتر باشد').required('رمز عبور الزامی است'),
            confirmPassword: Yup.string()
              .oneOf([Yup.ref('password'), null], 'رمز عبور با تأییدیه مطابقت ندارد')
              .required('تأییدیه رمز عبور الزامی است'),
            name: Yup.string().required('نام الزامی است'),
            username: Yup.string().required('نام کاربری الزامی است'),
            phone: Yup.string().matches(/^[0-9]{10}$/, 'شماره تلفن نامعتبر است').required('شماره تلفن الزامی است'),
          })}
          onSubmit={(values, { setSubmitting }) => {
            axios
              .post('https://shop-apis.liara.run/auth/register', values)
              .then((response) => {
                const authToken = response.data.token;
                localStorage.setItem('authToken', authToken);
                localStorage.setItem('user', JSON.stringify({ name: values.name, phone: values.phone }));
                login({ name: values.name, phone: values.phone });
                Swal.fire({
                  title: 'ثبت‌نام موفقیت‌آمیز بود!',
                  text: 'حساب شما با موفقیت ایجاد شد.',
                  icon: 'success',
                  confirmButtonText: 'باشه',
                  didClose: () => navigate('/'),
                });
              })
              .catch((error) => {
                Swal.fire({
                  title: 'خطا در ثبت‌نام',
                  text: 'لطفاً دوباره تلاش کنید.',
                  icon: 'error',
                  confirmButtonText: 'باشه',
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
              <div className="grid grid-cols-2 gap-2">
                <div>
                  <label htmlFor='email' className='block text-sm font-medium leading-6 text-gray-900'>
                    آدرس ایمیل
                  </label>
                  <Field
                    id='email'
                    name='email'
                    type='email'
                    className='block w-full px-4 py-2 mt-2 text-gray-900 placeholder-gray-400 border rounded-md shadow-sm focus:ring-rose-600 focus:border-rose-600 focus:outline-none sm:text-sm'
                  />
                  <ErrorMessage name='email' component='div' className='text-red-600 text-sm' />
                </div>
                <div>
                  <label htmlFor='password' className='block text-sm font-medium leading-6 text-gray-900'>
                    رمز عبور
                  </label>
                  <Field
                    id='password'
                    name='password'
                    type='password'
                    className='block w-full px-4 py-2 mt-2 text-gray-900 placeholder-gray-400 border rounded-md shadow-sm focus:ring-rose-600 focus:border-rose-600 focus:outline-none sm:text-sm'
                  />
                  <ErrorMessage name='password' component='div' className='text-red-600 text-sm' />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label htmlFor='confirmPassword' className='block text-sm font-medium leading-6 text-gray-900'>
                    تأییدیه رمز عبور
                  </label>
                  <Field
                    id='confirmPassword'
                    name='confirmPassword'
                    type='password'
                    className='block w-full px-4 py-2 mt-2 text-gray-900 placeholder-gray-400 border rounded-md shadow-sm focus:ring-rose-600 focus:border-rose-600 focus:outline-none sm:text-sm'
                  />
                  <ErrorMessage name='confirmPassword' component='div' className='text-red-600 text-sm' />
                </div>
                <div>
                  <label htmlFor='name' className='block text-sm font-medium leading-6 text-gray-900'>
                    نام
                  </label>
                  <Field
                    id='name'
                    name='name'
                    type='text'
                    className='block w-full px-4 py-2 mt-2 text-gray-900 placeholder-gray-400 border rounded-md shadow-sm focus:ring-rose-600 focus:border-rose-600 focus:outline-none sm:text-sm'
                  />
                  <ErrorMessage name='name' component='div' className='text-red-600 text-sm' />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label htmlFor='username' className='block text-sm font-medium leading-6 text-gray-900'>
                    نام کاربری
                  </label>
                  <Field
                    id='username'
                    name='username'
                    type='text'
                    className='block w-full px-4 py-2 mt-2 text-gray-900 placeholder-gray-400 border rounded-md shadow-sm focus:ring-rose-600 focus:border-rose-600 focus:outline-none sm:text-sm'
                  />
                  <ErrorMessage name='username' component='div' className='text-red-600 text-sm' />
                </div>
                <div>
                  <label htmlFor='phone' className='block text-sm font-medium leading-6 text-gray-900'>
                    شماره تلفن
                  </label>
                  <Field
                    id='phone'
                    name='phone'
                    type='text'
                    className='block w-full px-4 py-2 mt-2 text-gray-900 placeholder-gray-400 border rounded-md shadow-sm focus:ring-rose-600 focus:border-rose-600 focus:outline-none sm:text-sm'
                  />
                  <ErrorMessage name='phone' component='div' className='text-red-600 text-sm' />
                </div>
              </div>
              <div>
                <button
                  type='submit'
                  disabled={isSubmitting}
                  className='w-full px-4 py-2 mt-4 text-sm font-medium text-white bg-rose-600 border border-transparent rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-rose-500 hover:bg-rose-700 focus:ring-offset-gray-100'
                >
                  ثبت‌نام
                </button>
              </div>
            </Form>

          )}
        </Formik>
        <div className='flex items-center justify-center mt-5'>
          <span>
            آیا حساب کاربری دارید ؟ <Link to={'/login'} className=' text-sky-500' >وارد شوید</Link>
          </span>
        </div>
      </div>
    </div>
  );
}

