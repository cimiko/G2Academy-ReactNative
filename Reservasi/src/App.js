import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import React, { createContext, useEffect, useReducer, useState } from 'react';
import {
  StatusBar,
} from 'react-native';

import { HOME, CART, TABLE, ADD_TABLE, CHECKOUT } from '~/Store/constant';
import { Home, Cart, Table, Checkout } from '~/Screen';
import { tableReducer, tableState } from '~/Store/reducer/tableReducer'
import { cartReducer, checkoutReducer } from './Store/reducer';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();
const Context = createContext();

const App = () => {
  const [table, setTable] = useReducer(tableReducer, tableState)
  const [cart, setCart] = useReducer(cartReducer, [])
  const [checkout, setCheckout] = useReducer(checkoutReducer, [])
  const [cartId, setCartId] = useState()
  const [itemId, setItemId] = useState()

  useEffect(() => {
    setTable({
      type: ADD_TABLE
    })
  }, [])

  return (
    <>
      <StatusBar barStyle="dark-content" />
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
      }}>
        <NavigationContainer>
          <Tab.Navigator>
            <Tab.Screen name={HOME} component={HomeStackScreen} />
            <Tab.Screen name={CART} component={CartStackScreen} />
          </Tab.Navigator>
        </NavigationContainer>
      </Context.Provider>
    </>
  );
};

function HomeStackScreen() {
  return (
    <Stack.Navigator>
      <Stack.Screen name={HOME} component={Home} options={{ title: 'Pochajjang' }} />
      <Stack.Screen name={TABLE} component={Table} />
    </Stack.Navigator>
  )
}

function CartStackScreen() {
  return (
    <Stack.Navigator>
      <Stack.Screen name={CART} component={Cart} options={{ title: 'Cashier' }} />
      <Stack.Screen name={CHECKOUT} component={Checkout} />
    </Stack.Navigator>
  )
}

export { App, Context };
