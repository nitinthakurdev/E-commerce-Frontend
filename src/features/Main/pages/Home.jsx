import React from 'react'
import Headers from "../components/Headers"
import Banner, { AdvBanner } from "../components/Banner"
import Offers from '../components/Offers'
import { CategoryBanners } from '../components/CategoryBanners'
import { ProductCard } from '../components/Cards'
import NewsLetter from '../components/NewsLetter'
import Footer from '../components/Footer'

const Home = () => {
    const data = [
        {
            id: 1,
            name: "Soft Chairs",
            image: "./productimage/sofa.png",
            price: 200
        },
        {
            id: 2,
            name: "Soft & Chair",
            image: "./productimage/lamp.png",
            price: 500
        },
        {
            id: 3,
            name: "Kitchen dishes",
            image: "./productimage/badSheet.png",
            price: 250
        },
        {
            id: 4,
            name: "Smart Watches",
            image: "./productimage/matka.png",
            price: 100
        },
        {
            id: 5,
            name: "kitchen Mixer",
            image: "./productimage/grinder.png",
            price: 700
        },
        {
            id: 6,
            name: "Blenders",
            image: "./productimage/coffie.png",
            price: 320
        },
        {
            id: 7,
            name: "Home appliance",
            image: "./productimage/wallet.png",
            price: 50
        },
        {
            id: 8,
            name: "Coffee maker",
            image: "./productimage/plant.png",
            price: 999
        },
    ]

    const data1 = [
        {
            id: 1,
            name: "Smart watches",
            image: "./productimage/watch.png",
            price: 500
        },
        {
            id: 2,
            name: "Cameras",
            image: "./productimage/camra.png",
            price: 2000
        },
        {
            id: 3,
            name: "Headphone",
            image: "./productimage/headphone.png",
            price: 1000
        },
        {
            id: 4,
            name: "Smart watches",
            image: "./productimage/gug.png",
            price: 700
        },
        {
            id: 5,
            name: "Gaming set",
            image: "./productimage/hearphone.png",
            price: 500
        },
        {
            id: 6,
            name: "Laptop & PC",
            image: "./productimage/laptop.png",
            price: 2000
        },
        {
            id: 7,
            name: "Smartphone",
            image: "./productimage/phone.png",
            price: 1000
        },
        {
            id: 8,
            name: "Electric kattle",
            image: "./productimage/iphone.png",
            price: 700
        },
    ]

    const value = [
        {
            id: 1,
            image: "./background/category.png",
            name: "Home & Outdoor",
            data: data,
        },
        {
            id: 2,
            image: "./background/category2.png",
            name: "Consumer electronics and gadgets ",
            data: data1,
        },

    ]


    const data2 = [
        {
            id:1,
            image:"./productimage/watch.png",
            name:"Smart Watches",
            discunt:"-25%"
        
        },
        {
            id:2,
            image:"./productimage/laptop.png",
            name:"Smart Watches",
            discunt:"-15%"
        
        },
        {
            id:3,
            image:"./productimage/camra.png",
            name:"Smart Watches",
            discunt:"-40%"
        
        },
        {
            id:4,
            image:"./productimage/hearphone.png",
            name:"Smart Watches",
            discunt:"-25%"
        
        },
        {
            id:5,
            image:"./productimage/phone.png",
            name:"Smart Watches",
            discunt:"-25%"
        
        },
        {
            id:6,
            image:"./productimage/sofa.png",
            name:"Smart Watches",
            discunt:"-25%"
        
        },
        {
            id:7,
            image:"./productimage/lamp.png",
            name:"Smart Watches",
            discunt:"-25%"
        
        },
        {
            id:8,
            image:"./productimage/headphone.png",
            name:"Smart Watches",
            discunt:"-25%"
        
        },
        {
            id:9,
            image:"./productimage/wallet.png",
            name:"Smart Watches",
            discunt:"-25%"
        
        },
        {
            id:10,
            image:"./productimage/iphone.png",
            name:"Smart Watches",
            discunt:"-25%"
        
        },
       
        

    ]
    return (
        <div className='px-10' >
         <Banner/>
         <Offers/>
         <CategoryBanners value={value} />
         <ProductCard data={data2} />
         <AdvBanner/>
         <ProductCard data={data2} />
         <NewsLetter />
         
        </div>
    )
}

export default Home