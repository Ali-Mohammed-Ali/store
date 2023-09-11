import { React } from "react";
import New_1 from "../assets/img/new-01.avif";
import New_2 from "../assets/img/new-02.avif";
import New_3 from "../assets/img/new-03.avif";
import New_4 from "../assets/img/new-04.avif";
import New_5 from "../assets/img/new-05.avif";
import New_6 from "../assets/img/new-06.avif";
import New_7 from "../assets/img/new-07.avif";
import New_8 from "../assets/img/new-08.avif";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faHeart, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import "../css/NewItems.css";

export function NewItems () {

    return (
        <div className="new-items">
            <div className="item">
                <div className="img" >
                    <img src={New_1} alt="fashion" title="fashion" />
                </div>
                <div className="details">
                    <p className="name">Collar Long Sleeves Printed </p>
                    <p className="price"> egp <span>279</span></p>
                    <div className="rate-mid">
                        <span>3.5</span>
                        <FontAwesomeIcon icon={faStar} className="icon"/>
                    </div>
                </div>
                <div className="for-hover">
                    <FontAwesomeIcon icon={faHeart} className="icon"/>
                    <FontAwesomeIcon icon={faShoppingCart} className="icon"/>
                </div>
            </div>
            <div className="item">
                <div className="img" >
                    <img src={New_2} alt="top" title="tops" />
                </div>
                <div className="details">
                    <p className="name">Coverage Non-wired Cross B</p>
                    <p className="price"> egp <span>99</span></p>
                    <div className="rate-low">
                        <span>3.5</span>
                        <FontAwesomeIcon icon={faStar} className="icon"/>
                    </div>
                </div>
                <div className="for-hover">
                    <FontAwesomeIcon icon={faHeart} className="icon"/>
                    <FontAwesomeIcon icon={faShoppingCart} className="icon"/>
                </div>
            </div>
            <div className="item">
                <div className="img" >
                    <img src={New_3} alt="t-shirt" title="t-shirt" />
                </div>
                <div className="details">
                    <p className="name">Black Horizontal Lines Printe</p>
                    <p className="price"> egp <span>201</span></p>
                    <div className="rate-good">
                        <span>3.5</span>
                        <FontAwesomeIcon icon={faStar} className="icon"/>
                    </div>
                </div>
                <div className="for-hover">
                    <FontAwesomeIcon icon={faHeart} className="icon"/>
                    <FontAwesomeIcon icon={faShoppingCart} className="icon"/>
                </div>
            </div>
            <div className="item">
                <div className="img" >
                    <img src={New_4} alt="under" title="under" />
                </div>
                <div className="details">
                    <p className="name">Mid-Rise Swim Shorts </p>
                    <p className="price"> egp <span>195</span></p>
                    <div className="rate-mid">
                        <span>3.5</span>
                        <FontAwesomeIcon icon={faStar} className="icon"/>
                    </div>
                </div>
                <div className="for-hover">
                    <FontAwesomeIcon icon={faHeart} className="icon"/>
                    <FontAwesomeIcon icon={faShoppingCart} className="icon"/>
                </div>
            </div>
            <div className="item">
                <div className="img" >
                    <img src={New_5} alt="bra" title="bra" />
                </div>
                <div className="details">
                    <p className="name">Bra - For Women Multicolour </p>
                    <p className="price"> egp <span>99</span></p>
                    <div className="rate-good">
                        <span>3.5</span>
                        <FontAwesomeIcon icon={faStar} className="icon"/>
                    </div>
                </div>
                <div className="for-hover">
                    <FontAwesomeIcon icon={faHeart} className="icon"/>
                    <FontAwesomeIcon icon={faShoppingCart} className="icon"/>
                </div>
            </div>
            <div className="item">
                <div className="img" >
                    <img src={New_6} alt="Plain" title="Plain" />
                </div>
                <div className="details">
                    <p className="name">Plain Spaghetti V NECK </p>
                    <p className="price"> egp <span>159</span></p>
                    <div className="rate-good">
                        <span>3.5</span>
                        <FontAwesomeIcon icon={faStar} className="icon"/>
                    </div>
                </div>
                <div className="for-hover">
                    <FontAwesomeIcon icon={faHeart} className="icon"/>
                    <FontAwesomeIcon icon={faShoppingCart} className="icon"/>
                </div>
            </div>
            <div className="item">
                <div className="img" >
                    <img src={New_7} alt="Plain" title="Plain" />
                </div>
                <div className="details">
                    <p className="name">Calf Socks (Pack of 5)  </p>
                    <p className="price"> egp <span>104</span></p>
                    <div className="rate-mid">
                        <span>3.5</span>
                        <FontAwesomeIcon icon={faStar} className="icon"/>
                    </div>
                </div>
                <div className="for-hover">
                    <FontAwesomeIcon icon={faHeart} className="icon"/>
                    <FontAwesomeIcon icon={faShoppingCart} className="icon"/>
                </div>
            </div>
            <div className="item">
                <div className="img" >
                    <img src={New_8} alt="Plain" title="Plain" />
                </div>
                <div className="details">
                    <p className="name">Hooded Neck Long Sleeve S  </p>
                    <p className="price" style={{margin:0}}> egp <span>104</span></p>
                    <div className="rate-mid">
                        <span>3.5</span>
                        <FontAwesomeIcon icon={faStar} className="icon"/>
                    </div>
                </div>
                <div className="for-hover">
                    <FontAwesomeIcon icon={faHeart} className="icon"/>
                    <FontAwesomeIcon icon={faShoppingCart} className="icon"/>
                </div>
            </div>
        </div>
    )
}