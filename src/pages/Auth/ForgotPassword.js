import React from 'react';
import Logo from '../../components/Logo';
import Button2 from '../../components/Button2';
import Auth from '../../layouts/Auth';
import { Formik } from 'formik';
import FormikController from '../../components/Formik/FormikController';
import * as Yup from 'yup';

const forgotPassword = () => {
  const validationSchema = Yup.object({
    email: Yup.string()
      .email('Invalid email address')
      .required('Email is required'),
  });

  return (
    <Auth title="Reset Account Password">
      <div>
        <div>
          <div className="flex justify-center">
            <Logo />
          </div>
          <Formik
            initialValues={{
              email: '',
            }}
            validationSchema={validationSchema}
            onSubmit={(values) => {
              // Handle form submission
              console.log(values);
            }}
          >
            {({ handleSubmit, errors, touched }) => (
              <form onSubmit={handleSubmit}>
                <div className="mb-4 pt-2 px-">
                  <div>
                    <label htmlFor="email">Enter your email</label>
                  </div>
                  <FormikController
                    control="input"
                    type="email"
                    id="email"
                    name="email"
                    className="rounded-xl border w-full text-base px-4 py-3 focus:outline-none focus:ring-blue-500"
                    placeholder="Enter your Email"
                  />
                  <div className='flex justify-center'>
                  {errors.email && touched.email && (
                    <div className="text-red-500 text-sm mt-1"></div>
                  )}</div>
                </div>

                <Button2 type="submit" />
                <div className="flex justify-center mt-4 ml-2 text-l">
                  <p className="font-medium" size="large">
                    Back to{' '}
                    <a href="/login" className="font-medium">
                      Login
                    </a>
                  </p>
                </div>
              </form>
            )}
          </Formik>
        </div>
      </div>
    </Auth>
  );
};

export default forgotPassword;
