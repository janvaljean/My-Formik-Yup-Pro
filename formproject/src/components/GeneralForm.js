import React from 'react'
 import { useFormik } from 'formik';

const GeneralForm = () => {
    const {values,errors,handleChange,handleSubmit} = useFormik({
     initialValues: {
       email: '',
       age:"",
       password: '',
       confirmPassword: '',
     },
    
   });
   
  return (
  <form>
    <div className="inputDiv">
        <label htmlFor="">Email</label>
        <input type="email"
        value={values.email}
        id='email'
        onChange={handleChange}
        placeholder='Enter a valid email address'
         />
    </div>
    <div className="inputDiv">
        <label htmlFor="">Age</label>
        <input type="age"
        value={values.age}
        id='age'
        onChange={handleChange}
        placeholder='Age of the user'
         />
    </div>
    <div className="inputDiv">
        <label htmlFor="">Password</label>
        <input type="password"
        value={values.password}
        id='password'
        onChange={handleChange}
        placeholder='Enter a valid password address'
         />
    </div>
        <div className="inputDiv">
        <label htmlFor="">Confirm Password</label>
        <input type="password"
        value={values.confirmPassword}
        id='confirmPassword'
        onChange={handleChange}
        placeholder='confirm your password'
         />
    </div>
    <button type='submit'>Submit</button>

  </form>
    
  )
}

export default GeneralForm
