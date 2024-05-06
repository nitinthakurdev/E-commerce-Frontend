import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const Banner = () => {
    const image = [
        "./banners/1.webp",
        "./banners/2.webp",
        "./banners/3.webp",
        "./banners/4.webp",
        "./banners/5.webp",
    ];
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 1,
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 1,
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 1,
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
        },
    };
    return (
        <div className="py-4 px-10">
            <Carousel
                responsive={responsive}
                autoPlay={true}
                autoPlaySpeed={4000}
                infinite={true}
                ssr={true}
                swipeable={false}
                draggable={false}
                showDots={true}
                dotListClass="custom-dot-list-style"
            >
                {image.map((item, index) => {
                    return (
                        <div key={index} >
                            <img src={item} alt="" />
                        </div>
                    );
                })}
            </Carousel>
        </div>
    );
};

export default Banner;

export const AdvBanner = () => {
    return (
        <>
        <div className=" relative px-10 py-4" >
            <img className="w-full" src="./background/banners.png" />
            <div className="absolute top-[50%] left-[50%]  translate-x-[-50%] translate-y-[-50%] " >
                <h2 className="text-4xl font-medium text-white" >An easy way to send requests to all suppliers</h2>
                <p className="text-white font-medium py-3" >Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non itaque excepturi ut nulla doloribus quaerat eligendi ab delectus quibusdam veniam. Excepturi harum ipsum consequatur</p>
            </div>
        </div>
        </>
    )
}
