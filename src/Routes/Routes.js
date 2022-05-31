import React, { Component } from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Navbar from '../Navigation/Navbar';
import CartPage from '../Pages/CartPage';
import CategoryPage from '../Pages/CategoryPage';
import ProductsPage from '../Pages/ProductsPage';

class RoutesList extends Component {
    render() {
        return (
            <Router>
                <Navbar />
                <Routes>
                    <Route path="/" element={<CategoryPage />} />
                    <Route path="/products" element={<ProductsPage />} />
                    <Route path="/cart" element={<CartPage />} />
                </Routes>
            </Router>    
        );
    }
}

export default RoutesList;
