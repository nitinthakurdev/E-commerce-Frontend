import { Link } from "react-router-dom";


export const CategoryBanners = ({ value }) => {
  return (
    <>
      {value.map((item) => {
        return (
          <div key={item.id} className="bg-slate-100  py-3">
            <div className=" flex">
              <div className="h-full w-[20%] p-1 relative">
                <img src={item.image}  alt="" />
                <div className="absolute top-8 left-5">
                  <p className=" font-bold text-xl py-3 ">{item.name}</p>
                  <button className="bg-white py-1 px-2 rounded-lg hover:bg-slate-200 transition-all duration-300">
                    Show more
                  </button>
                </div>
              </div>
              <div className=" w-[80%] bg-white  grid  grid-cols-4 ">
                {item.data.map((item) => {
                  return (
                    <Link to="/productdetail" key={item.id} className="border " >
                    <div className="flex p-3 justify-between " >
                      <div className="">
                        <h2 className="text-lg font-medium">{item.name}</h2>
                        <span className="text-gray-600 font-medium">From</span>
                        <p className="text-gray-600 font-medium">
                          Rs. {item.price}
                        </p>
                      </div>
                      <div className=" ">
                        <img className="w-20" src={item.image} alt="" />
                      </div>
                    </div>
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};
