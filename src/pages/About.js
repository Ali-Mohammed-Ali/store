import React from "react";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import "../css/About.css";
import AboutImg from "../assets/img/about.jpg"

export function About () {
    return (
        <div className="about">
            <header>
                <Header />
            </header>
            <section className="about-container">
                <div className="about-title">
                        <h2>We belive the best <br></br>experience always wins</h2>
                </div>
                <div className="about-img" > 
                    <img src={AboutImg} alt="about" title="about" /> 
                </div>
                <p className="disc" >
                    Nam maximus nunc a augue pulvinar, non euismod mauris tempus. Cras non elit vel magna molestie pellentesque in eu dui. Donec laoreet quis erat vitae finibus. Vestibulum enim eros, porta eget quam et, euismod dictum elit. Nullam eu tempus magna. Fusce malesuada nisi id felis placerat porta vel sed augue. Vivamus mollis mauris vitae rhoncus egestas. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Phasellus luctus tempor ante in dapibus. Curabitur sed lectus tempus, pulvinar magna vel, laoreet sapien.
                    <br></br>
                    <br></br>

                    Pellentesque sodales ornare nulla. Nullam elementum est quis tortor ultricies tristique. Nulla tempor eros quis arcu imperdiet, rutrum pharetra mi lobortis. Donec tortor ipsum, maximus quis pellentesque vel, bibendum eu mauris.
                    <br></br>
                    <br></br>

                    Nulla bibendum tincidunt ligula, a placerat dolor viverra eget. Maecenas id diam sed ligula facilisis lacinia. Nunc maximus est ut sem varius suscipit. Phasellus vel tellus viverra, lacinia metus et, faucibus tellus. Etiam hendrerit est viverra eros mollis, a laoreet ante dictum. Aliquam erat volutpat. Vivamus tempor blandit dui vel interdum. Etiam ut libero eget ex sodales lobortis vitae at est. Nulla facilisis velit nec pellentesque commodo. Phasellus suscipit sodales magna in vehicula.
                    <br></br>
                    <br></br>

                    Ut ac semper ligula. Pellentesque laoreet justo nec ex sodales euismod. Aliquam orci tortor, bibendum nec ultricies ac, auctor nec purus. Maecenas in consectetur erat. Proin ut nisi ut ipsum blandit vehicula. Nulla orci eros, ornare vitae tristique et, iaculis nec mauris. Aliquam ornare, turpis sed lobortis ultricies, lectus felis lacinia lacus, et convallis ipsum erat sed tortor. Proin molestie sagittis augue, id sollicitudin libero congue vel. Suspendisse id elementum nunc. Donec in neque vitae nisl consequat accumsan.
                </p>
            </section>
            <footer>
                <Footer />
            </footer>
        </div>
    )
}