import { getShoppingCart } from "../utilities/fakedb";

const cartProductsLoadrer = async () => {
    const loadedProducts = await fetch('products.json');
    const products = await loadedProducts.json();

    // if data is in database, you have to use async await

    const storedCart = getShoppingCart(); 
    const savedCart = [];

    console.log(products);
    for(const id in storedCart){
        const addedProduct = products.find(pd => pd.id === id);
        if (addedProduct) {
            const quantity = storedCart[id];
            addedProduct.quantity = quantity;
            savedCart.push(addedProduct);
        }
    }
    // if you need to send two things, ass we didn't send 2 or more things
    // but you cand send 2 or more data in a Array or Object. Like
    // return [ products, saveCart ], cause now we'll send only one Array.
    // another option
    // return {products, cart: savedCart} 
    return savedCart;
}

export default cartProductsLoadrer;