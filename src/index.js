import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';

import { library } from '@fortawesome/fontawesome-svg-core';

import { faCheckSquare,
    faCoffee,
    faHeart,
    faShoppingCart,
    faUser,
    faBars,
    faCircleArrowRight,
    faCircleArrowLeft,
    faStar,



} from '@fortawesome/free-solid-svg-icons';

library.add( faCheckSquare,
    faCoffee,
    faHeart,
    faShoppingCart,
    faUser,
    faBars,
    faCircleArrowRight,
    faCircleArrowLeft,
    faStar,

    )


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />
);


