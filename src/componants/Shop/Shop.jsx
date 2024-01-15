import { useState } from 'react';
import './Shop.css';
import { useEffect } from 'react';
import Product from '../Product/Product';
import Cart from '../Cart/Cart';
import { addToDb, getShoppingCart } from '../../utilities/fakedb';

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect( () => {
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    }, []);

    useEffect( ()=>{
        const storeCart = getShoppingCart();
        const saveCart = [];
        //step 1: get id
        for (const id in storeCart){
            // step 2: get the product using by id
            const addedProduct = products.find(product => product.id === id);
            if (addedProduct) {
                // step 3: get quantity of the product
                const quantity = storeCart[id];
                addedProduct.quantity = quantity;
                // Step 4: add the added product to the saved cart
                saveCart.push(addedProduct);
            }
           
            // console.log('Product added' , addedProduct);
        }
        // step 5: set the cart
        setCart(saveCart);
    }, [products])

    const handleAddToCart = (product) => {
        // cart.push(product);
        let newCart = [];
        // const newCart = [...cart, product];
        // if product does't exist in the cart, then set the quantity =1
        // if update quantity by 1 
        const exists = cart.find(pd => pd.id === product.id);
        if (!exists) {
            product.quantity = 1;
            newCart = [...cart, product];
        }
        else{
            exists.quantity = exists.quantity + 1;
            const remaining = cart.filter(pd => pd.id !== product.id);
            newCart = [...remaining, exists];
        }

        setCart(newCart);
        addToDb(product.id);

    }
    return (
        <div className="shop-container">
            <div className="product-container">
                {
                products.map(product=> <Product handleAddToCart={handleAddToCart} product={product} key={product.id}></Product>)
                }
            </div>
            <div className="cart-container">
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;