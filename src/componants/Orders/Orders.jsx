import { Link, useLoaderData } from "react-router-dom";
import Cart from "../Cart/Cart";
import ReviewItem from "../ReviewItem/ReviewItem";
import './Orders.css';
import { useState } from "react";
import { deleteShoppingCart, removeFromDb } from "../../utilities/fakedb";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCreditCard } from '@fortawesome/free-solid-svg-icons';


const Orders = () => {
    const savedCart = useLoaderData();
    const [cart, setCart] = useState(savedCart);

    const handleRemoveFromCart = (id) => {
        const remaining = cart.filter(product => product.id !== id);
        setCart(remaining);
        removeFromDb(id);
    }

    const handleClearCart = () => {
        setCart([]);
        deleteShoppingCart();
    }
    
    return (
        <div className='shop-container'>
            <div className='review-container'>
                {
                    cart.map((product, index) => <ReviewItem key={index} product={product} handleRemoveFromCart={handleRemoveFromCart}></ReviewItem>)
                }
            </div>
            <div className="cart-container">
                <Cart 
                cart={cart} 
                handleClearCart={handleClearCart}
                >
                    <Link className='proceed-link' to='/checkout'>
                    <button className='btn-proceed'>
                        Proceed Checkout <FontAwesomeIcon icon={faCreditCard}/>
                    </button>
                    </Link>
                </Cart>
            </div>
        </div>
    );
};

export default Orders;