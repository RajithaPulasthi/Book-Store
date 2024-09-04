// import React, { createContext, useEffect, useState } from "react";
// import { fetchProducts, images } from "../assets/assets"; // Ensure this path and import are correct

//  export const ShopContext = createContext(null);

// const ShopContextProvider = (props) => {
//     const currency = 'LKR';
//     const delivery_fee = 350;
//     const [search, setSearch] = useState('');
//     const [showSearch, setShowSearch] = useState(false);
//     const [cartItems, setCartItems] = useState({});

//     const addToCart = (itemId) => {
//         setCartItems(prevCartItems => ({
//             ...prevCartItems,
//             [itemId]: (prevCartItems[itemId] || 0) + 1
//         }));
//     };

//     const getCartCount = () => {
//         return Object.values(cartItems).reduce((total, count) => total + count, 0);
//     };

//     useEffect(() => {
//         console.log('Cart items updated:', cartItems);
//     }, [cartItems]);

//     const updateQuantity = async (itemID, quantity) => {
//         let cartData = structuredClone(cartItems);

//         // If quantity is zero, remove the item from the cart
//         if (quantity <= 0) {
//             delete cartData[itemID];
//         } else {
//             cartData[itemID] = quantity;  // Update the quantity
//         }

//         setCartItems(cartData);
//     };

//     // Function to clear the cart
//     const clearCart = () => {
//         setCartItems({});
//     };
// let products ;

//     const getProducts = async () => {
//         try{
//         const res = await fetchProducts();

//         return res
//         }
//         catch(error){
//             console.log(error);
//         }
//     }
//     products = getProducts();
//     console.log('Shop context',products);

//     const contextValue = {
//         products,
//         images,
//         currency,
//         delivery_fee,
//         search,
//         setSearch,
//         showSearch,
//         setShowSearch,
//         cartItems,
//         addToCart,
//         getCartCount,
//         updateQuantity,
//         clearCart, // Add clearCart to context value
//     };

//     return (
//         <ShopContext.Provider value={contextValue}>
//             {props.children}
//         </ShopContext.Provider>
//     );
// };

// export default ShopContextProvider;

import React, { createContext, useEffect, useState } from "react";
import { fetchProducts, images } from "../assets/assets";

export const ShopContext = createContext(null);

const ShopContextProvider = (props) => {
    const currency = 'LKR';
    const delivery_fee = 350;
    const [search, setSearch] = useState('');
    const [showSearch, setShowSearch] = useState(false);
    const [cartItems, setCartItems] = useState({});
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    const addToCart = (itemId) => {
        setCartItems(prevCartItems => ({
            ...prevCartItems,
            [itemId]: (prevCartItems[itemId] || 0) + 1
        }));
    };

    const getCartCount = () => {
        return Object.values(cartItems).reduce((total, count) => total + count, 0);
    };

    useEffect(() => {
        const fetchAndSetProducts = async () => {
            try {
                const fetchedProducts = await fetchProducts();
                setProducts(fetchedProducts);
            } catch (error) {
                console.error('Error fetching products:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchAndSetProducts();
    }, []);

    const updateQuantity = async (itemID, quantity) => {
        let cartData = structuredClone(cartItems);

        if (quantity <= 0) {
            delete cartData[itemID];
        } else {
            cartData[itemID] = quantity;
        }

        setCartItems(cartData);
    };

    const clearCart = () => {
        setCartItems({});
    };

    const contextValue = {
        products,
        images,
        currency,
        delivery_fee,
        search,
        setSearch,
        showSearch,
        setShowSearch,
        cartItems,
        addToCart,
        getCartCount,
        updateQuantity,
        clearCart,
        loading // Add loading to context
    };

    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    );
};

export default ShopContextProvider;
