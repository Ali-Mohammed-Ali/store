import React from 'react';  
import OwlCarousel from 'react-owl-carousel';  
import 'owl.carousel/dist/assets/owl.carousel.css';  
import 'owl.carousel/dist/assets/owl.theme.default.css';  
import '../css/BestSeller.css'; 
import brand_01 from "../assets/img/brand-01.avif";
import brand_02 from "../assets/img/brand-02.avif";
import brand_03 from "../assets/img/brand-03.avif";
import brand_04 from "../assets/img/brand-04.avif";
import brand_05 from "../assets/img/brand-05.avif";
import brand_06 from "../assets/img/brand-06.avif";
import brand_07 from "../assets/img/brand-07.avif";
import brand_08 from "../assets/img/brand-08.avif";
import brand_09 from "../assets/img/brand-09.avif";
import brand_10 from "../assets/img/brand-10.avif";



export function Brands () {
    
    return (  
        <div>  
            <div class='container-fluid' >            
                <OwlCarousel items={5}  
                className="owl-theme"  
                loop  
                nav  
                margin={8} >  
                <div ><img  className="img" src= {brand_01} alt=''/></div>  
                <div><img  className="img" src= {brand_02} alt=''/></div>  
                <div><img  className="img" src= {brand_03} alt=''/></div>  
                <div><img  className="img" src= {brand_04} alt=''/></div>  
                <div><img className="img" src= {brand_05} alt=''/></div>  
                <div><img className="img" src= {brand_06} alt=''/></div>  
                <div><img className="img" src= {brand_07} alt=''/></div>  
                <div><img className="img" src= {brand_08} alt=''/></div>  
                <div><img className="img" src= {brand_09} alt=''/></div>  
                <div><img className="img" src= {brand_10} alt=''/></div>  
            </OwlCarousel>  
            </div>  
         </div>  
      )  
}