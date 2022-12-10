import React, {useState} from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import {Favourites} from './src/components/favouritesScreen/favouritesScreen';
import {Home} from './src/components/homeScreen/homeScreen';
import {Navigation} from './src/components/navigation/Navigation';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

const App = () => {
  const [activePage, setActivePage] = useState('home');
  return (
    <SafeAreaView style={styles.container}>
      {activePage === 'home' ? <Home /> : <Favourites />}
      <Navigation onPress={setActivePage} />
    </SafeAreaView>
  );
};

export default App;
