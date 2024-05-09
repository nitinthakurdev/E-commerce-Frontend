import { useFormik } from 'formik'
import React from 'react'
import { Link, useLocation} from 'react-router-dom'
import * as yup from "yup"

const Register = () => {
  const location = useLocation()
  const SellerLogin = () => {
    const temp = location.pathname.split("/")
    if(temp.length === 3){
      return temp[2]
    }else{
      return temp[1]
    }
  }
  const registerValidation = yup.object({
    fullName:yup.string().min(2).max(50).required("Full Name is Required"),
    username:yup.string().min(5).max(30).required("Username is Required"),
    email:yup.string().email().required("E-mail is required"),
    password:yup.string().min(6).max(16).required('Password is required')
  }) 

  const {values,errors,touched,handleBlur,handleChange,handleSubmit} = useFormik({
    initialValues:{fullName:null,username:null,email:null,password:null},
    validationSchema:registerValidation,
    onSubmit:(value)=>{
      console.log(value)
    }
  })
  


  return (
    <div>

    <div className="bg-gray-100 flex justify-center items-center h-screen">

      <div className="w-1/2 h-screen hidden  lg:flex items-center">
        <img src="../login.png" alt="Placeholder Image" className=" w-full" />
      </div>

      <div className="lg:p-36 md:p-52 sm:20 p-8 w-full lg:w-1/2">
        <h1 className="text-2xl font-semibold mb-4">Sign Up</h1>
        <form onSubmit={handleSubmit}>

          <div className="mb-4">
            <label htmlFor="fullName" className="block text-gray-600">Full Name</label>
            <input type="text" id="fullName" name="fullName" value={values.fullName} onChange={handleChange} onBlur={handleBlur} className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500" autoComplete="off" />
            {errors.fullName && touched.fullName ? <span className='text-sm text-red-500' >{errors.fullName}</span> : null}
          </div>

          <div className="mb-4">
            <label htmlFor="username" className="block text-gray-600">Username</label>
            <input type="text" id="username" name="username" value={values.username} onChange={handleChange} onBlur={handleBlur} className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500" autoComplete="off" />
            {errors.username && touched.username ? <span className='text-sm text-red-500' >{errors.username}</span> : null}
            
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-600">Email</label>
            <input type="email" id="email" name="email" value={values.email} onChange={handleChange} onBlur={handleBlur} className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500" autoComplete="off" />
            {errors.email && touched.email ? <span className='text-sm text-red-500' >{errors.email}</span> : null}
          
          </div>

          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-600">Password</label>
            <input type="password" id="password" name="password" value={values.password} onChange={handleChange} onBlur={handleBlur} className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500" autoComplete="off" />
            {errors.password && touched.password ? <span className='text-sm text-red-500' >{errors.password}</span> : null}
          
          </div>

          <div className="mb-4 flex items-center">
            <input type="checkbox" id="remember" name="remember" className="text-blue-500" />
            <label htmlFor="remember" className="text-gray-600 ml-2">Remember Me</label>
          </div>

          <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-md py-2 px-4 w-full"  >Sign Up</button>
        </form>
       
          <div className="mt-6 text-blue-500 text-center">
          <Link to="/login" className="hover:underline"  >Back to Login</Link>
        </div>
       
        
        
      </div>
    </div>
  </div>
  )
}

export default Register