
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "../../style/slider.css"
   

export const Slider=({img})=>{
 
    return(
        <div className="slider">
            <Carousel>
                <div>
                    <img src={img[0]} alt="" />
                </div>
                <div>
                    <img src={img[1]} alt="" />
                </div>
                <div>
                    <img src={img[2]} alt="" />
                </div>
                <div>
                    <img src={img[3]} alt="" />
                </div>
            </Carousel>
        </div>
    )
}
