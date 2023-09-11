import React, { useState, useEffect } from 'react';
import '../css/ImagesSlider.css'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faCircleArrowRight, faCircleArrowLeft } from '@fortawesome/free-solid-svg-icons';


export function MainSlider ({ images }) {

    const [currentSlide, setCurrentSlide] = useState(0);

    const nextSlide = () => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
    };
  
    const prevSlide = () => {
      setCurrentSlide(
        (prevSlide) => (prevSlide - 1 + images.length) % images.length
      );
    };
    useEffect(() => {
        const interval = setInterval(nextSlide, 4000); 
    
        return () => {
          clearInterval(interval); 
        };
      }, []);
    return (
        <div className="slider-container">
          <button className="prev-button" onClick={prevSlide}>
          <FontAwesomeIcon icon={faCircleArrowLeft} />
          </button>
          <img
            className="slider-image"
            src={images[currentSlide]}
            alt={`Slide ${currentSlide + 1}`}
          />
          <button className="next-button" onClick={nextSlide}>
             <FontAwesomeIcon icon={faCircleArrowRight} />
          </button>
        </div>
      );
    };