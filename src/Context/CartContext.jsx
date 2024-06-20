import React, { createContext, useState, useEffect, useContext } from 'react';

export const CartContext = createContext();

export const useCart = () => {
    return useContext(CartContext);
};

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);
    const [nextPurchaseItems, setNextPurchaseItems] = useState([]);

    // Initialize from localStorage
    useEffect(() => {
        const storedCartItems = localStorage.getItem('cartItems');
        const storedNextPurchaseItems = localStorage.getItem('nextPurchaseItems');
        if (storedCartItems) {
            setCartItems(JSON.parse(storedCartItems));
        }
        if (storedNextPurchaseItems) {
            setNextPurchaseItems(JSON.parse(storedNextPurchaseItems));
        }
    }, []);

    // Update localStorage
    useEffect(() => {
        localStorage.setItem('cartItems', JSON.stringify(cartItems));
    }, [cartItems]);

    useEffect(() => {
        localStorage.setItem('nextPurchaseItems', JSON.stringify(nextPurchaseItems));
    }, [nextPurchaseItems]);

    const addToCart = (product) => {
        setCartItems((prevItems) => {
            const existingItem = prevItems.find(item => item.id === product.id);
            if (existingItem) {
                return prevItems.map(item =>
                    item.id === product.id
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                );
            } else {
                return [...prevItems, { ...product, quantity: 1 }];
            }
        });
    };

    const updateCartItem = (itemId, action) => {
        setCartItems((prevItems) =>
            prevItems.map(item =>
                item.id === itemId
                    ? {
                        ...item,
                        quantity: action === 'increment' ? item.quantity + 1 : Math.max(1, item.quantity - 1),
                    }
                    : item
            )
        );
    };

    const removeCartItem = (itemId) => {
        setCartItems((prevItems) => prevItems.filter(item => item.id !== itemId));
    };

    const moveToNextPurchase = (itemId) => {
        const item = cartItems.find(item => item.id === itemId);
        if (item) {
            setNextPurchaseItems([...nextPurchaseItems, item]);
            removeCartItem(itemId);
        }
    };
    const removeNextPurchaseItem = (itemId) => {
        setNextPurchaseItems((prevItems) => prevItems.filter(item => item.id !== itemId));
    };
    

    return (
        <CartContext.Provider value={{ cartItems, nextPurchaseItems, addToCart, updateCartItem, removeCartItem, moveToNextPurchase  ,removeNextPurchaseItem}}>
            {children}
        </CartContext.Provider>
    );
};
