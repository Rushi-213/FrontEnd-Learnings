import React from 'react'
import { useFormik } from 'formik'
export default function FromicLibrary() {
const InitialValues = {
    name: "",
    email: ""
}

const formik= useFormik({
    initialValues: InitialValues,
    onSubmit: (values) => {
        console.log("Form data", values);
        const { name, email } = values;
    }
  });
  return (
    <div>
        <form onSubmit={formik.handleSubmit}>
        <h1> Formic library form vaildation</h1> 
        <label>Enter Name: </label>
        <input type="text" name="name" placeholder='Enter your name'  onChange={formik.handleChange}/><br></br>
        <label>Enter Email: </label>
        <input type="email" name="email" placeholder='Enter your email'  onChange={formik.handleChange}/><br></br>
        <input type="submit" value="Submit" />
        </form>
  
    </div>
  )
}
