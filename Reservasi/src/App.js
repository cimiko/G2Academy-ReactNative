import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import React from 'react';
import {
  StatusBar,
} from 'react-native';

import { HOME, CART, TABLE, CHECKOUT } from '~/Store/constant';
import { Home, Cart, Table, Checkout } from '~/Screen';
import { ContextProvider } from '~/Store/context'

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const App = () => {

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <ContextProvider>
        <NavigationContainer>
          <Tab.Navigator>
            <Tab.Screen name={HOME} component={HomeStackScreen} />
            <Tab.Screen name={CART} component={CartStackScreen} />
          </Tab.Navigator>
        </NavigationContainer>
      </ContextProvider>
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

export default App;
