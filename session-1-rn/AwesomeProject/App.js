/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { Header } from './ui-kit/Organism'

import { NativeRouter, Route } from "react-router-native";
import { Home, Experience, Skills } from './Pages'
import { StatusBar, View, SafeAreaView, ScrollView, StyleSheet } from 'react-native'


const App: () => React$Node = () => {
  return (
    <View>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          <Header />
          <NativeRouter>
            <Route exact path="/" component={Home} />
            <Route path="/experience" component={Experience} />
            <Route path="/skills" component={Skills} />
          </NativeRouter>
        </ScrollView>
      </SafeAreaView>

    </View>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: 'white'
  }
})

export default App;
