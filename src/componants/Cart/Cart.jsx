import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import './Cart.css';

const Cart = ({ cart, handleClearCart, children }) => {
    // const cart = props.cart; option 1
    // const {cart} = props; option 2, option 3 ({cart})
    console.log(cart);
    
    let totalPrice = 0;
    let totalShipping = 0;
    let quantity = 0;

    for (const product of cart) {
        // if(product.quantity === 0){
        //     product.quantity = 1;
        // }
        // product.quantity = product.quantity || 1;
        
        totalPrice = totalPrice + product.price * product.quantity;
        totalShipping = totalShipping + product.shipping;
        quantity = quantity + product.quantity;
    }
    const tax = totalPrice*6/100;
    const grandTotal = totalPrice + totalShipping + tax;
    return (
        <div className='cart-part'>
            <h3>Order Summery</h3>
            <p>Selected Items: {quantity}</p>
            <p> Total Price: ${totalPrice}</p>
            <p>Total Shipping: ${totalShipping} </p>
            <p> Tax: ${tax.toFixed(2)}</p>
            <h4>Grand Total: ${grandTotal.toFixed(2)}</h4>

            <button onClick={handleClearCart} className='btn-clear-cart'>
                <span>Clear Cart</span> <FontAwesomeIcon  icon={faTrash}/>
            </button>
            {children}
            {/* <button>
                Review Order <FontAwesomeIcon className='review-icon' icon={faArrowRight}/>
            </button> */}
        </div>
    );
};

export default Cart;