import { useFormik } from 'formik'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import * as yup from "yup"
import { useAuthContext } from '../../context'
import { VscEye,VscEyeClosed } from "react-icons/vsc";

const Login = () => {
  const { LoginHandler } = useAuthContext()
  const [showPassword, setShowPassword] = useState(false)



  const LoginValidation = yup.object({
    username: yup.string().required("E-mail or Username is Required"),
    password: yup.string().required('Password is required')
  })

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } = useFormik({
    initialValues: { username: "", password: "" },
    validationSchema: LoginValidation,
    onSubmit: (value) => {
      LoginHandler(value)
    }
  })

  return (
    <div>

      <div className="bg-gray-100 flex justify-center items-center h-screen">

        <div className="w-1/2 h-screen hidden  lg:flex items-center">
          <img src="../login.png" alt="Placeholder Image" className=" w-full" />
        </div>

        <div className="lg:p-36 md:p-52 sm:20 p-8 w-full lg:w-1/2">
          <h1 className="text-2xl font-semibold mb-4">Login</h1>
          <form onSubmit={handleSubmit}>

            <div className="mb-4">
              <label htmlFor="username" className="block text-gray-600">E-mail or Username</label>
              <input type="text" id="username" name="username" value={values.username} onChange={handleChange} onBlur={handleBlur} className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500" autoComplete="off" />
              {errors.username && touched.username ? <span className='text-sm text-red-500' >{errors.username}</span> : null}

            </div>

            <div className="mb-4 relative">
              <label htmlFor="password" className="block text-gray-600">Password</label>
              <input type={showPassword ? "text" : "password"} id="password" name="password" value={values.password} onChange={handleChange} onBlur={handleBlur} className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500" autoComplete="off" />
              <div className='absolute top-10 right-5  cursor-pointer ' onClick={() => setShowPassword(!showPassword)} >
                {showPassword ? <VscEyeClosed /> : <VscEye />}
              </div>
              {errors.password && touched.password ? <span className='text-sm text-red-500' >{errors.password}</span> : null}

            </div>

            <div className="mb-4 flex items-center">
              <input type="checkbox" id="remember" name="remember" className="text-blue-500" />
              <label htmlFor="remember" className="text-gray-600 ml-2">Remember Me</label>
            </div>

            <div className="mb-6 text-blue-500">
              <a href="#" className="hover:underline">Forgot Password?</a>
            </div>

            <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-md py-2 px-4 w-full">Login</button>
          </form>



          <div className="mt-6 text-blue-500 text-center">
            <Link to="/register" className="hover:underline"  >Sign up Here</Link>
          </div>
          <div className="mt-6 text-blue-500 text-center">
            <Link to="/register/seller" className="hover:underline">Becoume a seller</Link>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Login