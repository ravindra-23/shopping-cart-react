import React, {createContext, useState} from 'react'

const Context = createContext()

const ContextProvider = ({ children }) => {
    
    const [cart, setCart] = useState([]);
    const totalArr = cart.map(item => Number(item.price) * item.quantity)
    const totalPrice = totalArr.reduce((a, b) => a + b, 0).toLocaleString()

    const addToCart = (item) => {
        setCart(prevCart => [...prevCart, item])
    }
    

    console.log(cart)

    return (
        <Context.Provider value={{ addToCart, cart, totalPrice }}>
            {children}
        </Context.Provider>
    )
}

export {Context, ContextProvider}