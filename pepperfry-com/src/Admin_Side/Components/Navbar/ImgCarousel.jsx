import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';


function ImgCarousel(){
   
    return (

          <Carousel  showThumbs={false} autoPlay={true} interval={3000} infiniteLoop>

                <div style={{cursor : "pointer" }}>

                    <img style={{width:"1000px" }}  src="https://ii1.pepperfry.com/media/wysiwyg/banners/Web_Promo_2x_1601_ND.jpg" alt="carousel"/>
                   
                </div>
                <div style={{cursor : "pointer" }}>

                    <img style={{width : "1000px" }} src="https://ii2.pepperfry.com/media/wysiwyg/banners/Hp_section2_web_04012023_1.jpg" alt="carousel"/>
             
                </div>
                <div style={{cursor : "pointer" }}>

                    <img style={{width : "1000px" }} src="https://ii3.pepperfry.com/media/wysiwyg/banners/Hp_section2_web_04012023_2.jpg" alt="carousel"/>
         
                </div>
                <div style={{cursor : "pointer" }}>

                    <img style={{width : "1000px" }} src="https://ii1.pepperfry.com/media/wysiwyg/banners/Hp_section2_web_04012023_3.jpg" alt="carousel"/>
                
                </div>

            </Carousel>
 
    );
}

export default ImgCarousel;