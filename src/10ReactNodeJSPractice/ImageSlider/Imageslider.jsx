import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Nature1 from "../../Image/nature1.jpg";
import Nature2 from "../../Image/nature2.jpg";
import Nature3 from "../../Image/nature3.jpg";
import Nature4 from "../../Image/nature4.jpg";
import Nature5 from "../../Image/nature5.jpg";


const Imageslider = () => {
  
    const settings = {
        infinite: true,
        dots: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        lazyLoad: true,
        autoplay: true,
        autoplaySpeed: 2000,
    }

    

    return (
      <div className="tag">
        <h2>Image Slider</h2>
        <Slider {...settings}>
         
            <div className="imgslider">
                <Slider {...settings}>
                    
                        <div>
                            <img src={Nature1}/>
                        </div>
                        <div>
                            <img src={Nature2}/>
                        </div>
                        <div>
                            <img src={Nature3}/>
                        </div>
                        <div>
                            <img src={Nature4}/>
                        </div>
                        <div>
                            <img src={Nature5}/>
                        </div>
                         
                  
                </Slider>
          </div>
          
        </Slider>
      </div>
    );
  }
  export default Imageslider;



