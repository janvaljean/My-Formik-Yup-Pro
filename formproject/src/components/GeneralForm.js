import React from 'react'
 import { useFormik } from 'formik';
import { basicShema } from '../schemas';


const onSubmit = async(values, actions) => {

  await new Promise((resolve) => {
    setTimeout(resolve,1000)
    //! after one second can be submitted
  })
console.log(values)
  actions.resetForm()

};

const GeneralForm = () => {
    const {values, errors, handleChange, handleSubmit, isSubmitting } = useFormik({
     initialValues: {
       email: '',
       age:"",
       password: '',
       confirmPassword: '',
     },
    validationSchema: basicShema,
    onSubmit,

   });
   
  return (
  <form onSubmit={handleSubmit}>
    <div className="inputDiv">
        <label htmlFor="">Email</label>
        <input type="email"
        value={values.email}
        id='email'
        onChange={handleChange}
        placeholder='Enter a valid email address'
        className={errors.email ? "input-error" : ""}
        // error={touched.email && Boolean(errors.email)}
        // onBlur={handleBlur}
        // helperText={touched.email && errors.email}
         />
        {errors.email && <p className='error'>{errors.email}</p>}
    </div>
    <div className="inputDiv">
        <label htmlFor="">Age</label>
        <input type="age"
        value={values.age}
        id='age'
        onChange={handleChange}
        placeholder='Age of the user'
         />
         {errors.age && <p className='error'>{errors.age}</p>}
    </div>
    <div className="inputDiv">
        <label htmlFor="">Password</label>
        <input type="password"
        value={values.password}
        id='password'
        onChange={handleChange}
        placeholder='Enter a valid password address'
         />
         {errors.password && <p className='error'>{errors.password}</p>}
    </div>
        <div className="inputDiv">
        <label htmlFor="">Confirm Password</label>
        <input type="password"
        value={values.confirmPassword}
        id='confirmPassword'
        onChange={handleChange}
        placeholder='confirm your password'
         />
          {errors.confirmPassword && <p className='error'>{errors.confirmPassword}</p>}
    </div>
    <button disabled={isSubmitting} type='submit'>Submit</button>

  </form>
    
  )
}

export default GeneralForm
