import React, { createContext, useState, useEffect } from "react";

export const ShopContext = createContext(null);

const ShopContextProvider = (props) => {


    const [all_product, setAll_product] = useState([]);
    const [cartItems, setCartItems] = useState({});

    useEffect(() => {

    // Récupérer tous les produits depuis le backend

        fetch('http://localhost:3090/allproducts')
            .then((response) => response.json())
            .then((data) => {
                setAll_product(data);

    // Définir le panier par défaut une fois que tous les produits sont récupérés

        setCartItems(getDefaultCart(data));
            })
        .catch((error) => console.error('Error fetching products:', error));
    }, []);

    // Fonction pour définir le panier par défaut

    const getDefaultCart = (products) => {
        let cart = {};
        products.forEach(product => {
            cart[product._id] = 0;
        });
        return cart;
    }

    // Fonction pour ajouter un élément au panier

    const addToCart = (itemId) => {
        setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));

    // Appel à l'API pour ajouter l'élément au panier côté serveur

        if (localStorage.getItem('auth-token')) {
            fetch('http://localhost:3090/addtocart', {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'auth-token': `${localStorage.getItem('auth-token')}`,
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ itemId: itemId }),
            })
                .then((response) => response.json())
                .then((data) => console.log(data))
                .catch((error) => console.error('Error adding to cart:', error));
        }
    }

    // Fonction pour retirer un élément du panier

    const removeFromCart = (itemId) => {
        if (cartItems[itemId] > 0) {
            setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));

    // Appel à l'API pour retirer l'élément du panier côté serveur

            if (localStorage.getItem('auth-token')) {
                fetch('http://localhost:3090/removefromcart', {
                    method: 'POST',
                    headers: {
                        Accept: 'application/json',
                        'auth-token': `${localStorage.getItem('auth-token')}`,
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ itemId: itemId }),
                })
                    .then((response) => response.json())
                    .then((data) => console.log(data))
                    .catch((error) => console.error('Error removing from cart:', error));
            }
        }
    }

    // Fonction pour calculer le montant total du panier

    const getTotalCartAmount = () => {
        let totalAmount = 0;
        for (const item in cartItems) {
            if (cartItems[item] > 0) {
                let itemInfo = all_product.find((product) => product._id === item);
                console.log(itemInfo)
                totalAmount += itemInfo.new_price * cartItems[item];
            }
        }
        return totalAmount;
    }

    // Fonction pour calculer le nombre total d'articles dans le panier

    const getTotalCartItems = () => {
        let totalItem = 0;
        for (const item in cartItems) {
            if (cartItems[item] > 0) {
                totalItem += cartItems[item];
            }
        }
        return totalItem;
    }

    // Valeur du contexte à fournir aux composants enfants

    const contextValue = {
        getTotalCartItems,
        getTotalCartAmount,
        all_product,
        cartItems,
        addToCart,
        removeFromCart
    };

    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    );
}

export default ShopContextProvider;
