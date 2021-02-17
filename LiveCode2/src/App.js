/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useEffect, useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  FlatList,
  ActivityIndicator
} from 'react-native';

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';

import { Header } from './assets'

const App = () => {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch('https://swapi.dev/api/people')
      .then((response) => response.json())
      .then((res) => {
        setData(res.results),
          setLoading(false)
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>

          <Header />

          
          <View style={styles.sectionContainer}>
            <Text style={styles.name}>Name</Text>
            <Text style={styles.height}>Height</Text>
            <Text style={styles.mass}>Mass</Text>
          </View>
          <View style={styles.data}>
            <FlatList
              data={data}
              renderItem={({ item }) => (
                <View style={styles.sectionContainer}>
                  <Text style={styles.name}>{item.name}</Text>
                  <Text style={styles.height}>{item.height}</Text>
                  <Text style={styles.mass}>{item.mass}</Text>
                </View>
              )}
            />
          </View>
          <ActivityIndicator size="large" animating={loading} color='#0000ff' style={styles.loader}/>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter
  },
  loader:{
    zIndex: 999,
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
    height: 400
  },
  data:{
    paddingBottom: 50
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    // paddingHorizontal: 24,
    flexDirection: 'row',
    justifyContent: 'center'
  },
  name: {
    width: 150
  },
  height: {
    width: 100
  },
  mass: {
    width: 100
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;
