import React from "react";
import Logo from "../../components/Logo";
import Button from "../../components/Button";
import Auth from "../../layouts/Auth";
import { Formik, Form } from "formik";
import FormikController from "../../components/Formik/FormikController";
import * as Yup from 'yup';

const SignUp = () => {
  const validationSchema = Yup.object({
    name: Yup.string()
      .required('Name is required')
      .min(2, 'Name must be at least 2 characters'),
    surname: Yup.string()
      .required('Surname is required')
      .min(2, 'Surname must be at least 2 characters'),
    email: Yup.string()
      .email('Invalid email address')
      .required('Email is required'),
    password: Yup.string()
      .required('Password is required')
      .min(8, 'Password must be at least 8 characters')
      .matches(/[a-z]/, 'Password must contain at least one lowercase letter')
      .matches(/[A-Z]/, 'Password must contain at least one uppercase letter')
      .matches(/\d/, 'Password must contain at least one number')
      .matches(/[!@#$%^&*(),.?":{}|<>]/, 'Password must contain at least one special character'),
    confirmPassword: Yup.string()
       .oneOf([Yup.ref("password"), null], "Passwords must match")
       .required("Confirm Password is required"),

  });

  return (
    <Auth title="Sign Up">
      <div >
        <div>
          <div className="flex justify-center"><Logo /></div>
          
          <Formik
            initialValues={{
              name: "",
              surname: "",
              email: "",
              password: "",
            }}
            validationSchema={validationSchema}
            onSubmit={(values) => {
              // Handle form submission
              console.log(values);
            }}
          >
            {({ errors, touched }) => (
              <Form>
                <div className="mb-4 mt-4 pt-2 px-">
                  <label htmlFor="name" className="font-bold mt-4 text-large mb-2">
                    Name
                  </label>
                  <FormikController
                    control='input'
                    type="text"
                    id="name"
                    name="name"
                    className="rounded-xl border w-full text-base px-4 py-3 focus:outline-none focus:ring-blue-500"
                    placeholder="Enter your name"
                    errorClassName={`text-red ${touched.name && errors.name ? 'block' : 'hidden'}`}
                    error={errors.name}
                  />
                </div>

                <div className="mb-4 mt-4 pt-2 px-">
                  <label htmlFor="surname" className="font-bold mt-4 text-large mb-2">
                    Surname
                  </label>
                  <FormikController
                    control='input'
                    type="text"
                    id="surname"
                    name="surname"
                    className="rounded-xl border w-full text-base px-4 py-3 focus:outline-none focus:ring-blue-500"
                    placeholder="Enter your Surname"
                    errorClassName={`text-red ${touched.surname && errors.surname ? 'block' : 'hidden'}`}
                    error={errors.surname}
                  />
                </div>

                <div className="mb-4 mt-4 pt-2 px-">
                  <label htmlFor="email" className="font-bold mt-4 text-large mb-2">
                    Email
                  </label>
                  <FormikController
                    control='input'
                    type="email"
                    id="email"
                    name="email"
                    className="rounded-xl border w-full text-base px-4 py-3 focus:outline-none focus:ring-blue-500"
                    placeholder="Enter your Email"
                    errorClassName={`text-red ${touched.email && errors.email ? 'block' : 'hidden'}`}
                    error={errors.email}
                  />
                </div>

                <div className="mb-4 pt-2 mt-4 px-">
                  <label
                    htmlFor="password"
                    className="font-bold  mt-4 text-large mb-2"
                  >
                    Password
                  </label>
                  <FormikController
                    control='input'
                    type="password"
                    id="password"
                    name="password"
                    className="rounded-xl border w-full text-base px-4 py-3 focus:outline-none focus:ring-blue-500"
                    placeholder="Enter your Password"
                    errorClassName={`text-red-500 ${touched.password && errors.password ? 'block' : 'hidden'}`}
                    error={errors.password}
                  />
                </div>
                <div className="mb-4 pt-2 mt-4">
                  <label htmlFor="confirmPassword" className="font-bold mt-4 text-large mb-2">
                    Confirm Password
                  </label>
                  <FormikController
                    control="input"
                    type="password"
                    id="confirmPassword"
                    name="confirmPassword"
                    className="rounded-xl border w-full text-base px-4 py-3 focus:outline-none focus:ring-blue-500"
                    placeholder="Re-enter your password"
                  />
                  {errors.confirmPassword && touched.confirmPassword && (
                    <div className="text-red-500 text-sm"></div>
                  )}
                </div>

                <Button type='submit'/>

                <div className="mt-2">
                  <p>
                    Already Have an account?{" "}
                    <a href="/login" className="font-medium">
                      Login
                    </a>
                  </p>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </Auth>
  );
};

export default SignUp;