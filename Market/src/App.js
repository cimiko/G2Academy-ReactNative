import 'react-native-gesture-handler';
import React, { useEffect, createContext, useState, useReducer } from 'react';
import Screen from 'react-native-splash-screen'
import { NavigationContainer } from '@react-navigation/native';
import { Home, Checkout, Product } from './pages'
import { HOME, PRODUCT, CHECKOUT } from './store/constants'
import {cartReducer, initialState} from './store/reducer/cartReducer'
import {
  StyleSheet,
  StatusBar,
} from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import historyReducer from './store/reducer/historyReducer';

const Context = createContext()

const App = () => {
  const Stack = createStackNavigator();

  const [product, setProduct] = useState()
  const [itemId, setItemId] = useState()
  const [dataProduct, dispatch] = useReducer(cartReducer, initialState)
  const [history, setHistory] = useReducer(historyReducer, [])

  useEffect(() => {
    Screen.hide();
    fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(json => setProduct(json))
  }, []);

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <Context.Provider value={{ product, setProduct, itemId, setItemId, dataProduct, dispatch, history, setHistory }}>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name={HOME} component={Home} options={{title: 'E-Market'}} />
            <Stack.Screen name={PRODUCT} component={Product} />
            <Stack.Screen name={CHECKOUT} component={Checkout} />
          </Stack.Navigator>
        </NavigationContainer>
      </Context.Provider>
    </>
  );
};

const styles = StyleSheet.create({

});

export {App, Context};
