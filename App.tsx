import React, {useEffect, useState} from 'react';
import {ImageBackground, SafeAreaView, StyleSheet} from 'react-native';
import {Favourites} from './src/components/favouritesScreen/favouritesScreen';
import {Home} from './src/components/homeScreen/homeScreen';
import {Navigation} from './src/components/navigation/Navigation';
import {getBackground} from './src/utils/utils';

import {SharedContextProvider} from './src/contexts/sharedContext';
import {SplashScreen} from './src/components/splashScreen/splashScreen';

const App = () => {
  const [activePage, setActivePage] = useState('home');
  const [background, setBackground] = useState(null);

  const [playSplash, setPlaySplash] = useState(false);

  const [navigationHeight, setNavigationHeight] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setPlaySplash(true);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <SharedContextProvider value={{navigationHeight, setNavigationHeight}}>
      {playSplash ? (
        <SplashScreen />
      ) : (
        <SafeAreaView style={styles.container}>
          <ImageBackground
            source={getBackground(background || '')}
            resizeMode="cover"
            style={styles.backgroundIMG}>
            {activePage === 'home' ? (
              <Home changeBackground={setBackground} />
            ) : (
              <Favourites />
            )}
            <Navigation onPress={setActivePage} />
          </ImageBackground>
        </SafeAreaView>
      )}
    </SharedContextProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundIMG: {
    flex: 1,
    borderWidth: 1,
  },
});

export default App;
