

export const PayementMethod = ({data,setData})=>{
    const HandleChnage = (e) => {
        const {value} = e.target
        if(value === "online"){
            setData({...data,payement_method:value})
        }else{
            setData({...data,payement_method:value,payement_status:"Unpaid"})
        }
    }
    return (
        <>
        <div className='' >
                <h2>Payement Type </h2>
                <div className='flex  flex-col gap-10 pt-3' >

                    <label className=" flex gap-2 items-center cursor-pointer ">
                        <input type="radio"   name="type"
                            value="online" 
                            onChange={HandleChnage}
                            defaultValue={data.payement_method === "online" && data.payement_method}
                           />
                        <span className='bg-gray-200 rounded-md py-1 px-2' > Online</span>
                    </label>
                    <label className=" flex gap-2 items-center cursor-pointer ">
                        <input type="radio" name="type" value="COD" defaultValue={data.payement_method === "COD" && data.defaultValue}    onChange={HandleChnage}
                           />
                        <span className='bg-gray-200 rounded-md py-1 px-2' > Cash on Delivery (COD)</span>
                    </label>
                   
                </div>

            </div>
        </>
    )
}