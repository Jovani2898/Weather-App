import React, {useEffect, useState} from 'react';
import {ImageBackground, SafeAreaView, StyleSheet} from 'react-native';
import {Favourites} from './src/components/favouritesScreen/favouritesScreen';
import {Home} from './src/components/homeScreen/homeScreen';
import {Navigation} from './src/components/navigation/Navigation';

const cloudsBG = require('./assets/clouds.png');
const sunnyBG = require('./assets/clouds.png');

const getBackground = (uri: string) => {
  if (uri === 'clouds') {
    return cloudsBG;
  } else if (uri === 'sunny') {
    return sunnyBG;
  } else {
    return '';
  }
};

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
      <ImageBackground
        source={getBackground(background || '')}
        resizeMode="cover"
        style={{flex: 1, borderWidth: 1}}>
        {activePage === 'home' ? (
          <Home changeBackground={setBackground} />
        ) : (
          <Favourites />
        )}
        <Navigation onPress={setActivePage} />
      </ImageBackground>
    </SafeAreaView>
  );
};

export default App;
