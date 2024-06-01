import React, { useEffect, useState } from "react";
import ShowAddress from "../pages/UserProfile/components/ShowAddress";
import AddressForm from "./AddressForm";
import { PayementMethod } from "../pages/UserProfile/components/Ui";
import { useComponentContext } from "../../../context";
import CartCard from "../pages/cartpage/components/CartCard";

const Modal = ({productData,setShow,show}) => {
    const {CheckoutWithCart,CreateOrder} = useComponentContext()
    const [showAddre, setShowAddress] = useState(false)
    const [step,setStep] = useState(null)
    const [data,setData] = useState({
        address_id:"",
        payement_method:"",
        payement_status:"",
        product:[],
    })

    const Selling = productData?.reduce((i,b)=>i + b?.product_id?.selling_price * b.product_qty,0)
    console.log(step)
    const handleClick = () => {
        if(data.address_id !== ""){
            setStep(1)
            if(data.payement_method !== ""){
                setStep(2)
            }
        }

        
        
    }

    useEffect(()=>{
        setData({...data,product:productData?.map((item)=>({productId:item.product_id?._id,product_qty:item.product_qty,product_color:item.product_color,sellerId:item?.product_id?.user_id}))})
    },[productData])
    
const HandlePayement = async() => {
  if(data.payement_method === "online"){
    localStorage.setItem("orderDetail",JSON.stringify(data))
    await CheckoutWithCart(productData)    
}
}

    useEffect (()=>{
      HandlePayement()
    },[data])

  return (
    <div>
      <div className={`font-sans ${show ? "flex" : "hidden"} bg-gray-100  items-center justify-center h-screen`}>
        <div x-data="{ showPrivacyPolicy: true }">
          

          <div
            x-show="showPrivacyPolicy"
            className="fixed z-10 inset-0 flex items-center justify-center"
          >
            <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
            <div
              className="relative bg-white rounded-lg overflow-hidden shadow-xl max-w-screen-md w-full m-4"
              
            >
              <div className="px-6 py-4">
                <div className="flex justify-between items-center" >
                    <div className={`h-14 w-14 ${data.address_id !== "" && "bg-blue-500 text-white"} border-2 rounded-full flex items-center justify-center text-2xl` } onClick={()=>setStep(null)} >1</div>
                    <span className={`w-1/2 bg-black h-1 ${data.address_id !== "" && "bg-blue-500" } `} ></span>
                    <div className={`h-14 w-14 ${data.payement_method !== "" && data.product.length > 0 && "bg-blue-500 text-white"} border-2 rounded-full flex items-center justify-center text-2xl`} onClick={()=>setStep(1)}  >2</div>
                    <span className={`w-1/2 ${data.payement_method !== "" && data.product.length > 0 && "bg-blue-500 "} bg-black h-1`} ></span>
                    <div className={`h-14 w-14 border-2 rounded-full flex items-center justify-center text-2xl`} >3</div>
                </div>
              </div>
              <div
                className="prose max-w-screen-md p-6 overflow-y-auto"
                style={{maxHeight:" 70vh", backgroundColor:" #fff", border: "1px solid #e2e8f0", borderRadius:" 0.375rem", boxShadow:" 0 2px 4px 0 rgba(0, 0, 0, 0.1)"}}
              ><div>
                {step === 1 ? <PayementMethod setData={setData} data={data} /> : step === 2 ? <><CartCard data={productData} step={step} /> <div>
                    Total Price : {Selling}</div></> :<> <ShowAddress setData={setData} data={data} />
                <button className="w-full bg-gray-300 font-medium text-lg rounded-md" onClick={()=>setShowAddress(!showAddre)} >Add new Address</button>
                {showAddre ? <AddressForm setShowAddress={setShowAddress}/> : null}</> }
               
              </div>
              </div>
              <div className="bg-gray-50 px-4 py-3 sm:px-6 flex align-items justify-end p-4 gap-4 flex-row">
                {step === 2 ?  <button
                  type="button"
                  className="inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-black text-base font-medium text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400  sm:w-auto sm:text-sm"
                  onClick={()=> CreateOrder(data)}
                >
                  Order Now
                </button> : <button
                  type="button"
                  className="inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-black text-base font-medium text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400  sm:w-auto sm:text-sm"
                  onClick={handleClick}
                >
                  Next
                </button>
               }
                {step === null && <button
                  type="button"
                  className="inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-black text-base font-medium text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400  sm:w-auto sm:text-sm"
                  onClick={()=>setShow(false)}
                >
                  Cancel
                </button>}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
