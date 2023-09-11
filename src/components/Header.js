import React from "react";
import { useRef, useState  } from "react";
import { Link } from "react-router-dom";
import "../css/Header.css";
import Logo from "../assets/img/logo.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart, faShoppingCart, faUser, faBars } from '@fortawesome/free-solid-svg-icons';
import { useLocation } from "react-router-dom";
export function Header() {
    const location = useLocation();
    const myRef = useRef(null);
    const [isToggled, setIsToggled] = useState(false);
    function dropDown  ()  {
        setIsToggled(!isToggled);
        if (myRef.current) {
            myRef.current.style.display = 'flex';
          }
    }
    return(
        <div className="header">
            <div className="logo">
                <Link to="/"><img src={Logo} title="logo" alt="logo"/></Link>
            </div>
            <ul className="links">
                <li><Link to="/" className={location.pathname === '/' ? 'active' : ''}>home</Link></li>
                <li><Link to="/about" className={location.pathname === '/about' ? 'active' : ''}>about</Link></li>
                <li><Link to="/contact" className={location.pathname === '/contact' ? 'active' : ''}>contact us</Link></li>
            </ul>
            <div className="drop-menu">
                <div className="menu-icon" onClick={dropDown} >    
                    <FontAwesomeIcon icon={faBars} />
                </div>
            {!isToggled ? ''  
                : 
                <ul className="menu" ref={myRef}>
                    <li><Link to="/" className={location.pathname === '/' ? 'active' : ''}>home</Link></li>
                    <li><Link to="/about" className={location.pathname === '/about' ? 'active' : ''}>about</Link></li>
                    <li><Link to="/contact" className={location.pathname === '/contact' ? 'active' : ''}>contact us</Link></li>
                </ul>
                }

            </div>
            <ul className="icons">
                  <Link to="/favorite" >   <FontAwesomeIcon icon={faHeart}  className={location.pathname === '/favorite' ? 'active' : 'icon'}/></Link>
                   <Link to="/cart" > <FontAwesomeIcon icon={faShoppingCart} className={location.pathname === '/cart' ? 'active' : 'icon'} /></Link>
                    <Link to="/register" ><FontAwesomeIcon icon={faUser} className={location.pathname === '/register' ? 'active' : 'icon'} /></Link>
                
            </ul>
        </div>
    )
}
