import { Formik, Form } from "formik";
import FormikController from "./Formik/FormikController";


const RegistrationForm =() =>{
    return (
      <Formik
        initialValues={{ email: '' }}
        onSubmit={(values) => {
          // Handle form submission
          console.log(values);
        }}
      >
        <Form>
          <FormikController
            name="email"
            control={Formik.Control}
            component={FormikController}
            type="email"
            placeholder="Email"
            label="Email Address"
          />
          {/* Add more form fields... */}
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-3 mt-6 rounded-xl hover:bg-blue-600 transition duration-200"
          >
            Register
          </button>
        </Form>
      </Formik>
    );
  }
  export default RegistrationForm