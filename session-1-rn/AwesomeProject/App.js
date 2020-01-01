/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';

import { NativeRouter, Route } from "react-router-native";
import { Home, Experience, Skills } from './Pages'


const App: () => React$Node = () => {
  return (
    <NativeRouter>
      <Route exact path="/" component={Home} />
      <Route path="/experience" component={Experience} />
      <Route path="/skills" component={Skills} />
    </NativeRouter>
  );
};

export default App;
