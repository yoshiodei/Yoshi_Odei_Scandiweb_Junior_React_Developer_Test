import React, { Component } from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Navbar from '../Navigation/Navbar';
import Cart from '../Pages/Cart';
import Category from '../Pages/Category';
import Products from '../Pages/Products';

class RoutesList extends Component {
    render() {
        return (
            <Router>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Category />} />
                    <Route path="/products" element={<Products />} />
                    <Route path="/cart" element={<Cart />} />
                </Routes>
            </Router>    
        );
    }
}

export default RoutesList;
