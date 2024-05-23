import { useFormik } from 'formik'
import Multiselect from 'multiselect-react-dropdown'
import React, { useState } from 'react'
import * as yup from "yup"


import { ColorData } from '../../../database/DB'
import { useProductContext } from '../../../context'
import ImageUploader from '../components/ImageUploader'



const AddProduct = () => {
    const { category,CreateProduct,disabled } = useProductContext()

    const [data, setData] = useState({
        product_color: null,
        product_image: []
    })

    const initalValue = {
        name: "",
        mrp_price: "",
        selling_price: "",
        description: "",
        product_type: "",
        product_category: "",
        product_material: "",
        product_design: "",
        product_warranty: "",
        product_modal: "",
        product_dimantion: "",
        product_inStock: "",
        product_skuId: ""
    }

    const validation = yup.object({
        name: yup.string().min(3).required("Product Name is required"),
        mrp_price: yup.number().required("Product MRP Price is required"),
        selling_price: yup.number().required("Product Selling Price is required"),
        description: yup.string().min(100).required("Product Description is required"),
        product_type: yup.string().required("Product Type is required"),
        product_category: yup.string().required("Product Category is required"),
        product_material: yup.string().required("Product Materila is required"),
        product_design: yup.string().required("Product Design is required"),
        product_warranty: yup.string().required("Product Warranty is required"),
        product_modal: yup.string().required("Product Modal is required"),
        product_dimantion: yup.string().required("Product Dimantion is required"),
        product_inStock: yup.string().required("Product In Stock is required"),
        product_skuId: yup.string().required("Product SKU Id is required")
    })

    const { values, errors, touched, handleBlur, handleChange, handleSubmit } = useFormik({
        initialValues: initalValue,
        validationSchema: validation,
        onSubmit: (value) => {
            let formData = new FormData();
            for (let key in value) {
                if (value.hasOwnProperty(key)) {
                    formData.append(key, value[key]);
                }
            }
            data.product_color.forEach((color) => {
                formData.append(`product_color`, color.colorName);
            });

            data.product_image.forEach((image) => {
                formData.append(`product_image`, image);
            });

            CreateProduct(formData)
            
        }
    })

    const onSelect = (selectedList, selectedItem) => {
        setData({...data,product_color:selectedList})
    }
    const onRemove = (selectedList, removedItem) => {
        setData({...data,product_color:selectedList})
    }

    return (
        <>
            <div>
                <h2 className='text-2xl font-bold text-center py-3' >Add New Product </h2>
                <div className='px-10  flex justify-between' >
                    <div className='w-[44%] h-screen border py-5'  >
                    <ImageUploader setData={setData} data={data} />
                    <div className='grid grid-cols-2 gap-2 py-5' >
                    <ImageUploader setData={setData} data={data}/>
                    <ImageUploader setData={setData} data={data}/>
                    <ImageUploader setData={setData} data={data}/>
                    <ImageUploader setData={setData} data={data}/>
                    <ImageUploader setData={setData} data={data}/>
                    <ImageUploader setData={setData} data={data}/>
                    </div>
                    </div>
                    <div className='w-[55%] border px-5 py-5' >
                        <form onSubmit={handleSubmit} className='flex flex-col gap-5 pb-10 max-h-screen overflow-y-scroll px-10' >
                            <div>
                                <label htmlFor='pname' className='font-medium px-1 py-2 flex' >Product Name/Title</label>
                                <input type='text' id='pname' name='name' value={values.name} onChange={handleChange} onBlur={handleBlur} placeholder='Product Name/title' className='w-full py-1 px-3 text-lg rounded-lg border focus:outline-cyan-700 ' />
                                {errors.name && touched.name ? <p className='text-red-500' >{errors.name}</p> : null}
                            </div>
                            <div>
                                <label htmlFor='dec' className='font-medium px-1 py-2 flex' >Discription</label>
                                <textarea type='text' id='dec' name='description' value={values.description} onChange={handleChange} onBlur={handleBlur} placeholder='Product Description' rows={5} className='w-full py-1 px-3 text-lg rounded-lg border focus:outline-cyan-700 ' ></textarea>
                                {errors.description && touched.description ? <p className='text-red-500' >{errors.description}</p> : null}
                            </div>
                            <div className='' >
                                <label htmlFor='category' className='font-medium px-1 py-2 flex' >Category</label>
                                <select id='category' name='product_category' value={values.product_category} onChange={handleChange} onBlur={handleBlur} className='w-full border rounded-lg px-1 py-2  focus:outline-cyan-700' >
                                    <option value="" > select category</option>
                                    {
                                        category.map((item, index) => {
                                            return (
                                                <option key={index} value={item._id}>{item.category_name}</option>
                                            )
                                        })
                                    }
                                </select>
                                {errors.product_category && touched.product_category ? <p className='text-red-500' >{errors.product_category}</p> : null}
                            </div>
                            <div className='' >
                                <label htmlFor='Color' className='font-medium px-1 py-2 flex' >Color</label>
                                <Multiselect
                                    options={ColorData} // Options to display in the dropdown
                                    selectedValues={() => console.log(ColorData.selectedValues)} // Preselected value to persist in dropdown
                                    onSelect={onSelect} // Function will trigger on select event
                                    onRemove={onRemove} // Function will trigger on remove event
                                    displayValue="colorName" // Property name to display in the dropdown options
                                />
                            </div>
                            <div>
                                <label htmlFor='dimantion' className='font-medium px-1 py-2 flex' >Dimantion</label>
                                <input type='text' id='dimantion' name='product_dimantion' value={values.product_dimantion} onChange={handleChange} onBlur={handleBlur} placeholder='Dimantion' className='w-full py-1 px-3 text-lg rounded-lg border focus:outline-cyan-700 ' />
                                {errors.product_dimantion && touched.product_dimantion ? <p className='text-red-500' >{errors.product_dimantion}</p> : null}
                            </div>
                            <div className='flex justify-between' >

                                <div className='w-[45%]' >
                                    <label htmlFor='sku' className='font-medium px-1 py-2 flex' >Product SKU ID</label>
                                    <input type='text' id='sku' name='product_skuId' value={values.product_skuId} onChange={handleChange} onBlur={handleBlur} placeholder='Product SKU ID' className='w-full py-1 px-3 text-lg rounded-lg border focus:outline-cyan-700 ' />
                                    {errors.product_skuId && touched.product_skuId ? <p className='text-red-500' >{errors.product_skuId}</p> : null}
                                </div>
                                <div className='w-[45%]'>
                                    <label htmlFor='material' className='font-medium px-1 py-2 flex' >Product Material</label>
                                    <input type='text' id='material' name='product_material' value={values.product_material} onChange={handleChange} onBlur={handleBlur} placeholder='Product Material' className='w-full py-1 px-3 text-lg rounded-lg border focus:outline-cyan-700 ' />
                                    {errors.product_material && touched.product_material ? <p className='text-red-500' >{errors.product_material}</p> : null}
                                </div>
                            </div>
                            <div className='flex justify-between' >

                                <div className='w-[45%]' >
                                    <label htmlFor='type' className='font-medium px-1 py-2 flex' >Product Type </label>
                                    <input type='text' id='type' name='product_type' value={values.product_type} onChange={handleChange} onBlur={handleBlur} placeholder='Product Type' className='w-full py-1 px-3 text-lg rounded-lg border focus:outline-cyan-700 ' />
                                    {errors.product_type && touched.product_type ? <p className='text-red-500' >{errors.product_type}</p> : null}
                                </div>
                                <div className='w-[45%]'>
                                    <label htmlFor='design' className='font-medium px-1 py-2 flex' >Product Design </label>
                                    <input type='text' id='design' name='product_design' value={values.product_design} onChange={handleChange} onBlur={handleBlur} placeholder='Product Design' className='w-full py-1 px-3 text-lg rounded-lg border focus:outline-cyan-700 ' />
                                    {errors.product_design && touched.product_design ? <p className='text-red-500' >{errors.product_design}</p> : null}
                                </div>
                            </div>
                            <div className='flex justify-between' >

                                <div className='w-[45%]' >
                                    <label htmlFor='Warr' className='font-medium px-1 py-2 flex' >Product Warranty</label>
                                    <input type='text' id='Warr' name='product_warranty' value={values.product_warranty} onChange={handleChange} onBlur={handleBlur} placeholder='Product Warranty' className='w-full py-1 px-3 text-lg rounded-lg border focus:outline-cyan-700 ' />
                                    {errors.product_warranty && touched.product_warranty ? <p className='text-red-500' >{errors.product_warranty}</p> : null}
                                </div>
                                <div className='w-[45%]'>
                                    <label htmlFor='model' className='font-medium px-1 py-2 flex' >Product Modal</label>
                                    <input type='text' id='model' name='product_modal' value={values.product_modal} onChange={handleChange} onBlur={handleBlur} placeholder='Product Modal' className='w-full py-1 px-3 text-lg rounded-lg border focus:outline-cyan-700 ' />
                                    {errors.product_modal && touched.product_modal ? <p className='text-red-500' >{errors.product_modal}</p> : null}
                                </div>
                            </div>



                            <div className='flex justify-between' >

                                <div className='w-[45%]' >
                                    <label htmlFor='mrp' className='font-medium px-1 py-2 flex' >Product MRP Price</label>
                                    <input type='text' id='mrp' name='mrp_price' value={values.mrp_price} onChange={handleChange} onBlur={handleBlur} placeholder='Product MRP Price' className='w-full py-1 px-3 text-lg rounded-lg border focus:outline-cyan-700 ' />
                                    {errors.mrp_price && touched.mrp_price ? <p className='text-red-500' >{errors.mrp_price}</p> : null}
                                </div>
                                <div className='w-[45%]'>
                                    <label htmlFor='sell' className='font-medium px-1 py-2 flex' >Product Selling Price</label>
                                    <input type='text' id='sell' name='selling_price' value={values.selling_price} onChange={handleChange} onBlur={handleBlur} placeholder='Product Selling Price' className='w-full py-1 px-3 text-lg rounded-lg border focus:outline-cyan-700 ' />
                                    {errors.selling_price && touched.selling_price ? <p className='text-red-500' >{errors.selling_price}</p> : null}
                                </div>
                            </div>
                            <div className='flex justify-between' >


                                <div className='w-[45%]'>
                                    <label htmlFor='Stock' className='font-medium px-1 py-2 flex' >Product IN Stock</label>
                                    <input type='text' id='Stock' name='product_inStock' value={values.product_inStock} onChange={handleChange} onBlur={handleBlur} placeholder='Product IN STock' className='w-full py-1 px-3 text-lg rounded-lg border focus:outline-cyan-700 ' />
                                    {errors.product_inStock && touched.product_inStock ? <p className='text-red-500' >{errors.product_inStock}</p> : null}
                                </div>
                            </div>
                            <div>
                                <button type='submit' disabled={disabled} className='text-lg font-medium text-white bg-blue-600 px-5 py-2 rounded-lg hover:bg-blue-800 ' >Submit</button>
                            </div>

                        </form>
                    </div>

                </div>
            </div>
        </>
    )
}

export default AddProduct