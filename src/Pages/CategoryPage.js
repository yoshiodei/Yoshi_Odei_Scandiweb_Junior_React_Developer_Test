import React, { Component } from 'react';
import CategoryCard from '../Components/CategoryCard';
import '../Styles/Category/Category.styles.css';
import { GET_ALL_PRODUCTS } from '../EndPointQueries/queries';
import { Query } from "@apollo/client/react/components";
import ErrorPage from './ErrorPage';

class CategoryPage extends Component {
    render() {
        return (
            <div className='category'>
                <h1 className='category__header'>Category name</h1>
                <section className='card-section'>
                    <Query query={GET_ALL_PRODUCTS}>
                        {({loading, data, error}) => {
                            if(loading) return <div>...Loading</div>
                            if(error) return <ErrorPage />
                            const {products} = data.category;
                            return products.map(product => (
                                    <CategoryCard product={product} />
                                ))                          
                            }
                        }
                    </Query>
                </section>
            </div>
        );
    }
}

export default CategoryPage;
