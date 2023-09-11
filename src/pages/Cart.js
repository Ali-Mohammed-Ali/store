import React from "react";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

export function Cart () {
    return (
        <div className="cart">
            <header>
                <Header />
            </header>
            <footer>
                <Footer />
            </footer>
        </div>
    )
}