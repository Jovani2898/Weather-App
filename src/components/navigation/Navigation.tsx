import React, {useContext} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {sharedContext} from '../../contexts/sharedContext';
import {styles} from './styles';

export const Navigation = ({onPress}) => {
  const {setNavigationHeight} = useContext(sharedContext);

  return (
    <View
      style={styles.container}
      onLayout={e => {
        const {height} = e.nativeEvent.layout;
        setNavigationHeight(height);
      }}>
      <TouchableOpacity
        style={styles.touchableOpacity}
        onPress={() => {
          onPress('home');
        }}>
        <Text style={styles.touchableOpacityText}>Home</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.touchableOpacity}
        onPress={() => {
          onPress('favourites');
        }}>
        <Text style={styles.touchableOpacityText}>Favourites</Text>
      </TouchableOpacity>
    </View>
  );
};
