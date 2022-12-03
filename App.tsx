import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import {Favourites} from './src/components/favouritesScreen/favouritesScreen';
import {Home} from './src/components/homeScreen/homeScreen';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Home />
      <Favourites />
    </SafeAreaView>
  );
};

export default App;
