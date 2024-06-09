import React, { useEffect, useState, useMemo } from 'react';
import { useProductContext } from '../../../../../context';
import StarRatings from 'react-star-ratings';
import { useNavigate } from 'react-router-dom';

const Filter = () => {
    const [showAllCategories, setShowAllCategories] = useState(false);
    const [showAllBrand, setShowAllBrand] = useState(false);
    const { category, allProduct } = useProductContext();
    const navigate = useNavigate();
    const [data, setData] = useState({
        category: null,
        brand: null,
        pricing: {
            low: "",
            high: ""
        },
        condition: null,
        rating: null
    });

    const handleConditionChange = (condition) => {
        setData((prevData) => ({ ...prevData, condition }));
    };

    const handleRatingChange = (rating) => {
        setData((prevData) => ({ ...prevData, rating }));
    };

    const displayedCategories = useMemo(() => {
        return showAllCategories ? category : category?.slice(0, 4);
    }, [category, showAllCategories]);

    const displayBrand = useMemo(() => {
        const filterBrand = allProduct?.map((item) => item.product_brand);
        const uniqueBrands = [...new Set(filterBrand)];
        return showAllBrand ? uniqueBrands : uniqueBrands?.slice(0, 4);
    }, [showAllBrand, allProduct]);

    const buildQueryString = (params) => {
        return Object.keys(params)
            .map(key => {
                if (params[key] === null || params[key] === undefined) {
                    return '';
                }
                if (typeof params[key] === 'object') {
                    return Object.keys(params[key])
                        .map(subKey => `${key}[${subKey}]=${encodeURIComponent(params[key][subKey])}`)
                        .join('&');
                }
                return `${key}=${encodeURIComponent(params[key])}`;
            })
            .filter(Boolean)
            .join('&');
    };

    useEffect(() => {
        const queryString = buildQueryString(data);
        navigate(`/productlist?${queryString}`);
    }, [data, navigate]);

    return (
        <>
            <aside className="w-[19%]">
                <div className="p-3">
                    <h2 className="py-2 font-medium text-lg">Category</h2>
                    <ul className="flex flex-col gap-2 px-2">
                        {displayedCategories?.map((item) => (
                            <li
                                className={`cursor-pointer capitalize px-2 py-1 rounded-sm ${item.category_name === data.category ? "bg-gray-200" : ""} hover:bg-gray-200`}
                                key={item.category_name}
                                onClick={() => setData((prevData) => ({ ...prevData, category: item.category_name }))}
                            >
                                {item.category_name}
                            </li>
                        ))}
                    </ul>
                    <button
                        className="text-blue-600 my-3"
                        onClick={() => setShowAllCategories(!showAllCategories)}
                    >
                        {showAllCategories ? "Less ..." : "see all..."}
                    </button>
                </div>
                <hr />
                <div className="p-3">
                    <h2 className="py-2 font-medium text-lg">Brand</h2>
                    <ul className="flex flex-col gap-2 px-2">
                        {displayBrand?.map((brand) => (
                            <li className="cursor-pointer select-none flex gap-2" key={brand}>
                                <label
                                    className="flex gap-3 bg-gray-100 text-gray-700 rounded-md px-3 py-2 my-3 hover:bg-indigo-300 cursor-pointer"
                                >
                                    <input
                                        type="radio"
                                        name="brand"
                                        checked={data.brand === brand}
                                        onChange={() => setData((prevData) => ({ ...prevData, brand }))}
                                    />
                                    <span>{brand}</span>
                                </label>
                            </li>
                        ))}
                    </ul>
                    <button
                        className="text-blue-600 my-3"
                        onClick={() => setShowAllBrand(!showAllBrand)}
                    >
                        {showAllBrand ? "Less..." : "see all..."}
                    </button>
                </div>
                <hr />
                <div className="p-3">
                    <h2 className="py-2 font-medium text-lg">Price</h2>
                    <input
                        type="range"
                        min={500}
                        max={10000}
                        value={data.pricing.low}
                        onChange={(e) => setData((prevData) => ({ ...prevData, pricing: { ...prevData.pricing, low: parseInt(e.target.value) } }))}
                    />
                    <div className='flex items-center justify-between gap-3'>
                        <div className='flex flex-col items-center w-[50%]'>
                            <span>Min</span>
                            <input
                                type="number"
                                placeholder='0'
                                value={data.pricing.low}
                                onChange={(e) => setData((prevData) => ({ ...prevData, pricing: { ...prevData.pricing, low: parseInt(e.target.value) } }))}
                                className='border-2 w-full px-2 border-gray-500'
                            />
                        </div>
                        <div className='flex flex-col items-center w-[50%]'>
                            <span>Max</span>
                            <input
                                type="number"
                                placeholder='10000'
                                value={data.pricing.high}
                                onChange={(e) => setData((prevData) => ({ ...prevData, pricing: { ...prevData.pricing, high: parseInt(e.target.value) } }))}
                                className='border-2 w-full px-2 border-gray-500'
                            />
                        </div>
                    </div>
                </div>
                <hr />
                <div className="p-3">
                    <h2 className="py-2 font-medium text-lg">Condition</h2>
                    <div>
                        {['Any', 'Refurbished', 'Brand New', 'Old Item'].map((condition, index) => (
                            <label
                                key={index}
                                className="flex gap-3 bg-gray-100 text-gray-700 rounded-md px-3 py-2 my-3 hover:bg-indigo-300 cursor-pointer"
                            >
                                <input
                                    type="radio"
                                    name="condition"
                                    checked={data.condition === condition}
                                    onChange={() => handleConditionChange(condition)}
                                />
                                <span>{condition}</span>
                            </label>
                        ))}
                    </div>
                </div>
                <hr />
                <div className="p-3">
                    <h2 className="py-2 font-medium text-lg">Rating</h2>
                    <div className='flex flex-col gap-3'>
                        {[1, 2, 3, 4, 5].map((rating) => (
                            <span key={rating} onClick={() => handleRatingChange(rating)}>
                                <StarRatings
                                    starRatedColor="#ff9017"
                                    rating={rating}
                                    starDimension="20px"
                                    starSpacing="3px"
                                />
                            </span>
                        ))}
                    </div>
                </div>
            </aside>
        </>
    );
};

export default Filter;
