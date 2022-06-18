import React, { useState } from 'react'
import HeroSlider from "react-slick";

//import arrow button

import { NextArrow , PrevArrow } from "./Arrows.component";

// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function HeroCarousal() {

    const [images, setimages] = useState([
        "https://b.zmtcdn.com/data/o2_assets/dff007e05e2f72a4abc0772c7a8cd0951632716697.png",
        "https://b.zmtcdn.com/data/dish_images/4f2d979fcb3d1ac70db57b555d112b331634721216.png",
        "https://b.zmtcdn.com/data/o2_assets/52eb9796bb9bcf0eba64c643349e97211634401116.png",
        "https://b.zmtcdn.com/data/o2_assets/9428a39fba2a97f7470b8f3f26af86af1632716606.png",
        "https://b.zmtcdn.com/data/o2_assets/9694b563c793ea7bddf49f619dd4b7751632716697.png",
        "https://b.zmtcdn.com/data/o2_assets/d0bd7c9405ac87f6aa65e31fe55800941632716575.png",
      ]);
    // useEffect(() => {
    //     // const requestNowPlayingMovies=async()=>{
    //     //     const getImages=await axios.get('/movie/now_playing');
    //     //     setimages(getImages.data.results);

    //     // }
    //     // requestNowPlayingMovies();
    // }, []);
    


    const settingsLg={
        arrows:true,
        autoplay: true,
        centerMode: true,
        centerPadding:"300px",
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        nextArrow: <NextArrow/>,
        prevArrow:<PrevArrow/>
    }
    var settings = {
        arrows:false,
        dots: true,
        autoplay: true,
        infinite: true,
        speed: 100,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <NextArrow/>,
        prevArrow:<PrevArrow/>
      };
     
    return (
        <>

        <div className="lg:hidden" >
            
        <HeroSlider {...settings} >
            {
                    images.map((image)=>(
                        <div className="w-full h-64 py-3 md:h-80 outline-none">
                            <img src={image} alt="Caraousel" className="w-full h-full rounded-md object-cover"/>
                        </div>
                    ))
            }
         </HeroSlider>         

        </div>



        <div className="hidden lg:block" >

        <HeroSlider {...settingsLg} >
            {
                    images.map((image)=>(
                        <div className="w-full h-96 px-1 py-3 focus:border-0 border-transparent outline-none">
                             <img src={image} alt="Caraousel" className="w-full h-full rounded-md object-cover"/>
                        </div>
                    ))
            }
         </HeroSlider>         

        </div>




        </>
    );
}
