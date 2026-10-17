import React from 'react'
import { useFormik } from 'formik'
import { formSchema } from './FromSchema'
export default function Yuplibrary() {
    const InitialValues = {
        name: "",
        email: ""
    }
    
    const formik= useFormik({
        initialValues: InitialValues,
        onSubmit: (values) => {
            validateYup: formSchema.validate(values)
            console.log("Form data", values);
            const { name, email } = values;
        }
  });
  return (
    <div>
          <form onSubmit={formik.handleSubmit}>
              <h1> Formic library form vaildation</h1>
              <label>Enter Name: </label>
              <input type="text" name="name" placeholder='Enter your name' onChange={formik.handleChange} />
              <span>{formik.errors.name}</span><br></br>
              <label>Enter Email: </label>
              <input type="email" name="email" placeholder='Enter your email' onChange={formik.handleChange} />
              <span>{formik.errors.email}</span><br></br>
              <input type="submit" value="Submit" />
          </form>
    </div>
  )
}
