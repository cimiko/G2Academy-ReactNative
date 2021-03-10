import React, { createContext, useContext, useEffect, useReducer, useState } from 'react'
import { tableReducer, tableState } from '~/Store/reducer/tableReducer'
import { cartReducer, checkoutReducer } from '~/Store/reducer';
import { ADD_TABLE } from '~/Store/constant';

const Context = createContext();

function ContextProvider({ children }) {
    const [table, setTable] = useReducer(tableReducer, tableState)
    const [cart, setCart] = useReducer(cartReducer, [])
    const [checkout, setCheckout] = useReducer(checkoutReducer, [])
    const [cartId, setCartId] = useState()
    const [itemId, setItemId] = useState()

    useEffect(() => {
        setTable({
            type: ADD_TABLE
        })
    }, []);

    return (
        <Context.Provider value={{
            table,
            setTable,
            itemId,
            setItemId,
            cart,
            setCart,
            checkout,
            setCheckout,
            cartId,
            setCartId
        }}>{children}</Context.Provider>
    )
}

function useContextProvider() {
    const context = useContext(Context);

    if (context === undefined) {
        throw new Error('useContextProvider must be used within a ContextProvider');
    }

    return context;
}

export { ContextProvider, useContextProvider }
