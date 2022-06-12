import React, { Component } from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Navbar from '../Navigation/Navbar';
import CartPage from '../Pages/CartPage';
import CategoryPage from '../Pages/CategoryPage';
import PageNotFound from '../Pages/PageNotFound';
import ProductsPage from '../Pages/ProductsPage';

class RoutesList extends Component {

    render() {
        return (
            <Router>
                <Navbar />
                <Routes>
                    <Route path='/' element={<CategoryPage />} />
                    <Route path='/products/:id' element={<ProductsPage />} />
                    <Route path='/cart' element={<CartPage />} />
                    <Route path='*' element={<PageNotFound />} />
                </Routes>
            </Router>    
        );
    }
}

// const ProductQuery = () => {
//     return (
//         <Query query={GET_PRODUCT_LIST}>
//             {
//                 ({loading, error, data, client}) => {
//                     if (loading) return <div>Loading...{ console.log('data is', data, loading) }</div>
//                     if (error) return <div>Error...{ console.log('error is', error) }</div>
//                     return <div>Success...{ console.log('error is', data) }</div>
//                     // <RoutesList client={client} data={data} />
//                 }
//             }
//         </Query>
//     )
//   }

export default RoutesList;
