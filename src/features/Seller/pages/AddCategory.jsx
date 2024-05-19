import React, { useEffect, useState } from 'react'
import { useProductContext } from '../../../context'
import { Link, useLocation } from 'react-router-dom'

const AddCategory = () => {
    const { CreateCategory, disabled, category,EditCategory } = useProductContext()
    const location = useLocation()
    const path = location.pathname.replace("/add-category/", "")
    const [image, setImage] = useState('')
    const [Categorydata,setCategoryData] = useState(null)

    const [data, setData] = useState({
        category_name: null,
        category_image: null
    })
    const handleImage = (e) => {
        const file = e.target.files[0]
        setData({ ...data, category_image: file })
        let imagePath = URL.createObjectURL(file)
        setImage(imagePath)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const formdata = new FormData()
        formdata.append("category_name", data.category_name)
        formdata.append("category_image", data.category_image)
        if(path !== "new"){
            let temp = {
                category_name:data.category_name ? data.category_name : Categorydata.category_name,
                category_image:data.category_image ? data.category_image : Categorydata.category_image
            }
            const formdata = new FormData()
            formdata.append("category_name", temp.category_name)
            formdata.append("category_image", temp.category_image)
            EditCategory(formdata,Categorydata._id)
        }else{
            CreateCategory(formdata)
        }
    }

    
    useEffect(() => {
        if (path !== "new") {
            const editCategory = category?.filter((item) => item._id === path)[0]
            setImage(editCategory?.category_image)
            setCategoryData(editCategory)
        }
    }, [])


    return (
        <div>
            <h2 className='text-2xl font-bold text-center py-4' >{path !== "new" ? "Edit Category" : "Add New Category"}</h2>

            <form className='col-span-4 px-20 ' >
                <div className="space-y-12  ">
                    <div className="border-b border-gray-900/10 pb-12">



                        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">


                            <div className="col-span-4">
                                <label htmlFor="Name" className="block text-sm font-medium leading-6 text-gray-900"> Category Name </label>
                                <div className="mt-2">
                                    <input id="Name" type="Name" defaultValue={path !== "new" ? Categorydata?.category_name : ""} autoComplete="Name" onChange={(e) => setData({ ...data, category_name: e.target.value })} className=" px-3 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                                </div>
                            </div>

                            <div className="col-span-4">
                                <label htmlFor="image" className="block text-sm font-medium leading-6 text-gray-900"> Category Image
                                    <div className='h-[300px] w-[500px] bg-slate-100 rounded-xl flex flex-col items-center justify-center p-5' >
                                        <input type="file" id='image' accept='image/*' hidden onChange={handleImage} />
                                        {!image ? <div className=' flex flex-col items-center justify-center border border-dashed border-black h-full w-full '>
                                            <img src="../uploadimage.png" className='h-20 w-20' alt="" />
                                            <p className='font-medium text-center' >Drag and drop or click <br /> to upload image </p>
                                            <span className='text-sm pt-4 text-gray-500' >Upload any image from desktop</span>
                                        </div>
                                            :
                                            <div className='h-full w-full rounded-xl flex items-center justify-center' >
                                                <img src={image} className='h-full' alt="" />
                                            </div>}
                                    </div>
                                </label>

                            </div>
                        </div>
                    </div>

                </div>

                <div className=" flex py-3 justify-end gap-5 w-2/3">
                    {path !== "new" && <Link to="/category-list"  className="rounded-md  px-5 py-2 text-sm font-semibold  hover:text-white border-2 shadow-sm hover:bg-indigo-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400">Cancel</Link>}
                    <button type="submit" disabled={disabled} onClick={handleSubmit} className="rounded-md bg-indigo-600 px-5 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Submit</button>
                </div>
            </form>

        </div>
    )
}

export default AddCategory