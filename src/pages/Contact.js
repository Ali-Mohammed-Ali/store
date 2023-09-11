import React from "react";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import "../css/Contact.css";
import ContactImg from "../assets/img/contact.jpg";

export function Contact () {
    return (
        <div className="contact">
            <header>
                <Header />
            </header>
            <section className="all">
                <div className="one">
                    <div className="part">
                        <p>United States Office</p>
                        <p>205 Middle Road, 2nd Floor, New York</p>
                        <a href="tel:+1 1234 567 88">+1 1234 567 88</a>
                        <a href="mailto:info@example.com">info@example.com</a>
                    </div>
                    <div className="part">
                        <p>United Kingdom Office</p>
                        <p>79 Manor Way, 2nd Floor, Great Fransham</p>
                        <a href="tel:+49 1234 567 88">+49 1234 567 88</a>
                        <a href="mailto:contact@example.com">contact@example.com</a>
                    </div>
                    <div className="part">
                        <p>Germany Office</p>
                        <p>Holstenwall 86, Sachsen-Anhalt, Zschornewitz</p>
                        <a href="tel:+44 1234 567 88">+44 1234 567 88</a>
                        <a href="mailto:info@example.com">info@example.com</a>
                    </div>
                </div>
                <div className="two">
                    <div className="part-one">
                        <p>Nam maximus nunc a augue pulvinar, non euismod mauris tempus. Cras non elit vel magna molestie pellentesque in eu dui. Donec laoreet quis erat vitae finibus. Vestibulum enim eros, porta eget quam et, euismod dictum elit.</p>
                        <div className="img">
                            <img src={ContactImg} alt="" />
                        </div>
                    </div>
                    <div className="part-two">
                       <p>Get in Touch</p>
                       <form method="get">
                            <div className="input-01">
                                <input type="text" placeholder="Your Name" required />
                                <input type="email" placeholder="Your Email" required/>
                            </div>
                            <div className="input-02">
                            <input type="text" placeholder="Subject" required/>

                            </div>
                            <div className="input-03">
                                <textarea placeholder="Your Message"/>
                            </div>
                            <input type="submit" value="Send Message" id="buttonn"/>
                       </form>
                    </div>
                </div>
            </section>
            <footer>
                <Footer />
            </footer>
        </div>
    )
}