import React from "react";
import { Link } from "react-router-dom";

import "../css/Footer.css";
import Facebook from "../assets/img/facebook.svg";
import Twitter from "../assets/img/twitter-sign.svg";
import Linkedin from "../assets/img/linkedin-logo.svg";
import Instagram from "../assets/img/instagram.svg";
import Master from "../assets/img/card-mastercard.svg";
import Value from "../assets/img/valu.svg";
import Cash from "../assets/img/cod-en.svg";
import Amex from "../assets/img/card-amex.svg";
import Visa from "../assets/img/card-visa.svg";

export function Footer () {
    return (
        <div className="footer">
            <div className="pay-gates">
                <img src={Master} alt="master" title="master"/>
                <img src={Value} alt="value" title="value"/>
                <img src={Cash} alt="cash" title="cash"/>
                <img src={Amex} alt="amex" title="amex"/>
                <img src={Visa} alt="visa" title="visa"/>
            </div>
            <div className="back-links">
                <Link to="/">
                    privacy policy
                </Link>
                <Link to="/">
                    terms of sale
                </Link>
                <Link to="/">
                    terms of use
                </Link>
                <Link to="/">
                    sell with us
                </Link>
                <Link to="/">
                    warranty policy
                </Link>
                <Link to="/">
                    careers
                </Link>
            </div>
            <div className="social">
                <Link to="https://www.facebook.com/">
                    <img src={Facebook} alt="Facebook" title="Facebook" />
                </Link>
                <Link to="https://www.instagram.com/">
                    <img src={Instagram} alt="Instagram" title="Instagram" />
                </Link>
                <Link to="https://www.linkedin.com/">
                 <img src={Linkedin} alt="Linkedin" title="Linkedin" />
                </Link>
                <Link to="https://www.twitter.com/">
                 <img src={Twitter} alt="Twitter" title="Twitter" />
                </Link>
            </div>
            <div className="right">
            &copy; 2023 store all rights reserved
            </div>

        </div>
    )
}