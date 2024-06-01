import { useFormik } from 'formik'
import React from 'react'
import * as yup from "yup"
import { useComponentContext } from '../../../context'

const AddressForm = ({setShowAddress}) => {

    const {CreateAddress} = useComponentContext()
    const initialValue = {
        fullname: "",
        phoneNo1: '',
        phoneNo2:"",
        pincode: "",
        country: "",
        state: "",
        city: "",
        houseNo: "",
        area: "",
        type: "",
    }

    const validationSchema = yup.object({
        fullname: yup.string().min(2).max(30).required("Full Name is required"),
        phoneNo1: yup.string().min(10).max(12).required("Phone No.1 is required"),
        pincode: yup.string().max(6).required("Pincode is required"),
        country: yup.string().required("Country is required"),
        state: yup.string().required("State is required"),
        city: yup.string().required("City is required"),
        houseNo: yup.string().required("House No, Building Name is required"),
        area: yup.string().required("Area, Road, Colony is required"),
        type: yup.string().required("Address Type is required"),
    });
    const {values,errors,touched,handleBlur,handleChange,handleSubmit} = useFormik({
        initialValues:initialValue,
        validationSchema:validationSchema,
        onSubmit:(value)=>{
            CreateAddress(value)
            setShowAddress(false)
        }
    })
    return (
        <form onSubmit={handleSubmit} className='flex  flex-col gap-5' >
            <div className='flex flex-col' >
                <label htmlFor="fullname">Full Name</label>
                <input type="text" id='fullname' name='fullname' value={values.fullname} onChange={handleChange} onBlur={handleBlur}   className='border-2 py-1 text-lg rounded-lg focus:outline-purple-600 px-3' />
                {touched.fullname && errors.fullname ? <p className='text-red-500' >{errors.fullname}</p>:null}
            </div>
            <div className='flex flex-col' >
                <label htmlFor="phone">Phone No. 1</label>
                <input type="text" id='phone'  name='phoneNo1' value={values.phoneNo1} onChange={handleChange} onBlur={handleBlur}  className='border-2 py-1 text-lg rounded-lg focus:outline-purple-600 px-3' />
                {touched.phoneNo1 && errors.phoneNo1 ? <p className='text-red-500' >{errors.phoneNo1}</p>:null}
            </div>
            <div className='flex flex-col' >
                <label htmlFor="phone1">Phone No. 2</label>
                <input type="text" id='phone1'  name='phoneNo2' value={values.phoneNo2} onChange={handleChange} onBlur={handleBlur}  className='border-2 py-1 text-lg rounded-lg focus:outline-purple-600 px-3' />
            </div>
            <div className='flex gap-10' >
                <div className='flex flex-col' >
                    <label htmlFor="pin">Pincode</label>
                    <input type="text" id='pin' name='pincode' value={values.pincode} onChange={handleChange} onBlur={handleBlur}  className='border-2 py-1 text-lg rounded-lg focus:outline-purple-600 px-3' />
                    {touched.pincode && errors.pincode ? <p className='text-red-500' >{errors.pincode}</p>:null}
                </div>
                <div className='flex flex-col' >
                    <label htmlFor="country">Country</label>
                    <input type="text" id='country'  name='country' value={values.country} onChange={handleChange} onBlur={handleBlur}  className='border-2 py-1 text-lg rounded-lg focus:outline-purple-600 px-3' />
                    {touched.country && errors.country ? <p className='text-red-500' >{errors.country}</p>:null}
                </div>

            </div>
            <div className='flex gap-10' >
                <div className='flex flex-col' >
                    <label htmlFor="state">State</label>
                    <input type="text" id='state'  name='state' value={values.state} onChange={handleChange} onBlur={handleBlur}  className='border-2 py-1 text-lg rounded-lg focus:outline-purple-600 px-3' />
                    {touched.state && errors.state ? <p className='text-red-500' >{errors.state}</p>:null}
                </div>
                <div className='flex flex-col' >
                    <label htmlFor="city">City</label>
                    {touched.city && errors.city ? <p className='text-red-500' >{errors.city}</p>:null} <input type="text" id='city'  name='city' value={values.city} onChange={handleChange} onBlur={handleBlur}  className='border-2 py-1 text-lg rounded-lg focus:outline-purple-600 px-3' />
                </div>

            </div>
            <div className='flex flex-col' >
                <label htmlFor="hou">House No. , Building Name</label>
                <input type="text" id='hou'  name='houseNo' value={values.houseNo} onChange={handleChange} onBlur={handleBlur}  className='border-2 py-1 text-lg rounded-lg focus:outline-purple-600 px-3' />
                {touched.houseNo && errors.houseNo ? <p className='text-red-500' >{errors.houseNo}</p>:null}
            </div>
            <div className='flex flex-col' >
                <label htmlFor="area">Road name, Area ,Colony</label>
                <input type="text" id='area'  name='area' value={values.area} onChange={handleChange} onBlur={handleBlur}  className='border-2 py-1 text-lg rounded-lg focus:outline-purple-600 px-3' />
                {touched.area && errors.area ? <p className='text-red-500' >{errors.area}</p>:null}
            </div>
            <div className='' >
                <h2>Type of address</h2>
                <div className='flex gap-10 pt-3 items-center' >

                    <label className=" flex gap-2 items-center cursor-pointer ">
                        <input type="radio"   name="type"
                            value="Home"
                            checked={values.type === 'Home'}
                            onChange={handleChange} />
                        <span className='bg-gray-200 rounded-md py-1 px-2' > Home</span>
                    </label>
                    <label className=" flex gap-2 items-center cursor-pointer ">
                        <input type="radio" name="type"   value="Work"
                            checked={values.type === 'Work'}
                            onChange={handleChange} />
                        <span className='bg-gray-200 rounded-md py-1 px-2' > Work</span>
                    </label>
                    {touched.type && errors.type ? <p className='text-red-500' >{errors.type}</p>:null}
                </div>

            </div>
            <div className='flex gap-10' >
            <button type='submit' className='text-lg font-medium border-2 px-3 hover:bg-blue-600 hover:text-white py-1 rounded-lg' >Save</button>
            <button className='text-lg font-medium border-2 px-3 bg-blue-600 text-white py-1 rounded-lg hover:bg-white hover:text-black ' onClick={()=>setShowAddress(false)} >Cancel</button>

            </div>
        </form>
    )
}

export default AddressForm