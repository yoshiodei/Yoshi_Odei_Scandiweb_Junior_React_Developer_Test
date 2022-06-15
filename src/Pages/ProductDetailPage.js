import React, { Component } from 'react';
import '../Styles/Products/Products.styles.css';
import { GET_PRODUCT_DETAIL } from '../EndPointQueries/queries';
import { Query } from "@apollo/client/react/components";
import ProductAttribute from '../Components/ProductAttribute';
import { connect } from 'react-redux';
import { addToCart } from '../Redux/action';

class ProductDetailPage extends Component {
    constructor(props){
        super(props);
    }

    addProductToCart = (product) =>{
        let cartProduct = {...product, quantity: 1};
        let foundItemInCart = this.props.cartItems.find(item => item.id == product.id);
        if(!foundItemInCart) this.props.addToCart(cartProduct);
    }

    render() {
        const {currencyLabel} = this.props; 

        return (
            <>
                <Query query={GET_PRODUCT_DETAIL} variables={{ product_id: window.location.pathname.split('/')[2] }} >
                        {({loading, data, error}) => {
                            if(loading) return <div>...Loading</div>
                            if(error) return <div>...Error {console.log('error',error)}</div>
                            const {product} = data;
                            const price = product.prices?.find(price => price.currency.label === currencyLabel.label);
                            return (
                                <section className='products'>
                                    <div className='products__product-tile'>
                                        <div className='products__alternative-product-div'>
                                            {
                                                product.gallery.map((image,index)=>
                                                    (
                                                        <div key={index} className={index == 0 ? 'products__alternative-image-div--selected' : 'products__alternative-image-div'} >
                                                            <img src={image} alt='product' className='products__alternative-image' />
                                                        </div>
                                                    )
                                                )
                                            }
                                        </div>
                                        <div className='products__main-product-div'>
                                            <img src={product.gallery[0]} alt='product' className='products__main-product-image'/>   
                                        </div>
                                    </div>
                                    <div className='product-detail'>
                                        <div className='product-detail__product-title-div'>
                                            <h2 className='product-detail__product-name product-detail__product-name--boldened'>{product.brand}</h2>
                                            <h2 className='product-detail__product-name'>{product.name}</h2>
                                        </div>

                                        {
                                            product.attributes.map(attribute => (
                                                <ProductAttribute attribute={attribute} />
                                            ))
                                        }

                                        <div className='product-detail__price-div'>
                                            <h4 className='product-detail__header'>PRICE:</h4>
                                            <p className='product-detail__price'>{`${price?.currency?.symbol}${price?.amount}`}</p>
                                        </div>

                                        <button className='product-detail__submit-button' onClick={()=> this.addProductToCart(product)}>ADD TO CART</button>

                                        <div className='product-detail__dscription-div'
                                             dangerouslySetInnerHTML={{ __html: product.description}} >  
                                        </div>
                                    </div>
                                </section>
                             )                         
                            }
                        }
                    </Query>
            </>
        );
    }
}

const mapStateToProps = (state) => {
    return { 
        cartItems : state.cartItems,
        currencyLabel : state.currency
    }
}

const mapDispatchToProps = { addToCart };

export default connect(mapStateToProps,mapDispatchToProps)(ProductDetailPage);
