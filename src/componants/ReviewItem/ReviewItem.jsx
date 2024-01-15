import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import './ReviewItem.css';

const ReviewItem = ({ product, handleRemoveFromCart }) => {
    const {id, name, img, price, quantity} = product;
    return (
        <div className='review-item'>
            <img src={img} alt="" />
            <div className='review-details'>
                <p className='product-title'>{name}</p>
                <p>Price: $<span className='orange-text'>{price}</span></p>
                <p>Order Quantity: <span className='orange-text'>{quantity}</span></p>
            </div>
            <div className='btn-sec'> 
            <button onClick={() => handleRemoveFromCart(id)} className='btn-delete'>
                <FontAwesomeIcon className='delete-icon' icon={faTrash}/>
            </button>
            </div>
        </div>
    );
};

export default ReviewItem;