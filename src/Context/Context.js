import React, {createContext, useState} from 'react'

const Context = createContext()

const ContextProvider = ({ children }) => {
    
    const [cart, setCart] = useState([]);
    const [address, setAddress] = useState({
        firstName: '',
        lastName: '',
        address1: '',
        address2: '',
        city: '',
        state: '',
        zip: '',
        country: ''
    });

    const [payment, setPayment] = useState({name: '', cardNumber: '', expiry: '', cvv: ''})
    const totalArr = cart.map(item => Number(item.price) * item.quantity)
    const totalPrice = totalArr.reduce((a, b) => a + b, 0).toLocaleString()

    const addToCart = (item) => {
        setCart(prevCart => [...prevCart, item])
    }

    const removeProduct = (id) => {
        setCart(prevCart => prevCart.filter(item => item.id !== id))
    }

    const emptyCart = () => setCart([])
    
    const increaseProductQty = (id) => {
        const updatedCart = cart.map(item => item.id === id ? {...item, quantity: item.quantity + 1} : item )
        setCart(updatedCart)
    }

    const decreaseProductQty = (id) => {
        const updatedCart = cart.map(item => item.id === id ? {...item, quantity: item.quantity - 1} : item )
        setCart(updatedCart)
    }

    console.log(address)
    console.log(payment)

    return (
        <Context.Provider value={{ addToCart, cart, totalPrice, increaseProductQty, decreaseProductQty, removeProduct, emptyCart, setAddress, address, payment, setPayment }}>
            {children}
        </Context.Provider>
    )
}

export {Context, ContextProvider}