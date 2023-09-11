import React from 'react';  
import OwlCarousel from 'react-owl-carousel';  
import 'owl.carousel/dist/assets/owl.carousel.css';  
import 'owl.carousel/dist/assets/owl.theme.default.css';  
import '../css/BestSeller.css'; 
import img_1 from "../assets/img/owl-01.jpg";
import img_2 from "../assets/img/owl-02.jpg";
import img_3 from "../assets/img/owl-03.jpg";
import img_4 from "../assets/img/owl-04.jpg";
import img_5 from "../assets/img/owl-05.jpg";
import img_6 from "../assets/img/owl-06.jpg";
import img_7 from "../assets/img/owl-07.jpg";



export function BestSeller () {
    
    return (  
        <div>  
            <div class='container-fluid' >            
                <OwlCarousel items={5}  
                className="owl-theme"  
                loop  
                nav  
                margin={8} >  
                <div ><img  className="img" src= {img_1} alt=''/></div>  
                <div><img  className="img" src= {img_2} alt=''/></div>  
                <div><img  className="img" src= {img_3} alt=''/></div>  
                <div><img  className="img" src= {img_4} alt=''/></div>  
                <div><img className="img" src= {img_5} alt=''/></div>  
                <div><img className="img" src= {img_6} alt=''/></div>  
                <div><img className="img" src= {img_7} alt=''/></div>  
            </OwlCarousel>  
            </div>  
         </div>  
      )  
}