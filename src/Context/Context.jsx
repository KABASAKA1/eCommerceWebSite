import React, { createContext, useState } from "react";
import all_product from "../Components/Assets/all_product";

export const Context = createContext(null);

const ContextProvider = (props) => {
    // ✅ LocalStorage’dan veriyi çekme fonksiyonu
    const getDefaultCart = () => {
        const cart = localStorage.getItem("cart");
        return cart ? JSON.parse(cart) : []; // Boş obje yerine boş array
    };

    const [cartItems, setCartItems] = useState(getDefaultCart);

    const getCartProduct = () => {
        return all_product.filter(product =>
            cartItems.some((item) => item.id === product.id)
        );
    };

    // ✅ Ürünü sepete ekleme fonksiyonu
    const addToCart = (itemId, amount) => {
        const product = all_product.filter(product => product.id === itemId);
        const newItem = { id: itemId, amount: amount, name: product.name, image: product.image, price: product.new_price };
        const isExists = cartItems.some(item => item.id === itemId);
        let updatedCart;

        if (isExists) {
            updatedCart = cartItems.map((item) =>
                item.id === itemId ? { ...item, amount: amount } : item
            );
        } else {
            updatedCart = [...cartItems, newItem];
        }

        setCartItems(updatedCart);
        localStorage.setItem("cart", JSON.stringify(updatedCart));
    };

    // ✅ Ürünü sepetten azaltma fonksiyonu
    const removeFromCart = (itemId, amount) => {
        let selected = cartItems.find(item => item.id === itemId);
        let remaining = cartItems.filter(item => item.id !== itemId);

        if (!selected) return; // Eğer ürün yoksa işlem yapma

        let updatedSelected = { ...selected, amount: selected.amount - amount };

        if (updatedSelected.amount > 0) {
            remaining.push(updatedSelected);
        }

        setCartItems(remaining);
        localStorage.setItem("cart", JSON.stringify(remaining));
    };

    // ✅ Context’e verilecek değerler
    const contextValue = {
        all_product,
        cartItems,
        addToCart,
        removeFromCart,
        getCartProduct,
    };

    return <Context.Provider value={contextValue}>{props.children}</Context.Provider>;
};

export default ContextProvider;
