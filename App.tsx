import React, {useState} from 'react';
import {ImageBackground, SafeAreaView, StyleSheet} from 'react-native';
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
  const [background, setBackground] = useState(null);
  return (
    <SafeAreaView style={styles.container}>
      {activePage === 'home' ? (
        <Home changeBackground={setBackground} />
      ) : (
        <Favourites />
      )}
      <Navigation onPress={setActivePage} />
      {background && (
        <ImageBackground
          source={background}
          resizeMode="cover"
          style={{flex: 1}}
        />
      )}
    </SafeAreaView>
  );
};

export default App;
