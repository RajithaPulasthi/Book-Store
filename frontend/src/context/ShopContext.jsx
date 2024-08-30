// import { createContext } from "react";
// import { products } from "../assets/assets";

// export const ShopContext = createContext();

// const ShopContextProvider = (props) => {

//     const currency ='LKR';
//     const delivery_fee = 350;

//     const value = {
//         products, currency, delivery_fee
//     }
//     return(
// <ShopContext.Provider value={value}>
//         {props.children}
//         </ShopContext.Provider>
//     )
// }
// export default ShopContextProvider;

import { createContext } from "react";
import { products } from "../assets/assets"; // Ensure this path and import are correct

export const ShopContext = createContext(null); // It's safe to initialize with `null`

const ShopContextProvider = (props) => {
    const currency = 'LKR';
    const delivery_fee = 350;

    const value = {
        products,
        currency,
        delivery_fee
    };

    return (
        <ShopContext.Provider value={value}>
            {props.children}
        </ShopContext.Provider>
    );
};

export default ShopContextProvider;
