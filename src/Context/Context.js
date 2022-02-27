import React, {createContext, useState} from 'react'

const Context = createContext()

const ContextProvider = ({ children }) => {
    
    const [cart, setCart] = useState([]);

    const addToCart = (item) => {
        setCart(prevCart => [...prevCart, item])
    }

    console.log(cart)

    return (
        <Context.Provider value={{ addToCart, cart }}>
            {children}
        </Context.Provider>
    )
}

export {Context, ContextProvider}