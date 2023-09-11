import React from 'react';
import Shirt from "../assets/img/shirt.jpg";
import Tshirt from "../assets/img/t-shirt.jpg";
import Bottom from "../assets/img/bottoms.jpg";
import SunGlasses from "../assets/img/sunglasses.jpg";
import Dress from "../assets/img/dress.jpg";
import Sneakers from "../assets/img/sneakers.jpg";
import Handbag from "../assets/img/handbag.jpg";
import Watches from "../assets/img/watchers.jpg";
import Tie from "../assets/img/tie.jpg";

import '../css/Categories.css';




export function Categories () {
    return (
        <div className='container'>
            <div className='cat'>
                <div className='img'>
                  <img src={Shirt} alt='Shirt' title='Shirt' />
                </div>
                <h5 className='name'>shirts</h5>
            </div>
            <div className='cat'>
                <div className='img'>
                  <img src={Tshirt} alt='T-shirt' title='T-shirt' />
                </div>
                <h5 className='name'>t-shirts</h5>
            </div>
            <div className='cat'>
                <div className='img'>
                  <img src={Bottom} alt='Bottom' title='Bottom' />
                </div>
                <h5 className='name'>bottoms</h5>
            </div>
            <div className='cat'>
                <div className='img'>
                  <img src={SunGlasses} alt='SunGlasses' title='SunGlasses' />
                </div>
                <h5 className='name'>sunglasses</h5>
            </div>
            <div className='cat'>
                <div className='img'>
                  <img src={Dress} alt='Dress' title='Dress' />
                </div>
                <h5 className='name'>dresses</h5>
            </div>
            <div className='cat'>
                <div className='img'>
                  <img src={Sneakers} alt='Sneakers' title='Sneakers' />
                </div>
                <h5 className='name'>sneakers</h5>
            </div>
            <div className='cat'>
                <div className='img'>
                  <img src={Handbag} alt='Handbag' title='Handbag' />
                </div>
                <h5 className='name'>handbags</h5>
            </div>
            <div className='cat'>
                <div className='img'>
                  <img src={Watches} alt='Watches' title='Watches' />
                </div>
                <h5 className='name'>watches</h5>
            </div>
            <div className='cat'>
                <div className='img'>
                  <img src={Tie} alt='Tie' title='Tie' />
                </div>
                <h5 className='name'>ties</h5>
            </div>
        </div>
    )
}