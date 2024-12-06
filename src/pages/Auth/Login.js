import React, { useState } from 'react';
import Button from '../../components/Buttons';
import Auth from '../../layouts/Auth';
import Logo from '../../components/Logo';
import { Formik, Form } from 'formik';
import FormikController from '../../components/Formik/FormikController';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';
import { FaEyeSlash, FaEye } from 'react-icons/fa';

function Login() {
  const navigate = useNavigate();

  const validationSchema = Yup.object({
    email: Yup.string()
      .email('Invalid email address')
      .required('Email is required'),
    password: Yup.string()
      .required('Password is required'),
  });

  const handleSubmit = (values, { setSubmitting }) => {
    console.log(values);
    navigate('/Home');
  };

  const [showPassword, setShowPassword] = useState(false);

  return (
    <Auth title="Login">
      <div>
        <div className="flex justify-center">
          <Logo />
        </div>
        <Formik
          initialValues={{
            email: '',
            password: '',
          }}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ errors, touched, isSubmitting }) => (
            <Form>
              <div className="mb-4 pt-2">
                <label htmlFor="email" className="font-bold text-large mb-2">
                  Email
                </label>
                <FormikController
                  control="input"
                  type="email"
                  id="email"
                  name="email"
                  className="rounded-xl border w-full text-base px-4 py-3 focus:outline-none focus:ring-blue-500"
                  placeholder="Enter your Email"
                />
                {errors.email && touched.email && (
                  <div className="text-red-500 text-sm"></div>
                )}
              </div>

              <div className="mb-4 pt-2">
                <label htmlFor="password" className="font-bold text-large mb-2">
                  Password
                </label>
                <div className="relative">
                  <FormikController
                    control="input"
                    type={showPassword ? 'text' : 'password'}
                    id="password"
                    name="password"
                    className="rounded-xl border w-full text-base px-4 py-3 focus:outline-none focus:ring-blue-500 pr-10"
                    placeholder="Enter your Password"
                  />
                  <div className='flex items-center'>
                  <span
                    type="button"
                    className=" flex absolute top-5 right-3 transform -translate-y-1 text-black hover:text-gray-700 focus:outline-none"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                  </span>
                  </div>
                </div>
                {errors.password && touched.password && (
                  <div className="text-red-500 text-sm"></div>
                )}
              </div>

              <Button type="submit" disabled={isSubmitting}>
                Login
              </Button>

              <div className="flex justify-start mt-2 text-blue-400">
                <p className="bg-white">
                  <a href="/forgotpassword" className="font-medium">
                    Forgot Password?
                  </a>
                </p>
              </div>
              <div className="mt-2">
                <p>
                  Don't Have an account?{' '}
                  <a href="/signup" className="font-medium">
                    Sign Up
                  </a>
                </p>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </Auth>
  );
}

export default Login;