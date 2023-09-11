
import React from "react";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { MainSlider } from "../components/MainSlider";
import img_one from "../assets/img/img-01.jpg";
import img_two from "../assets/img/img-02.jpg";
import img_three from "../assets/img/img-03.jpg";
import img_four from "../assets/img/img-04.jpg";
import img_five from "../assets/img/img-05.jpg";
import "../css/Home.css"
import { Categories } from "../components/Categories";
import { NewItems } from "../components/NewItems";
import { BestSeller } from "../components/BestSeller";
import { RecommendForYou } from "../components/RecommendForYou";
import { Brands } from "../components/Brands";
 export function Home() {
    const images = [
        img_one,
        img_two,
        img_three,
        img_four,
        img_five,
      ];

    return (
        <main>
           <nav>
            <header>
                <Header />
            </header>
            <MainSlider images={images} />
           </nav>
            <section >
                <div className="home-title">
                    <h2>shop all categories</h2>
                </div>
                <Categories />
            </section>
            <section >
                <div className="home-title">
                    <h2>the newest items</h2>
                </div>
                <NewItems />
            </section>
            <section >
                <div className="home-title">
                    <h2>best seller</h2>
                </div>
                <BestSeller />
            </section>
            <section >
                <div className="home-title">
                    <h2>recommend for you</h2>
                </div>
                <RecommendForYou />
            </section>
            <section >
                <div className="home-title">
                    <h2>our brands</h2>
                </div>
                <Brands />
            </section>

           <footer>
             <Footer />
           </footer>
        </main>
    );
}
