import { React, useState} from "react";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import "../css/Register.css";
export function Register () {
    const [account, ToggleAccount] = useState('signup');
    const toggleSignup = () => {
        account === 'signup' ? ToggleAccount ('login') : ToggleAccount('signup');
    } 
    return (
        <div className="register">
            <header>
                <Header />
            </header>
            <div className="register-wrapper">
            { account === 'signup' ?
        <form method="post" className="register-form">
            <div>
                <label htmlFor="username">Username*</label>
                <input
                type="text"
                id="username"
                name="username"
                required
                placeholder="UserName"
                />
            </div>
            <div>
                <label htmlFor="email">Email*</label>
                <input
                type="email"
                id="email"
                name="email"
                required
                placeholder="Email"
                />
            </div>
            <div>
                <label htmlFor="password">Password*</label>
                <input
                type="password"
                id="password"
                name="password"
                required
                placeholder="Password"
                />
            </div>
            <div>
                <input type="submit" value="Register" className="submit-register"/>
            </div>
            <p onClick={()=> toggleSignup()}>Already have an account</p>
        </form> 
        :
        <form method="get" className="login-form">
            <div>
                <label htmlFor="email">Email:</label>
                <input
                type="email"
                id="email"
                name="email"
                />
            </div>
            <div>
                <label htmlFor="password">Password:</label>
                <input
                type="password"
                id="password"
                name="password"
                />
            </div>
            <div>
                <input type="submit" value="Login" className="login-register"/>
            </div>
            <p onClick={() => toggleSignup()}>Create An Account</p>
        </form> 
        }
            </div>
            <footer>
                <Footer />
            </footer>
        </div>
    )
}