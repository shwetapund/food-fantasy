import { createContext, useEffect, useState } from "react";
import { food_list } from "../assets/assets";

export const StoreContext = createContext(null)

const StoreContextProvider = (props) =>{

    const [cartItems, setCartItems] = useState({});

    const addToCart = (itemId) =>{
        if(!cartItems[itemId]){
            setCartItems((prev) => ({...prev,[itemId]:1})) //value=1
        } //this if state will crete a new entry for food product if that product id is not available in our cartItem then only 
        else{
            setCartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}))
        } //if that product id is available in our cartItem then only this condition will increase the vlaue by 1
    }
    
    const removeFromCart = (itemId)=>{
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}))
    } //this removefromcart functionality will decrease the value by one

    useEffect(()=>{
        console.log(cartItems);
    },[cartItems])

    const contextValue = {
        food_list,
        cartItems,
        setCartItems,
        addToCart,
        removeFromCart
    }
    return(
        <StoreContext.Provider value={contextValue}>
        {props.children}
        </StoreContext.Provider>
    )
}

export { StoreContextProvider };

export default StoreContextProvider